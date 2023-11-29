import { load } from "@/outstatic/src/utils/metadata/load";
import markdownToHtml from "@/lib/markdownToHtml";
import Layout from "@/components/Layout";
import ContentGrid from "@/components/ContentGrid";

export async function IndexPage({ locale }: Readonly<{ locale: string }>) {
  const { content, allPosts, allProjects } = await getData(locale);

  return (
    <div className="max-w-6xl mx-auto px-5">
      <section className="mt-16 mb-16 md:mb-12">
        <div
          className="prose lg:prose-2xl home-intro"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
      {allPosts.length > 0 && (
        <ContentGrid
          title="Posts"
          items={allPosts}
          collection="posts"
          priority
          linkPrefix={locale + "/"}
        />
      )}
      {/*{allProjects.length > 0 && (*/}
      {/*  <ContentGrid*/}
      {/*    title="Projects"*/}
      {/*    items={allProjects}*/}
      {/*    collection="projects"*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
}

async function getData(locale: string) {
  const db = await load();

  const page = await db
    .find({ collection: "pages", locale }, ["content"])
    .first();

  const content = await markdownToHtml(page.content);

  const allPosts = await db
    .find({ collection: "posts", locale }, [
      "title",
      "publishedAt",
      "slug",
      "coverImage",
      "description",
      "tags",
    ])
    .sort({ publishedAt: -1 })
    .toArray();

  const allProjects = await db
    .find({ collection: "projects" }, ["title", "slug", "coverImage"])
    .sort({ publishedAt: -1 })
    .toArray();

  return {
    content,
    allPosts,
    allProjects,
  };
}
