// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@/static/icons/menu";

export default function Sidebar({ show, setter }) {
  const router = useRouter();

  // Define our base class
  const className =
    "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      router.pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <Link
        href={route}
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="p-2 flex">
          <Link href="/">
            {/*eslint-disable-next-line*/}
            <MenuIcon className="text-white/50 hover:text-white cursor-pointer" />
          </Link>
        </div>
        <div className="flex flex-col">
          <MenuItem name="Home" route="/" icon={<MenuIcon />} />
          <MenuItem name="T-Shirts" route="/t-shirts" icon={<MenuIcon />} />
          <MenuItem name="Hats" route="/hats" icon={<MenuIcon />} />
          <MenuItem name="About Us" route="/about" icon={<MenuIcon />} />
          <MenuItem name="Contact" route="/contact" icon={<MenuIcon />} />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
