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
				logger.debug(`name: ${name}`);
				return `hey, ${name}!!`;
			},
		}),
	}),
});
