"use client";
import { Lang } from "@/utils/i18n";

interface MenuItem {
  id: number;
  name_fa: string;
  name_en: string;
  ingredients_fa: string;
  ingredients_en: string;
  img: string;
}

interface MenuCategory {
  category: { fa: string; en: string };
  items: MenuItem[];
}

interface CategoryFilterProps {
  lang: Lang;
  data: MenuCategory[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  loading: boolean;
}

export default function CategoryFilter({
  lang,
  data,
  selectedCategory,
  onCategoryChange,
  loading,
}: CategoryFilterProps) {
  if (loading) {
    return (
      <div className="flex gap-4 overflow-x-auto">
        {/* Loading skeleton */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="px-4 py-2.5 rounded-3xl bg-gray-200 animate-pulse"
          >
            <div className="w-16 h-4 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="flex gap-4 overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="hide-scrollbar flex gap-4">
        {data.map((section, idx) => (
          <button
            key={idx}
            className={`px-4 py-2.5 items-center justify-center flex rounded-3xl text-sm whitespace-nowrap ${
              selectedCategory === section.category[lang]
                ? "bg-[#C99541] text-[#FFFFFF]"
                : " bg-[#F0E1CC] text-[#5E4E2C] hover:bg-[#cabeac]"
            }`}
            onClick={() => onCategoryChange(section.category[lang])}
          >
            {section.category[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
