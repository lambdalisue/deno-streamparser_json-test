import { parse } from "https://deno.land/std@0.105.0/flags/mod.ts";

const opts = parse(Deno.args)
const size = opts.size || 128;
const v = "x".repeat(1024 * size);
const b = new TextEncoder().encode(`["${v}"]`);

await Deno.stdout.write(b);
