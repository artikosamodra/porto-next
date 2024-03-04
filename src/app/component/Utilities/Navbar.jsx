"use client";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <section>
      <div className="flex gap-14">
        <NavMenu linkUrl="/" linkTitle="About" />
        <NavMenu linkUrl="/" linkTitle="Project" />
        <NavMenu linkUrl="/" linkTitle="Contact" />
        <ThemeSwitcher />
      </div>
    </section>
  );
};

export default Navbar;
