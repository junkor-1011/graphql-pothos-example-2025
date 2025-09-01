import { createServer } from "node:http";
import SchemaBuilder from "@pothos/core";
import { createYoga } from "graphql-yoga";

const builder = new SchemaBuilder({});

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

const yoga = createYoga({
	schema: builder.toSchema(),
});

const server = createServer(yoga);

server.listen(8000, () => {
	console.log("listen http://localhost:8000/graphql");
});
