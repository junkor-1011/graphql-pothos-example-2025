import pino from "pino";
import { env } from "./config";
import { getTraceId } from "./otel";

export const logger = pino({
	mixin: () => {
		const traceId = getTraceId();
		return traceId ? { traceId } : {};
	},
	level: env.LOG_LEVEL,
	...(env.LOG_FORMAT === "pretty" && { transport: { target: "pino-pretty" } }),
});
