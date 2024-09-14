import Login from "@/components/Login";
import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";

export default function login() {
  return (
    <div>
      <Login></Login>
    </div>
  );
}
