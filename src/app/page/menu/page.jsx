import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import NavbarB from "@/app/component/Utilities/NavbarB";

const MainPage = () => {
  return (
    <section>
      <NavbarB />

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
