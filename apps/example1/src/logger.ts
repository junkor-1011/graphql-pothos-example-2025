import pino from "pino";
import { env } from "./config";
import { getTraceContext } from "./otel";

export const logger = pino({
	mixin: () => {
		const traceContext = getTraceContext();
		return traceContext || {};
	},
	level: env.LOG_LEVEL,
	...(env.LOG_FORMAT === "pretty" && { transport: { target: "pino-pretty" } }),
});
