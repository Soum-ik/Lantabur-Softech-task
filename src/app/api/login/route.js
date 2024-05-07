import { CreateToken } from "@/app/utility/JwtTokenHelper";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
 

export async function POST(req, res) {
  try {
    const reqbody = await req.json();
    const { password, email } = reqbody;
    if (email === "test@gmail.com" && password === "200") {
      let token = await CreateToken(email);
      const cookieString = `token = ${token}; Max-age = 7200; Secure; HttpOnly; path=/;`;
      

      return NextResponse.json(
        { status: true, message: "Login Success", data: reqbody },
        { status: 200, headers: { "Set-Cookie": cookieString } }
      );
    } else {
      return NextResponse.json({
        status: false,
        message: "Your data is not matched",
      });
    }
  } catch (error) {
    console.error("Error occurred:", error)

    return NextResponse.json({ status: "fail", error: error });
  }
}

export async function GET(req, res) {
  // Clearing the cookie by setting an expired date
  return NextResponse.json(
    { status: true, message: "Logout Success" },
    {
      status: 200,
      headers: {
        "Set-Cookie": "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",
      },
    }
  );
}
