import { signOut } from "aws-amplify/auth";
import React from "react";
signOut;

export default function LogOut() {
  async function handleSignOut() {
    await signOut();
  }
  return (
    <div>
    <button onClick={() => handleSignOut()}>Logout</button>
    </div>
  );
}
