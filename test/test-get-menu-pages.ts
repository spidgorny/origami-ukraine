import { getMenuPages } from "@/app/header-with-pages";
import { findUp } from "find-up";
import path from "node:path";

(async () => {
  let packageFile = await findUp("package.json");
  console.log({ packageFile });
  process.chdir(path.dirname(packageFile));
  console.log("cwd", process.cwd());
  const pages = await getMenuPages("en");
  console.log(pages);
})();
