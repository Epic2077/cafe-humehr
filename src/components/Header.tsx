import { Lang } from "@/utils/i18n";
import Image from "next/image";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = ({ lang }: { lang: Lang }) => {
  return (
    <div className="py-4 flex justify-between items-center">
      <div>
        <Image
          src={"/chevron-left.svg"}
          alt="Back"
          width={38}
          height={38}
          className="cursor-pointer"
        />
      </div>
      <h1 className="text-xl font-bold">
        {lang === "fa" ? "منوی سفارشات" : "Order Menu"}
      </h1>
      <div className="flex flex-col gap-2">
        <LanguageSwitcher currentLang={"fa"} />
        <LanguageSwitcher currentLang={"en"} />
      </div>
      <Image src={"/logo.svg"} alt="Logo" width={65} height={65} />
    </div>
  );
};

export default Header;
