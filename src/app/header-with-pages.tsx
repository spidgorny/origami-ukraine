import { load } from "@/outstatic/src/utils/server";
import * as locale from "locale-codes";
import Link from "next/link";
import Image from "next/image";

export function HeaderWithPages({ locale }: Readonly<{ locale: string }>) {
  return (
    <div
      className="bg-zinc-100 flex justify-between items-center opacity-75"
      style={
        {
          // background:
          //   "linear-gradient(90deg, rgba(9,87,178,1) 0%, rgba(9,178,167,1) 100%)",
        }
      }
    >
      <h1 className="lg:ms-56 text-2xl m-2 font-bold">
        <Link href="/" className="p-2 flex gap-3">
          <Image src="/design1/logo.png" alt="Logo" width={32} height={32} />
          Origami Ukraine
        </Link>
      </h1>
      <Menu locale={locale} />
      <div className="m-2">
        <LanguageSelector />
      </div>
    </div>
  );
}

async function Menu({ locale }: Readonly<{ locale: string }>) {
  const pages = await getMenuPages(locale);
  return (
    <ul className="hidden lg:flex flex-row gap-6">
      {pages.map((x, index) => (
        <li key={index}>
          <Link href={`${locale}/${x.slug}`}>{x.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getMenuPages(locale: string) {
  const db = await load();

  return await db
    .find({ collection: "pages", locale }, ["title", "slug"])
    .toArray();
}

async function LanguageSelector() {
  const db = await load();
  const allPageLocales = (await db
    .find({ collection: "pages" }, ["locale"])
    .toArray()) as never as { locale: string }[];
  const locales = [
    ...new Set(allPageLocales.map((x) => x.locale?.split("-")[0])),
  ];
  const localeNameMap = locales.map((loc) => [loc, locale.getByTag(loc)?.name]);
  const langImages = {
    en: "https://upload.wikimedia.org/wikipedia/commons/0/0b/English_language.svg",
    uk: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
  } as Record<string, string>;

  return (
    <ul className="flex flex-col gap-1">
      {localeNameMap.map((x) => {
        let langImage = langImages[x[0]];
        return (
          <li key={x[0]}>
            <Link href={`/${x[0]}`} className="flex gap-2">
              {langImage && (
                <Image src={langImage} alt={x[0]} width={32} height={24} />
              )}
              <span>{x[1]}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
