import Navbar from "@/app/component/Utilities/Navbar";
import About from "../About/page";
import Project from "../Project/page";
import Contact from "../Contact/page";
import Link from "next/link";

const MainPage = () => {
  return (
    <section>
      <div className="flex justify-between px-20 py-5 bg-fuchsia-200 bg-opacity-60">
        <Link href="/">
          <h1 className="font-bold text-2xl">Artiko Fajar Samodra</h1>
        </Link>
        <Navbar />
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
