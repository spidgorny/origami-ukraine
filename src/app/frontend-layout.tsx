import React, { PropsWithChildren } from "react";
import { HeaderWithPages } from "@/app/header-with-pages";
import Footer from "@/components/Footer";

export function FrontendLayout(
  props: Readonly<PropsWithChildren<{ locale: string }>>,
) {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url(/design1/top-left.png)",
        backgroundAttachment: "0 0",
        backgroundSize: "initial",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-260px 0",
      }}
    >
      <div className="min-h-screen">
        <HeaderWithPages locale={props.locale} />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
