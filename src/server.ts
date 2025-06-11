import app from "./app";
import { client } from "./config/mongodb";

let server;
const port = 5000;

const tailwind = async () => {
  await client.connect();
  console.log("Connected to MongoDB");

  server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

tailwind();