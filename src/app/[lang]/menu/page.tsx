"use client";
import CategoryFilter from "@/components/Categories";
import Header from "@/components/Header";
import Items from "@/components/Items";
import { defaultLang, Lang, languages } from "@/utils/i18n";
import React, { useState, useEffect, use } from "react";

interface MenuItem {
  id: number;
  name_fa: string;
  name_en: string;
  ingredients_fa: string;
  ingredients_en: string;
  img: string;
  cost: string;
}

interface MenuCategory {
  category: { fa: string; en: string };
  items: MenuItem[];
}

export default function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  // Unwrap the params Promise using React.use()
  const { lang: paramLang } = use(params);
  const lang = languages[paramLang] ? paramLang : defaultLang;

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

  // Find the selected category's items
  const selectedCategoryData = data.find(
    (section) => section.category[lang] === selectedCategory
  );

  return (
    <>
      {/* Developed by Ashkan Sadeghi - https://github.com/Epic2077 */}
      <div className="py-3.5 px-5">
        <Header lang={lang} />
        <div className="mt-4">
          <CategoryFilter
            lang={lang}
            data={data}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            loading={loading}
          />
        </div>
        <div className="mt-6">
          <Items
            lang={lang}
            items={selectedCategoryData?.items || []}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
}
