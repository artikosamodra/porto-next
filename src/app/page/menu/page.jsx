import About from "../About/page";
import Project from "../Project/page";
import Contact from "../Contact/page";
import Link from "next/link";
import NavbarB from "@/app/component/Utilities/NavbarB";

const MainPage = () => {
  return (
    <section className="py-20">
      <div className="w-full md:px-20 px-5 bg-fuchsia-200 bg-opacity-90 backdrop-filter fixed top-0 z-50 shadow-md py-4">
        <NavbarB />
      </div>

      <div className="px-20 py-5">
        <div>
          <About />
        </div>

        <div>
          <Project />
        </div>

        <div>
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
