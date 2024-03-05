import { NextResponse } from "next/server";
import { VerifyToken } from "./JwtTokenHelper";

export async function CheckCookieAuth(request) {
  let token = await request.cookies.get("token");
  console.log(token);
  try {
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
    console.log(e);
    return NextResponse.redirect(new URL("/public", request.url));
  }
}
