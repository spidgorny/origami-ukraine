import fs from "fs";

export function GET(request: Request) {
  let filesVarTask;
  try {
    filesVarTask = fs.readdirSync("/var/task");
  } catch (e) {
    filesVarTask = e.message;
  }
  return Response.json({
    filesDot: fs.readdirSync("."),
    filesVarTask: filesVarTask,
  });
}
