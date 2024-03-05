import Image from "next/image";
import Navbar from "./component/Utilities/Navbar";
import ThemeSwitcher from "./ThemeSwitcher";
import Icons from "./component/Utilities/Icons/Icon";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center w-full h-screen font-bold">
        <Navbar />
        <h1 className="text-7xl pt-10 pb-4">Artiko Fajar Samodra</h1>
        <h2 className="text-4xl pb-10">Frontend Developer</h2>
        <p className="text-lg">
          Hi, I'm a passionate frontend developer specializing in creating
          engaging and responsive user interfaces.
        </p>
        <div className="flex gap-10 pt-10">
          <Icons
            iconLink="/"
            iconName="InstagramLogo"
            iconSize="72"
            iconClass="text-white bg-slate-400 p-3 rounded-full shadow-xl hover:bg-gradient-to-r from-orange-500 to-purple-600 shadow-lg hover:shadow-stone-100"
          />

          <Icons
            iconLink="/"
            iconName="GithubLogo"
            iconSize="72"
            iconClass="text-white bg-slate-400 p-3 rounded-full shadow-xl hover:bg-stone-900 shadow-lg hover:shadow-orange-500"
          />

          <Icons
            iconLink="/"
            iconName="LinkedinLogo"
            iconSize="72"
            iconClass="bg-slate-400 p-3 rounded-full shadow-xl hover:bg-blue-600 text-white shadow-lg hover:shadow-stone-200"
          />

          <Icons
            iconLink="/"
            iconName="FacebookLogo"
            iconSize="72"
            iconClass="bg-slate-400 p-3 rounded-full shadow-xl hover:bg-blue-500 text-white shadow-lg hover:shadow-slate-600"
          />
        </div>
      </div>
    </main>
  );
}
