import { defineBackend } from "@aws-amplify/backend";
import { data } from "@/amplify/data/resource";

defineBackend({
  data,
});
