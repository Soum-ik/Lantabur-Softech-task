import { TokenCookie } from "@/app/utility/tokenCookie";

import { NextResponse } from "next/server"; 

export async function POST(req, res) {
  try {
    const reqbody = await req.json();
    const { password, email } = reqbody;
    if (email === "test@gmail.com" && password === `200`) {
      let Cookie = await TokenCookie(email);

      return NextResponse.json(
        { status: true, message: "Login Success", data: reqbody},
        { status: 200, headers: Cookie }
      );
    } else {
      return NextResponse.json({ status: false, message: "Login Fail" });
    }
  } catch (error) {
    console.error("Error occurred:", error);

    return NextResponse.json({ status: "fail", error: error });
  }
}
