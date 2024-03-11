import TitlePage from "@/app/component/Utilities/TitlePage";
import TypingAnimation from "@/app/component/Utilities/TypingAnimation";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-40 lg:px-40 px-10 bg-gradient-to-b from-gray-400">
      <TitlePage
        titlePage="ABOUT"
        embedLottie="https://lottie.host/41de3aeb-f9c5-461f-893a-ca1db52ef615/Ujab7pOtv1.json"
      />
      <div className="grid grid-cols-5 lg:py-20 py-5">
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
          <div className="pb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            obcaecati repudiandae, laborum maxime, nulla vero hic harum id
            repellendus deserunt similique quos dolore esse nesciunt excepturi
            illum voluptates maiores quia, architecto placeat enim saepe natus!
            Cupiditate quae blanditiis nobis aperiam!
          </div>
          <Link
            href="/"
            className="p-2 bg-stone-400 rounded-md hover:bg-stone-300"
          >
            Lebih banyak tentang saya
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
