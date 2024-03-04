import { NextResponse } from "next/server";
import { VerifyToken } from "./app/utility/JwtTokenHelper";
export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/private")) {
    try {
      let token = req.cookies.get("token");
      console.log(token, "middleware taki");
      if (!token) {
        console.log("token nai", token);
        throw new Error("Token not found");
      }
      let payload = await VerifyToken(token["value"]);
      console.log(payload, token);
      const requestHeader = new Headers(req.headers);
      requestHeader.set("email", payload.email);
      requestHeader.set("id", payload.id);
      
      return NextResponse.next({
        request: { headers: requestHeader },
      });
    } catch (error) {
      console.log(error, "middleeware error");
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/public")) {
    console.log("kam nai");
    return NextResponse.next();
  }
}
