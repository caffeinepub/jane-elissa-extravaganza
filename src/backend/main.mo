import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import Stripe "stripe/stripe";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import OutCall "http-outcalls/outcall";
import AccessControl "authorization/access-control";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  include MixinStorage();

  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type Application = {
    id : Text;
    applicant : Principal;
    fullName : Text;
    dob : Text;
    email : Text;
    phone : Text;
    city : Text;
    videoMethod : VideoMethod;
    paymentIntentId : Text;
    submissionTimestamp : Time.Time;
    paymentStatus : PaymentStatus;
  };

  public type VideoMethod = {
    #uploaded : Storage.ExternalBlob;
    #youtubeLink : Text;
  };

  public type PaymentStatus = {
    #pending;
    #completed;
    #failed : { reason : Text };
  };

  public type UserProfile = {
    name : Text;
  };

  module Application {
    public func compareBySubmissionTimestampDesc(a : Application, b : Application) : Order.Order {
      Int.compare(b.submissionTimestamp, a.submissionTimestamp);
    };
  };

  var lastApplicationId = 0;
  let applications = Map.empty<Text, Application>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  var stripeConfig : ?Stripe.StripeConfiguration = null;

  // User profile management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Application submission - accessible to anyone (guests can apply)
  public shared ({ caller }) func submitApplication(newApplication : Application) : async () {
    // Verify the applicant field matches the caller
    if (newApplication.applicant.notEqual(caller)) {
      Runtime.trap("Unauthorized: Cannot submit application for another user");
    };
    applications.add(newApplication.id, newApplication);
  };

  public query func isStripeConfigured() : async Bool {
    stripeConfig != null;
  };

  // Admin-only: Configure Stripe
  public shared ({ caller }) func setStripeConfiguration(config : Stripe.StripeConfiguration) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    stripeConfig := ?config;
  };

  func getStripeConfiguration() : Stripe.StripeConfiguration {
    switch (stripeConfig) {
      case (null) { Runtime.trap("Stripe needs to be first configured") };
      case (?value) { value };
    };
  };

  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };

  // Admin-only: View all applications (internal/admin view)
  public query ({ caller }) func getAllApplications() : async [Application] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all applications");
    };
    applications.values().toArray().sort(Application.compareBySubmissionTimestampDesc);
  };

  // View application: owner or admin only
  public query ({ caller }) func getAppById(applicationId : Text) : async Application {
    let application = switch (applications.get(applicationId)) {
      case (null) { Runtime.trap("No application with id " # applicationId) };
      case (?application) { application };
    };

    // Check authorization: must be the applicant or an admin
    if (caller.notEqual(application.applicant) and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own application");
    };

    application;
  };

  // Check payment status: owner or admin only
  public query ({ caller }) func getStatus(applicationId : Text) : async PaymentStatus {
    let application = switch (applications.get(applicationId)) {
      case (null) { Runtime.trap("No application with id " # applicationId) };
      case (?application) { application };
    };

    // Check authorization: must be the applicant or an admin
    if (caller.notEqual(application.applicant) and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own application status");
    };

    application.paymentStatus;
  };

  // Admin-only: Update payment status
  public shared ({ caller }) func updateStatus(applicationId : Text, paymentStatus : PaymentStatus) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update payment status");
    };

    let application = switch (applications.get(applicationId)) {
      case (null) { Runtime.trap("No application with id " # applicationId) };
      case (?application) { application };
    };
    applications.add(applicationId, { application with paymentStatus });
  };

  // Create Stripe session - accessible to anyone submitting an application
  public shared ({ caller }) func createCheckoutSession(items : [Stripe.ShoppingItem], successUrl : Text, cancelUrl : Text) : async Text {
    await Stripe.createCheckoutSession(getStripeConfiguration(), caller, items, successUrl, cancelUrl, transform);
  };

  // Get Stripe session status - accessible to anyone checking their payment
  public func getStripeSessionStatus(sessionId : Text) : async Stripe.StripeSessionStatus {
    await Stripe.getSessionStatus(getStripeConfiguration(), sessionId, transform);
  };
};
