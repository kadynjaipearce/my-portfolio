import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyData",
  access: (allow) => ({
    "media/*": [
      allow.guest.to(["get", "list"]),
      allow.authenticated.to(["read", "write"]),
    ],
    "images/*": [
      allow.guest.to(["get", "list"]),
      allow.authenticated.to(["read", "write"]),
    ],
  }),
});
