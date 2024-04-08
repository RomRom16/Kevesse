"use client";
import type { NextPage } from "next";
import { ConnectButton, ThirdwebProvider } from "thirdweb/react";
import { LoginButton } from "./components/login-button";
import { client } from "../../lib/client";

const Campaigns: NextPage = () => {
  return (
    <ThirdwebProvider>
      <div style={{marginTop:50}}>
        <h2 style={{color:"white"}}>Step 1: Connect Wallet</h2>
        <ConnectButton client={client} />
        <h2 style={{color:"white"}}>Step 2: Sign the login payload</h2>
        <LoginButton />
      </div>
    </ThirdwebProvider>
  );
};

export default Campaigns;
