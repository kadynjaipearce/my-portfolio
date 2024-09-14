import { defineBackend } from "@aws-amplify/backend";
import { data, auth } from "@/amplify/data/resource";

defineBackend({
  data,
  auth,
});
