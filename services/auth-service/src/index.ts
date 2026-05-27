import { createApp } from "@/app";
import { createServer } from "https";
import { env } from "./config/env";
const main = async () => {
  try {
    const app = createApp();
    const server = createServer(app);
    const PORT = env.AUTH_SERVICE_PORT || 3000;

    server.listen(PORT, () => {
      console.log(`Auth service is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the auth service:", error);
    process.exit(1);
  }
};
main();
