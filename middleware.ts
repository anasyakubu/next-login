// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/profile",
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the user is authenticated by checking the token in cookies
  const token = request.cookies.get("token");
  if (!token) {
    // Redirect to login page if the token is not present
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // User is authenticated, allow access to the page
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard",
};
