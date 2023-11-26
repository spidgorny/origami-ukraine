import Layout from "@/components/Layout";
import { load } from "@/outstatic/src/utils/server";
import ContentGrid from "@/components/ContentGrid";
import markdownToHtml from "@/lib/markdownToHtml";
import { IndexPage } from "@/app/uk/index-page";

export default async function Index() {
  return <IndexPage locale="en" />;
}
