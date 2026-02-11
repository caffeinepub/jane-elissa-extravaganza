import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface Application {
    id: string;
    dob: string;
    applicant: Principal;
    paymentStatus: PaymentStatus;
    submissionTimestamp: Time;
    city: string;
    fullName: string;
    email: string;
    videoMethod: VideoMethod;
    phone: string;
    paymentIntentId: string;
}
export type VideoMethod = {
    __kind__: "youtubeLink";
    youtubeLink: string;
} | {
    __kind__: "uploaded";
    uploaded: ExternalBlob;
};
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export type Time = bigint;
export interface http_header {
    value: string;
    name: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface ShoppingItem {
    productName: string;
    currency: string;
    quantity: bigint;
    priceInCents: bigint;
    productDescription: string;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export type StripeSessionStatus = {
    __kind__: "completed";
    completed: {
        userPrincipal?: string;
        response: string;
    };
} | {
    __kind__: "failed";
    failed: {
        error: string;
    };
};
export interface StripeConfiguration {
    allowedCountries: Array<string>;
    secretKey: string;
}
export type PaymentStatus = {
    __kind__: "pending";
    pending: null;
} | {
    __kind__: "completed";
    completed: null;
} | {
    __kind__: "failed";
    failed: {
        reason: string;
    };
};
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createCheckoutSession(items: Array<ShoppingItem>, successUrl: string, cancelUrl: string): Promise<string>;
    getAllApplications(): Promise<Array<Application>>;
    getAppById(applicationId: string): Promise<Application>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getStatus(applicationId: string): Promise<PaymentStatus>;
    getStripeSessionStatus(sessionId: string): Promise<StripeSessionStatus>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    isPublished(): Promise<boolean>;
    isStripeConfigured(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    setSitePublishedState(publish: boolean): Promise<void>;
    setStripeConfiguration(config: StripeConfiguration): Promise<void>;
    submitApplication(newApplication: Application): Promise<void>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
    updateStatus(applicationId: string, paymentStatus: PaymentStatus): Promise<void>;
}
