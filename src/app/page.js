import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import Icons from "./component/Utilities/Icons/Icon";
import TypingAnimation from "./component/Utilities/TypingAnimation";
import NavbarA from "./component/Utilities/NavbarA";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center w-full h-screen animate__animated animate__zoomInDown md:px-20 px-5 text-center">
        <NavbarA />
        <h1 className="lg:text-7xl md:text-5xl text-3xl md:pt-10 pt-16 md:pb-4 pb-2 font-bold">
          Artiko Fajar Samodra
        </h1>
        <h2 className="lg:text-4xl text-2xl md:pb-10 pb-16">
          Frontend Developer
        </h2>
        <p className="md:text-lg text-md">
          Hi, I'm a passionate frontend developer specializing in creating
          engaging and responsive user interfaces.
        </p>
        <div className="flex flex-wrap justify-center md:gap-10 gap-6 md:pt-14 pt-20 px-10">
          <div className="animate__animated animate__backInDown animate__delay-1s animate__slower">
            <Icons
              iconLink="/"
              iconName="InstagramLogo"
              iconSize="72"
              iconClass="text-white bg-slate-400 lg:p-3 p-2 rounded-full shadow-xl hover:bg-gradient-to-r from-orange-500 to-purple-600 transition duration-500 shadow-lg hover:shadow-stone-100 lg:w-20 lg:h-20 w-12 h-12"
            />
          </div>

          <div className="animate__animated animate__backInDown animate__delay-2s animate__slow">
            <Icons
              iconLink="/"
              iconName="GithubLogo"
              iconSize="md:72 24"
              iconClass="text-white bg-slate-400 lg:p-3 p-2 rounded-full shadow-xl hover:bg-stone-900 transition duration-500 shadow-lg hover:shadow-orange-500 lg:w-20 lg:h-20 w-12 h-12"
            />
          </div>

          <div className="animate__animated animate__backInDown animate__delay-2s animate__slower">
            <Icons
              iconLink="/"
              iconName="LinkedinLogo"
              iconSize="md:72 24"
              iconClass="bg-slate-400 lg:p-3 p-2 rounded-full shadow-xl hover:bg-blue-600 transition duration-500 text-white shadow-lg hover:shadow-stone-200 lg:w-20 lg:h-20 w-12 h-12"
            />
          </div>

          {/* <div className="animate__animated animate__backInDown animate__delay-1s animate__slow">
            <Icons
              iconLink="/"
              iconName="FacebookLogo"
              iconSize="md:72 24"
              iconClass="bg-slate-400 lg:p-3 p-2 rounded-full shadow-xl hover:bg-blue-500 transition duration-500 text-white shadow-lg hover:shadow-slate-600 lg:w-20 lg:h-20 w-12 h-12"
            />
          </div> */}
        </div>
      </div>
    </main>
  );
}
