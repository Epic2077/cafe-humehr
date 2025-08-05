"use client";

import { languages } from "@/utils/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: string;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2.5">
      {Object.entries(languages).map(([lang, label]) => {
        if (lang === currentLang) return null;

        const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
        return (
          <div
            className="w-12 h-3.5 flex justify-center items-center"
            key={lang}
          >
            <Link href={newPath} className="english-text text-xs">
              {label}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
