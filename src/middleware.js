// import { NextResponse } from "next/server";
// import { VerifyToken } from "./app/utility/JwtTokenHelper";

import { CheckCookieAuth } from "./app/utility/middlewareUtily";

export async function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/private")) {
    return CheckCookieAuth(request);
  }
}
