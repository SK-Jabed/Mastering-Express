import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://MasteringExpress:Re4TKTiLUmGNPzEF@cluster0.baizo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
