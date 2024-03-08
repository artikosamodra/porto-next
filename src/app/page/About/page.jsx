import TitlePage from "@/app/component/Utilities/TitlePage";
import TypingAnimation from "@/app/component/Utilities/TypingAnimation";
import Image from "next/image";

const About = () => {
  const textsRandom = ["rontend Developer"];
  return (
    <section>
      <TitlePage titlePage="ABOUT" />
      <div className="grid grid-cols-3 py-20">
        <div className="col-span-1 flex justify-center items-center">
          <Image
            src="/picture.jpg"
            width={300}
            height={300}
            className="rounded-full w-56 h-56 shadow-xl"
          />
        </div>
        <div className="col-span-2">
          <h1 className="font-bold text-5xl">ARTIKO FAJAR SAMODRA</h1>
          <TypingAnimation texts={textsRandom} />
          <div className="pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            fugiat dignissimos consectetur perferendis quaerat repellendus ullam
            sequi quod quas, deserunt magni autem nam nesciunt voluptas
            veritatis officiis aspernatur! Quas, asperiores!
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
