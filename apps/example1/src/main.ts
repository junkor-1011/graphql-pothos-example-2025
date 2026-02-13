import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

import { builder } from "./buider";
import { logger } from "./logger";

const isProd: boolean = process.env.NODE_ENV === "production";

const yoga = createYoga({
	schema: builder.toSchema(),
	graphiql: !isProd,
	logging: isProd ? "info" : "debug",
});

const server = createServer(yoga);

server.listen(8000, () => {
	logger.info("listen http://localhost:8000/graphql");
});
