"use client";
import TitlePage from "@/app/component/Utilities/TitlePage";
import AboutDesc from "@/app/component/compAbout/AboutDesc";
import AboutLink from "@/app/component/compAbout/AboutLink";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-40 lg:px-40 px-10 bg-gradient-to-b from-gray-400">
      <TitlePage
        titlePage="ABOUT"
        embedLottie="https://lottie.host/cd0b74bb-622e-48ce-abf5-f25ff78f3483/O2Cko0lnqk.json"
      />
      <div className="grid grid-cols-5 ">
        <div className="lg:col-span-2 col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/picture.jpg"
              alt="Foto Profil"
              width={300}
              height={300}
              className="rounded-full w-56 h-56 shadow-xl"
            />
          </motion.div>
        </div>
        <div className="lg:col-span-3 col-span-5 lg:pt-0 pt-14">
          <AboutDesc />
          <AboutLink />
        </div>
      </div>
    </section>
  );
};

export default About;
