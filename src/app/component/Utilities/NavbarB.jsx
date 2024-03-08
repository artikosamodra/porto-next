"use client";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import NavMenu from "./NavMenu";

const NavbarB = () => {
  return (
    <section>
      <div className="flex gap-14 items-center font-bold">
        <NavMenu linkUrl="/page/menu#about" linkTitle="About" />
        <NavMenu linkUrl="/page/menu#project" linkTitle="Project" />
        <NavMenu linkUrl="/page/menu#contact" linkTitle="Contact" />
        <ThemeSwitcher />
      </div>
    </section>
  );
};

export default NavbarB;
