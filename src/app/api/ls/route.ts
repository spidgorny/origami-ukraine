import fs from "fs";
import path from "node:path";

export function GET(request: Request) {
  return Response.json({
    cwd: process.cwd(),
    real: path.resolve(process.cwd()),
    filesDot: tryReadDir("."),
    filesDotNext: tryReadDir(".next"),
    filesDotVercel: tryReadDir(".vercel"),
    filesOutstatic: tryReadDir("outstatic"),
    filesVarTask: tryReadDir("/var/task"),
  });
}

function tryReadDir(path: string) {
  try {
    return fs.readdirSync(path);
  } catch (e) {
    // @ts-ignore
    return e?.message;
  }
}
