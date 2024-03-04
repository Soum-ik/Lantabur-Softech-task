import { SignJWT, jwtVerify } from "jose";

export async function CreateToken(email) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION)
    .sign(secret);
  return token;
}

export async function VerifyToken(token) {
   
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decode = await jwtVerify(token, secret);
  console.log(decode['payload'], "ami decode taki");
  return decode["payload"];
}
