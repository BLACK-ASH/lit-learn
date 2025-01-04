import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

const isProtectedRoute = createRouteMatcher(['/blogs(.*)', '/pyqs(.*)', '/notes(.*)', '/profile(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // Check if the request is for a public route
  if (isPublicRoute(req)) {
    return; // Allow access without authentication
  }

  // Check if the request is for a protected route
  if (isProtectedRoute(req)) {
    await auth.protect(); // Enforce authentication
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}