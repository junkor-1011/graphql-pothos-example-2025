import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

import { builder } from "./buider";

const yoga = createYoga({
	schema: builder.toSchema(),
});

const server = createServer(yoga);

server.listen(8000, () => {
	console.log("listen http://localhost:8000/graphql");
});
