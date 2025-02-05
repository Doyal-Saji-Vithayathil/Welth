import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  try {
    // Get user details from Clerk
    const { userId } = await auth();

    // If user is not authenticated and trying to access a protected route
    if (!userId && isProtectedRoute(req)) {
      const { redirectToSignIn } = await auth();
      return redirectToSignIn();
    }
  } catch (error) {
    console.error("Error during Clerk authentication:", error);
    // You can choose to redirect to a custom error page or handle it as needed
    return new Response("Authentication error", { status: 500 });
  }
});

// Configuration to match routes for middleware
export const config = {
  matcher: [
    // Match all routes except Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes and trpc
    '/(api|trpc)(.*)',
  ],
};
