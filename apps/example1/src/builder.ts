import SchemaBuilder from "@pothos/core";
import { logger } from "./logger";

export const builder = new SchemaBuilder({});

builder.queryType({
	fields: (t) => ({
		hello: t.string({
			args: {
				name: t.arg.string(),
			},
			resolve: (_parent, { name }) => {
				logger.debug("query hello called.");
				return `hello, ${name ?? "world"}`;
			},
		}),
	}),
});

builder.mutationType({
	fields: (t) => ({
		greet: t.string({
			args: {
				name: t.arg.string({ required: true }),
			},
			resolve: (_parent, { name }) => {
				logger.debug("mutation greet called.");

				logger.debug(`name: ${name}`);
				return `hey, ${name}!!`;
			},
		}),
	}),
});
