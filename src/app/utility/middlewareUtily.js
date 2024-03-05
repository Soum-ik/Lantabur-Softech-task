import { NextResponse } from "next/server";
import { VerifyToken } from "./JwtTokenHelper";

export async function CheckCookieAuth(req) {
  try {
         // Retrieve the token from the cookies
    let token = req.cookies.get("token");

    // Ensure that the token is not null or undefined
    if (!token) {
      throw new Error("Token not found in cookies");
    }
    let payload = await VerifyToken(token["value"]);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", payload["email"]);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  } catch (e) {
    console.log(e);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
