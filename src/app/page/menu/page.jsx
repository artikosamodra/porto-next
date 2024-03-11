import About from "../About/page";
import Project from "../Project/page";
import Contact from "../Contact/page";
import Link from "next/link";
import NavbarB from "@/app/component/Utilities/NavbarB";

const MainPage = () => {
  return (
    <section>
      <div className="w-full lg:px-40 px-10 fixed top-0 z-50 shadow-md py-4">
        <NavbarB />
      </div>

      <div className="">
        <div id="about">
          <About />
        </div>

        <div id="project">
          <Project />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
