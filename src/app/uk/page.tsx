import { IndexPage } from "@/app/uk/index-page";
import { Hero } from "@/app/uk/hero";

export default async function Index() {
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <IndexPage locale="uk" />
    </div>
  );
}
