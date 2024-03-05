import Image from "next/image";
import Navbar from "./component/Utilities/Navbar";
import ThemeSwitcher from "./ThemeSwitcher";
import Icons from "./component/Utilities/Icons/Icon";
import TypingAnimation from "./component/Utilities/TypingAnimation";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center w-full h-screen font-bold animate__animated animate__fadeIn animate__slower">
        <Navbar />
        {/* <TypingAnimation /> */}
        <h1 className="text-7xl pt-10 pb-4">Artiko Fajar Samodra</h1>
        <h2 className="text-4xl pb-10">Frontend Developer</h2>
        <p className="text-lg">
          Hi, I'm a passionate frontend developer specializing in creating
          engaging and responsive user interfaces.
        </p>
        <div className="flex gap-10 pt-10">
          <div className="animate__animated animate__backInDown animate__delay-1s animate__slower">
            <Icons
              iconLink="/"
              iconName="InstagramLogo"
              iconSize="72"
              iconClass="text-white bg-slate-400 p-3 rounded-full shadow-xl hover:bg-gradient-to-r from-orange-500 to-purple-600 transition duration-500 shadow-lg hover:shadow-stone-100"
            />
          </div>

          <div className="animate__animated animate__backInDown animate__delay-2s animate__slow">
            <Icons
              iconLink="/"
              iconName="GithubLogo"
              iconSize="72"
              iconClass="text-white bg-slate-400 p-3 rounded-full shadow-xl hover:bg-stone-900 transition duration-500 shadow-lg hover:shadow-orange-500"
            />
          </div>

          <div className="animate__animated animate__backInDown animate__delay-2s animate__slower">
            <Icons
              iconLink="/"
              iconName="LinkedinLogo"
              iconSize="72"
              iconClass="bg-slate-400 p-3 rounded-full shadow-xl hover:bg-blue-600 transition duration-500 text-white shadow-lg hover:shadow-stone-200"
            />
          </div>

          <div className="animate__animated animate__backInDown animate__delay-1s animate__slow">
            <Icons
              iconLink="/"
              iconName="FacebookLogo"
              iconSize="72"
              iconClass="bg-slate-400 p-3 rounded-full shadow-xl hover:bg-blue-500 transition duration-500 text-white shadow-lg hover:shadow-slate-600"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
