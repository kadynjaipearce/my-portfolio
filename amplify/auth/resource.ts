import { defineAuth, secret } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret("GOOGLE_CLIENT_ID"),
        clientSecret: secret("GOOGLE_CLIENT_SECRET"),
        attributeMapping: {
          email: "email",
        },

        scopes: ["email"],
      },
      callbackUrls: [
        "http://localhost:3000/login",
        "https://kadynpearce.dev/login",
      ],
      logoutUrls: [
        "http://localhost:3000/logout",
        "https://kadynpearce.dev/logout",
      ],
    },
  },
});
