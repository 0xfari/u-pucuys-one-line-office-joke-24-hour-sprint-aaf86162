// One-Line Office Joke: 24-Hour Sprint — one line, at most 200 characters.
// The joke lives in a single constant; the runner only clears the folder and writes it.
import * as fs from "node:fs";
import * as path from "node:path";

// The setup names the bait; the punchline names the whole open-plan floor.
const LINE =
  "I renamed my Wi-Fi hotspot 'Free Promotion' and watched the whole open-plan floor try to connect to it.";

function clearFolder(folder) {
  fs.mkdirSync(folder, { recursive: true });
  for (const f of fs.readdirSync(folder)) {
    fs.rmSync(path.join(folder, f), { recursive: true, force: true });
  }
}

// One read, one laugh: no explanation, no second sentence, the floor does the work.
function run() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  clearFolder(outDir);
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
}

run();
