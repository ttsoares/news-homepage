"use client";

import { slide as Menu } from "react-burger-menu";

import Link from "next/link";

import { MENU_LIST } from "./Header";

const HamburgerMenu = () => (
  <div className="relative p-2">
    <Menu
      // eslint-disable-next-line @next/next/no-img-element
      right
      customBurgerIcon={<HamburgerIcon />}
      customCrossIcon={<CloseIcon />}
      width={"auto"}
      className=" top-0 text-black"
    >
      <div className="w-full h-10"></div>
      <div className="mt-5 font-bold">
        {MENU_LIST.map((item, index) => (
          <div key={index} className="mb-5">
            <Link onClick={() => ctx.toggleMenu()} href={item.href}>
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div>
    <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
      <g fill="#00001A" fill-rule="evenodd">
        <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
        <path d="M0 0h40v3H0z" />
      </g>
    </svg>
  </div>
);

const CloseIcon = () => (
  <div>
    <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
      <g fill="#00001A" fill-rule="evenodd">
        <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
        <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
      </g>
    </svg>
  </div>
);

const BMenu = () => {
  return (
    <nav className="">
      <div className="flex">
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default BMenu;
