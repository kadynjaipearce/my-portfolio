import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  Project: a
    .model({
      id: a.id().required(),
      title: a.string().required(),
      img: a.string().required(),
      body: a.string().required(),
      category: a.enum([
        "Web_Development",
        "Blockchain_Development",
        "Software_Engineering",
        "Other",
      ]),
      githubUrl: a.string().required(),
      externalUrl: a.string().required(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["get", "list"]),
      allow
        .authenticated()
        .to(["create", "update", "get", "delete", "list", "sync"]),
    ])
    .identifier(["id"]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 999, // until i fix it
    },
  },
});
