import { NextResponse } from "next/server";
import { VerifyToken } from "./app/utility/JwtTokenHelper";

export async function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/private")) {
    try {
      // Retrieve the token from the cookies
      let token = request.cookies.get("token");

      // Ensure that the token is not null or undefined
      if (!token) {
        throw new Error("Token not found in cookies");
      }

      let payload = await VerifyToken(token["value"]);

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("email", payload["email"]);
      return NextResponse.next({
        request: { headers: requestHeaders },
      });
    } catch (e) {
      console.log(e, "tk");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
