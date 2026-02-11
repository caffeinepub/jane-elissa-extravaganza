import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import ApplyPage from './pages/ApplyPage';
import FaqsPage from './pages/FaqsPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import PaymentFailurePage from './pages/PaymentFailurePage';
import Layout from './components/Layout';
import SitePublishGate from './components/SitePublishGate';

const rootRoute = createRootRoute({
  component: Layout
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
});

const applyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/apply',
  component: ApplyPage
});

const faqsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/faqs',
  component: FaqsPage
});

const paymentSuccessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/payment-success',
  component: PaymentSuccessPage
});

const paymentFailureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/payment-failure',
  component: PaymentFailurePage
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  applyRoute,
  faqsRoute,
  paymentSuccessRoute,
  paymentFailureRoute
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <SitePublishGate>
      <RouterProvider router={router} />
    </SitePublishGate>
  );
}
