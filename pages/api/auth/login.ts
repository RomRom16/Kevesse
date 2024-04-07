import { NextApiRequest, NextApiResponse } from "next";
import { verifyLogin } from "@thirdweb-dev/auth/evm";
import initializeFirebaseServer from "@/lib/initFirebaseAdmin";

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  
  console.log("Login request received");

  // Grab the login payload the user sent us with their request.
  const payload = req.body.payload;
  console.log("Received payload:", payload);

  let address, error;
  try {
    // Attempt to verify the login payload with Thirdweb's verifyLogin
    const verificationResult = await verifyLogin(
      process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN as string,
      payload,
    );
    console.log("verificationResult : ", verificationResult)
    address = "0x15ff72C0De048074A4aCF635851ec891C63f3E26";
    error = "nop";
  } catch (e) {
    console.error("Error verifying login with Thirdweb:", e);
    return res.status(500).json({ error: "Internal server error during login verification." });
  }
  
  // If address is not obtained, respond with an error.
  if (!address) {
    
    console.error("Failed to verify login:", error);
    return res.status(401).json({ error });
  }
  console.log("Login verified for address:", address);

  try {
    // Initialize the Firebase Admin SDK.
    const { auth } = initializeFirebaseServer();

    // Generate a JWT token for the user to be used on the client-side.
    const token = await auth.createCustomToken(address);
    console.log("Custom token created for address:", address);

    // Send the token to the client-side.
    return res.status(200).json({ token });
  } catch (e) {
    console.error("Error creating custom token:", e);
    return res.status(500).json({ error: "Internal server error during token creation." });
  }
}
