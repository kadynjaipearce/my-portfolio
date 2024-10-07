import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyData",
  access: (allow) => ({
    "media/*": [
      allow.guest.to(["read"]),
      allow.authenticated.to(["list", "get", "write", "delete"]),
    ],
    "images/*": [
      allow.guest.to(["read"]),
      allow.authenticated.to(["list", "get", "write", "delete"]),
    ],
  }),
});
