import { Lang } from "@/utils/i18n";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen" lang={params.lang}>
      {children}
    </div>
  );
}
