"use client";
import { Lang } from "@/utils/i18n";
import { useState, useEffect } from "react";

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

export default function CategoryFilter({ lang }: { lang: Lang }) {
  const [data, setData] = useState<MenuCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("/api/menu");
        const menuData = await response.json();
        setData(menuData);
        setSelectedCategory(menuData[0]?.category[lang] || "");
      } catch (error) {
        console.error("Failed to fetch menu data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, [lang]);

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
            onClick={() => setSelectedCategory(section.category[lang])}
          >
            {section.category[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
