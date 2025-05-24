import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect(); // Protect routes
});

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',               // Protect all subroutes under /dashboard
    '/dashboard/settings(.*)',       // Protect settings and subroutes under it
]);

// Middleware configuration
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',              // Always protect API and Clerk routes
    '/dashboard/settings(.*)',      // Protect settings route
  ],
};

