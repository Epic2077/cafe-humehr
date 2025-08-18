import React from "react";
import { Lang } from "@/utils/i18n";
import ItemsCard from "./ItemsCard";

interface MenuItem {
  id: number;
  name_fa: string;
  name_en: string;
  ingredients_fa: string;
  ingredients_en: string;
  img: string;
  cost: string;
}

interface ItemsProps {
  lang: Lang;
  items: MenuItem[];
  loading: boolean;
}

const Items = ({ lang, items, loading }: ItemsProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Loading skeleton */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-4 animate-pulse"
          >
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
            <div className="w-full h-3 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          {lang === "fa"
            ? "آیتمی در این دسته یافت نشد"
            : "No items found in this category"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <ItemsCard key={item.id} item={item} lang={lang} index={index} />
      ))}
    </div>
  );
};

export default Items;
