import TitlePage from "@/app/component/Utilities/TitlePage";
import TypingAnimation from "@/app/component/Utilities/TypingAnimation";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-40 lg:px-40 px-10 bg-gradient-to-b from-gray-400">
      <TitlePage
        titlePage="ABOUT"
        embedLottie="https://lottie.host/cd0b74bb-622e-48ce-abf5-f25ff78f3483/O2Cko0lnqk.json"
      />
      <div className="grid grid-cols-5 ">
        <div className="lg:col-span-2 col-span-5 flex justify-center items-center">
          <Image
            src="/picture.jpg"
            alt="Foto Profil"
            width={300}
            height={300}
            className="rounded-full w-56 h-56 shadow-xl"
          />
        </div>
        <div className="lg:col-span-3 col-span-5 lg:pt-0 pt-14">
          <h1 className="font-bold text-4xl pb-2">Hello,</h1>
          <div className="pb-10 text-lg leading-8 font-semibold opacity-70">
            My name is Artiko Fajar Samodra, alternatively referred to as Tao. I
            focus in Frontend web apps development. I have acquired proficiency
            in PHP, JavaScript, and C#, and have successfully executed various
            projects utilizing React and Next frameworks. I am dedicated to
            ongoing learning and advancement, especially within the realm of
            Frontend development. My skillset encompasses strong analytical
            capabilities, diligence, and adaptability.
          </div>
          <Link
            href="/page/About"
            className="py-2 px-5 shadow-lg bg-stone-600 rounded-md text-white hover:bg-indigo-600 font-bold"
          >
            My Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
