import pino from "pino";
import { env } from "./config";

export const logger = pino({
	level: env.LOG_LEVEL,
	...(env.LOG_FORMAT === "pretty" && { transport: { target: "pino-pretty" } }),
});
