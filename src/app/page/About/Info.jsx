import TitleAbout from "@/app/component/Utilities/TitleAbout";
import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const MyInfo = () => {
  return (
    <section className="lg:px-40 px-10 pt-32 pb-10">
      <TitleAbout titleAbout="My Info" />
      <div className="grid grid-cols-4 gap-20">
        <div className="lg:col-span-1 col-span-4 flex justify-center items-center md:p-0 p-5">
          <Image
            src="/picture.jpg"
            alt="profil pic"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
        <div className="lg:col-span-3 col-span-4 flex flex-col justify-center lg:text-left text-center">
          <div className="md:text-4xl text-3xl font-bold pb-2">
            Artiko Fajar Samodra
          </div>
          <div className="md:text-2xl text-xl font-semibold pb-8">
            Fullstack Developer
          </div>
          <div className="flex lg:justify-start justify-center">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 font-semibold lg:text-md text-sm">
              <div className="flex gap-4 items-center md:justify-start justify-center">
                <EnvelopeSimple size={32} />
                artikosamudra@gmail.com
              </div>
              <div className="flex gap-4 items-center md:justify-start justify-center">
                <LinkedinLogo size={32} />
                linkedin.com/in/artiko
              </div>
              <div className="flex gap-4 items-center md:justify-start justify-center">
                <GithubLogo size={32} />
                github.com/artikosamodra
              </div>
              <div className="flex gap-4 items-center md:justify-start justify-center">
                <MapPin size={32} />
                Malang, Jawa Timur
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-20 leading-8 lg:text-left text-center">
        A dedicated Fullstack Developer with strong analytical skills,
        diligence, quick learning ability, high enthusiasm, and easy
        adaptability. Committed to continuous growth and learning in software
        development, especially in Backend. Outside of work, he enjoys building
        mutually beneficial relationships. A dedicated Fullstack Engineer with
        strong analytical skills, diligence, quick learning ability, high
        enthusiasm, and easy adaptability. Committed to continuous growth and
        learning in software development, especially in Backend. Outside of
        work, he enjoys building mutually beneficial relationships.
      </div>
    </section>
  );
};

export default MyInfo;
