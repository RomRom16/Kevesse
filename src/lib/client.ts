import { createThirdwebClient } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!;
const secretKey = process.env.THIRDWEB_SECRET_KEY;

export const client = createThirdwebClient(
  secretKey
    ? { secretKey }
    : {
        clientId,
      }
);
