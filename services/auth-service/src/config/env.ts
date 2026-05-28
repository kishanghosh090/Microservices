import "dotenv/config";
import { createEnv, z } from "@chatapp/common";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  AUTH_SERVICE_PORT: z.coerce
    .number()
    .int()
    .positive()
    .min(0)
    .max(65535)
    .default(3000),
  PORT: z.coerce.number().default(3000),
});
export const env = createEnv(envSchema, {
  serviceName: "auth-service",
});

export type Env = typeof env;
