"use client";

import { ConnectWallet, useAddress, useAuth } from "@thirdweb-dev/react";
import { signInWithCustomToken, signOut } from "firebase/auth";
import { useConnect, metamaskWallet } from "@thirdweb-dev/react";
import React from "react";

import initializeFirebaseClient from "@/lib/initFirebase";
import { getDoc, doc, serverTimestamp, setDoc } from "firebase/firestore";
import useFirebaseUser from "@/lib/useFirebaseUser";
import useFirebaseDocument from "@/lib/useFirebaseUserDocument";
import { MetaMaskWallet } from "@thirdweb-dev/wallets";

const metamaskConfig = metamaskWallet();

export default function Login() {
  const thirdwebAuth = useAuth();
  const address = useAddress();
  const { auth, db } = initializeFirebaseClient();
  const { user, isLoading: loadingAuth } = useFirebaseUser();
  const { document, isLoading: loadingDocument } = useFirebaseDocument();
  const connect = useConnect();

  const signIn = async () => {
    console.log("Attempting to sign in, address:", address);

    // Check if the thirdwebAuth login method is available
    if (!thirdwebAuth) {
      console.error("Thirdweb Auth not initialized");
      return;
    }

    try {
      const payload = thirdwebAuth.login();
      console.log("Login payload:", payload);

      console.log(address);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
      });

      if (!res.ok) {
        console.error("Failed to get JWT token from API:", await res.text());
        return;
      }

      const { token } = await res.json();
      if (!token) {
        console.error("Received null or undefined token.");
        return;
      }
      console.log("JWT Token:", token);

      const userCredential = await signInWithCustomToken(auth, token);
      console.log("Signed in user:", userCredential.user);

      const usersRef = doc(db, "users", userCredential.user.uid);
      const userDoc = await getDoc(usersRef);

      if (!userDoc.exists()) {
        await setDoc(
          usersRef,
          { createdAt: serverTimestamp() },
          { merge: true }
        );
        console.log(
          "Created a new document for the user:",
          userCredential.user.uid
        );
      }
    } catch (error) {
      console.error("Error during sign-in process:", error);
    }
  };

  return (
    <div>
      <div className="text-white mt-[100px]">
        <h1>thirdweb + Firebase</h1>
        <p>By clicking the button below, you authenticate with your wallet.</p>
        <p>{address}</p>
        <p>
          You will have a user created for you in Firebase Auth and a document
          created for you in Firestore.
        </p>

        {address ? (
          <div>
            {!user ? (
              <button onClick={signIn}>Sign in with Wallet</button>
            ) : (
              <button onClick={() => signOut(auth)}>Sign Out</button>
            )}

            <hr />

            <h2>Current Firebase Information</h2>
            <p>
              <b>User ID: </b>
              {loadingAuth ? "Loading..." : user?.uid || "Not logged in"}
            </p>
            <p>
              <b>Document ID: </b>
              {loadingDocument ? "Loading..." : document?.id || "No document"}
            </p>
          </div>
        ) : (
          <button
            onClick={async () => {
              console.log("Connecting to MetaMask...");
              const wallet = await connect(metamaskConfig);
              console.log("Connected to wallet:", wallet);
            }}
          >
            Connect to MetaMask
          </button>
        )}
        <ConnectWallet
          theme={"dark"}
          switchToActiveChain={true}
          modalSize={"wide"}
        />
      </div>
    </div>
  );
}
