import React, { PropsWithChildren } from "react";
import { HeaderWithPages } from "@/app/header-with-pages";

export function FrontendLayout(props: PropsWithChildren) {
  return (
    <>
      <HeaderWithPages />
      {props.children}
    </>
  );
}
