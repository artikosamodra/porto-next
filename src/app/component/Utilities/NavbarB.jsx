"use client";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import NavMenu from "./NavMenu";
import { List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const NavbarB = () => {
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
    <section className="flex md:flex-row flex-col justify-between">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="md:text-2xl text-xl">Artiko Fajar Samodra</h1>
          <h1 className="md:text-lg text-md text-stone-400">
            Frontend Developer
          </h1>
        </Link>
        <button className="md:hidden block" onClick={toggleMenu}>
          <List size={32} weight="fill" />
        </button>
      </div>
      <div
        className="md:flex md:flex-row hidden justify-center px-4 flex-col text-center lg:gap-14 md:gap-8 items-center md:py-0 py-10"
        id="listmenu"
      >
        <NavMenu linkUrl="/page/menu#about" linkTitle="About" />
        <NavMenu linkUrl="/page/menu#project" linkTitle="Project" />
        <NavMenu linkUrl="/page/menu#contact" linkTitle="Contact" />
        <ThemeSwitcher />
      </div>
    </section>
  );
};

export default NavbarB;
