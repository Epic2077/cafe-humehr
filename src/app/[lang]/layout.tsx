import { Lang } from "@/utils/i18n";
import { use } from "react";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}) {
  // Unwrap the params Promise using React.use()
  const { lang } = use(params);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen" lang={lang}>
      {children}
    </div>
  );
}
