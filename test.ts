import * as io from "https://deno.land/std@0.100.0/io/mod.ts";
import { default as JSONparser} from "https://deno.land/x/streamparser_json@v0.0.5/jsonparse.ts";

const parser = new JSONparser();
parser.onValue = (value, _key, _parent, stack) => {
  if (stack.length) {
    return;
  }
  console.log(value)
};
for await (const chunk of io.iter(Deno.stdin)) {
  console.log(chunk);
  parser.write(chunk);
}
