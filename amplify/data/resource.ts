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
      allow.publicApiKey().to(["read", "create"]),
      allow.owner().to(["create", "update", "get", "delete"]),
    ])
    .identifier(["id"]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  },
});
