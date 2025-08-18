// Shared types for the menu system
export interface MenuItem {
  id: number;
  name_fa: string;
  name_en: string;
  ingredients_fa: string;
  ingredients_en: string;
  img: string;
  cost: string;
}

export interface MenuCategory {
  category: { fa: string; en: string };
  items: MenuItem[];
}
