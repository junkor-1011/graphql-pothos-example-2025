import fs from "node:fs";
import path from "node:path";

import { printSchema } from "graphql";

import { builder } from "../src/buider";

const DIST_DIR = path.join(import.meta.dirname, "..", "dist-docs");
const DIST_FILENAME = "schema.graphql";
const DIST_PATH = path.join(DIST_DIR, DIST_FILENAME);

function main() {
	const schema = builder.toSchema();

	console.debug(DIST_DIR);
	if (!fs.existsSync(DIST_DIR)) {
		fs.mkdirSync(DIST_DIR);
	}
	console.debug(DIST_PATH);
	fs.writeFileSync(DIST_PATH, printSchema(schema));
}

main();
