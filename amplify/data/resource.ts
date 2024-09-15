import {
  a,
  defineData,
  defineAuth,
  secret,
  type ClientSchema,
} from "@aws-amplify/backend";

const schema = a.schema({
  Project: a
    .model({
      id: a.id().required(),
      title: a.string(),
      img: a.string(),
      body: a.string(),
      category: a.enum([
        "Web_Development",
        "Blockchain_Development",
        "Software_Engineering",
      ]),
      githubUrl: a.string(),
      externalUrl: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()])
    .identifier(["id"]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  },
});
