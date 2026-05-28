import { createApp } from "@/app";
import { env } from "./config/env";
import { logger } from "./utils/logger";
const main = async () => {
  try {
    const app = createApp();
    const PORT = env.AUTH_SERVICE_PORT || 3000;

    app.listen(PORT, () => {
      logger.info(`Auth service is running on port ${PORT}`);
    });
  } catch (error) {
    logger.error({ error }, `Error starting the auth service:`);
    process.exit(1);
  }
};
main();
