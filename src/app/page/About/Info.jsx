import TitlePage from "@/app/component/Utilities/TitlePage";
import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const MyInfo = () => {
  return (
    <section className="px-40 pt-32 pb-10">
      <TitlePage titlePage="My Info" />
      <div className="grid grid-cols-4 gap-20">
        <div className="col-span-1 flex justify-center items-center">
          <Image
            src="/picture.jpg"
            alt="profil pic"
            width={250}
            height={250}
            className="rounded-full p-5"
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center">
          <div className="text-5xl font-bold pb-2">Artiko Fajar Samodra</div>
          <div className="text-2xl font-semibold pb-8">Frontend Developer</div>
          <div className="grid grid-cols-2 gap-2 font-semibold">
            <div className="flex gap-4 items-center">
              <EnvelopeSimple size={32} />
              artikosamudra@gmail.com
            </div>
            <div className="flex gap-4 items-center">
              <LinkedinLogo size={32} />
              linkedin.com/in/artiko
            </div>
            <div className="flex gap-4 items-center">
              <GithubLogo size={32} />
              github.com/artikosamodra
            </div>
            <div className="flex gap-4 items-center">
              <MapPin size={32} />
              Malang, Jawa Timur
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-20 leading-8">
        A dedicated Fullstack Engineer with strong analytical skills, diligence,
        quick learning ability, high enthusiasm, and easy adaptability.
        Committed to continuous growth and learning in software development,
        especially in Backend. Outside of work, he enjoys building mutually
        beneficial relationships. A dedicated Fullstack Engineer with strong
        analytical skills, diligence, quick learning ability, high enthusiasm,
        and easy adaptability. Committed to continuous growth and learning in
        software development, especially in Backend. Outside of work, he enjoys
        building mutually beneficial relationships.
      </div>
    </section>
  );
};

export default MyInfo;
