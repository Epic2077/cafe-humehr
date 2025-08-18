import { Lang } from "@/utils/i18n";
import Image from "next/image";
import React, { useState } from "react";

interface MenuItem {
  id: number;
  name_fa: string;
  name_en: string;
  ingredients_fa: string;
  ingredients_en: string;
  img: string;
  cost: string;
}

interface ItemsCardProps {
  lang: Lang;
  item: MenuItem;
  index: number;
}

const ItemsCard = ({ item, lang, index }: ItemsCardProps) => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (itemId: number) => {
    setImageErrors((prev) => new Set(prev).add(itemId));
  };

  // Determine styling based on pattern: first 2 cards light, next 2 cards dark, repeat
  const cyclePosition = Math.floor(index / 2) % 2;
  const isLightCard = cyclePosition === 0;

  const cardBgColor = isLightCard ? "bg-[#E3DED8]" : "bg-[#929C8B]";
  const titleColor = isLightCard ? "text-[#141510]" : "text-white";
  const textColor = isLightCard ? "text-black" : "text-white";
  const noImageTextColor = isLightCard ? "text-gray-400" : "text-gray-200";
  return (
    <div
      key={item.id}
      className={`${cardBgColor} flex flex-col items-center gap-2 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-lg transition-shadow`}
    >
      {/* Image */}
      <div className="w-32 h-32 rounded-2xl flex items-center justify-center  mt-4 relative">
        {item.img && !imageErrors.has(item.id) ? (
          <Image
            src={item.img}
            alt={lang === "fa" ? item.name_fa : item.name_en}
            fill
            className="object-cover rounded-2xl"
            style={{ objectPosition: "center" }}
            onError={() => handleImageError(item.id)}
          />
        ) : (
          <div className={`${noImageTextColor} text-sm`}>
            {lang === "fa" ? "تصویر موجود نیست" : "No Image"}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pb-2 mt-1 px-2 text-center flex flex-col gap-2">
        <h3 className={`font-semibold text-lg ${titleColor}`}>
          {lang === "fa" ? item.name_fa : item.name_en}
        </h3>
        <p className={`${textColor} font-extralight text-[10px] mt-[-8px]`}>
          {lang === "fa" ? item.name_en : ""}
        </p>
        <p
          className={`${textColor} font-extralight h-9 text-sm w-32 text-center mx-auto`}
        >
          {lang === "fa" ? item.ingredients_fa : item.ingredients_en}
        </p>
      </div>
      <p className="h-2">
        {item.cost ? (
          <span className={`text-[#0c5039] font-extralight text-sm`}>
            {lang === "fa" ? `${item.cost} تومان ` : `${item.cost} Toman`}
          </span>
        ) : (
          <span className={`text-[#0c5039] font-extralight text-sm`}>
            {lang === "fa" ? "قیمت نامشخص" : "Unknown Price"}
          </span>
        )}
      </p>
      <div className="w-12 h-1 bg-[#B0956B] rounded-full mt-4 mb-3.5"></div>
    </div>
  );
};

export default ItemsCard;
