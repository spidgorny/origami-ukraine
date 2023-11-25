import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";
import fs from "fs";

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  return res.json({
    filesDot: fs.readdirSync("."),
    filesVarTask: fs.readdirSync("/var/task"),
  });
}
