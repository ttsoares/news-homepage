import Image from "next/image";
import Link from "next/link";

import BMenu from "./BurgerMenu";

export const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "New", href: "/new" },
  { text: "Popular", href: "/popular" },
  { text: "Trending", href: "/trending" },
  { text: "Categories", href: "/categories" },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 mb-2 md:mb-10">
      {/* Buger menu */}
      <div className="p-3 w-1/3">
        <Image src="/logo.svg" alt="logo" width={65} height={65} />
      </div>
      <div className="block md:hidden">
        <BMenu />
      </div>
      <div className="hidden md:flex space-x-8 justify-evenly items-center">
        {MENU_LIST.map((item, index) => (
          <div
            key={index}
            className="w-25 px-1 h-6 text-gray-600 text-xl hover:text-soft_orange"
          >
            <Link href={item.href}>{item.text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
