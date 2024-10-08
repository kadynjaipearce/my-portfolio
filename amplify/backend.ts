import { defineBackend } from "@aws-amplify/backend";
import { data } from "@/amplify/data/resource";
import { storage } from "@/amplify/storage/resource";
import { auth } from "@/amplify/auth/resource";

const backend = defineBackend({
  auth,
  data,
  storage,
});
