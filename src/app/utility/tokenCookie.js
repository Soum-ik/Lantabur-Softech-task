import { CreateToken } from "./JwtTokenHelper";

export async function TokenCookie(email) {
  let token = await CreateToken(email);

  return {
    "Set-Cookie": `token = ${token}; Max-age = 7200; Secure; HttpOnly; path=/; SameSite=Strict`,
  }
}
