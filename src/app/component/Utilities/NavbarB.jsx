"use client";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import NavMenu from "./NavMenu";
import { List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useEffect } from "react";

const NavbarB = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("bg-white-scroll");
        } else {
          navbar.classList.remove("bg-white-scroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    const listMenu = document.getElementById("listmenu");
    // const Menu = document.getElementById("menu");

    if (listMenu.classList.contains("hidden")) {
      listMenu.classList.remove("hidden");
    } else {
      listMenu.classList.add("hidden");
    }
  };

  return (
    <section
      className="w-full lg:px-40 px-10 fixed top-0 z-50 shadow-md py-4 text-stone-600"
      id="navbar"
    >
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="md:text-2xl text-xl">Artiko Fajar Samodra</h1>
            <h1 className="md:text-lg text-md">Frontend Developer</h1>
          </Link>
          <button className="md:hidden block" onClick={toggleMenu}>
            <List size={32} weight="fill" />
          </button>
        </div>
        <div
          className="md:flex md:flex-row flex-col hidden justify-center items-center px-4 lg:gap-14 md:gap-8 items-center md:py-0 py-10"
          id="listmenu"
        >
          <NavMenu linkUrl="/page/menu#about" linkTitle="About" />
          <NavMenu linkUrl="/page/menu#project" linkTitle="Project" />
          <NavMenu linkUrl="/page/menu#contact" linkTitle="Contact" />
          <ThemeSwitcher />
        </div>
      </div>
    </section>
  );
};

export default NavbarB;
