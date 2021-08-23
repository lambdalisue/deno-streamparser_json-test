import { parse } from "https://deno.land/std@0.105.0/flags/mod.ts";
import * as io from "https://deno.land/std@0.100.0/io/mod.ts";

const opts = parse(Deno.args)
const size = opts.size || 128;
const v = "x".repeat(1024 * size);
const b = new TextEncoder().encode(`["${v}"]`);

await io.writeAll(Deno.stdout, b);
