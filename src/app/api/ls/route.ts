import fs from "fs";

export function GET(request: Request) {
  let filesVarTask;
  try {
    filesVarTask = fs.readdirSync("/var/task");
  } catch (e) {
    // @ts-ignore
    filesVarTask = e?.message;
  }
  return Response.json({
    cwd: process.cwd(),
    filesDot: fs.readdirSync("."),
    filesDotNext: fs.readdirSync(".next"),
    filesDotVercel: fs.readdirSync(".vercel"),
    filesOutstatic: fs.readdirSync("outstatic"),
    filesVarTask: filesVarTask,
  });
}
