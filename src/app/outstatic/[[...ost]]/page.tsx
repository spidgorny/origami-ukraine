import "@/outstatic/src/styles.css";
import { Outstatic } from "@/outstatic/src/app/index";
import { OstClient } from "@/outstatic/src/client/client";

export default async function Page({
  params,
}: Readonly<{ params: { ost: string[] } }>) {
  const ostData = await Outstatic();
  return <OstClient ostData={ostData} params={params} />;
}
