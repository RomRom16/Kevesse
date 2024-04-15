"use server";
import { VerifyLoginPayloadParams, createAuth } from "thirdweb/auth";
import { privateKeyAccount } from "thirdweb/wallets";
import { client } from "../../../lib/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const privateKey = process.env.THIRDWEB_ADMIN_PRIVATE_KEY || "";

if (!privateKey) {
  throw new Error("Missing THIRDWEB_ADMIN_PRIVATE_KEY in .env file.");
}

const thirdwebAuth = createAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
  adminAccount: privateKeyAccount({ client, privateKey }),
});

export const generatePayload = thirdwebAuth.generatePayload;

export async function login(payload: VerifyLoginPayloadParams) {
  const verifiedPayload = await thirdwebAuth.verifyPayload(payload);
  if (verifiedPayload.valid) {
    const jwt = await thirdwebAuth.generateJWT({
      payload: verifiedPayload.payload,
    });
    cookies().set("jwt", jwt);
    // redirect to the secure page
    return redirect("/campaigns/secure");
  }
}

export async function authedOnly() {
  const jwt = cookies().get("jwt");
  if (!jwt?.value) {
    redirect("/campaigns");
  }

  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  if (!authResult.valid) {
    redirect("/campaigns");
  }
  return authResult.parsedJWT;
}

export async function logout() {
  cookies().delete("jwt");
}
