import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  Project: a
    .model({
      id: a.id(),
      title: a.string(),
      img: a.string(),
      body: a.string(),
      category: a.string(),
      githubUrl: a.string(),
      externalUrl: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  },
});
