import Header from "@/components/Header";
import { defaultLang, Lang, languages } from "@/utils/i18n";
import React from "react";

export default function page({ params }: { params: { lang: Lang } }) {
  const lang = languages[params.lang] ? params.lang : defaultLang;

  return (
    <div className="py-3.5 px-7">
      <Header lang={lang} />
    </div>
  );
}
