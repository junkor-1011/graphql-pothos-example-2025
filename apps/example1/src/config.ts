import process from "node:process";
import type { LevelWithSilent } from "pino";
import * as v from "valibot";

const LOG_LEVELS = [
	"fatal",
	"error",
	"warn",
	"info",
	"debug",
	"trace",
	"silent",
] as const satisfies readonly LevelWithSilent[];

const envSchema = v.object({
	LOG_LEVEL: v.optional(v.picklist(LOG_LEVELS), "info"),
	LOG_FORMAT: v.optional(v.picklist(["json", "pretty"]), "json"),
});

export const env = v.parse(envSchema, process.env);
