"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutDesc = () => {
  return (
    <motion.div
      initial={{
        opacity: 0, // Mulai dengan opacity 0
        clipPath: "inset(0 100% 0 0)", // Clip elemen dari kanan
      }}
      animate={{
        opacity: 1, // Opacity berubah menjadi 1
        clipPath: "inset(0 0 0 0)", // Clip-path berubah sehingga teks muncul dari kanan ke kiri
      }}
      transition={{ duration: 2, delay: 1 }} // Durasi animasi
    >
      <h1 className="font-bold text-4xl pb-2">Hello,</h1>
      <div className="pb-10 lg:text-lg text-md leading-8 font-semibold opacity-70">
        My name is Artiko Fajar Samodra, alternatively referred to as Tao. I
        focus in Frontend web apps development. I have acquired proficiency in
        PHP, JavaScript, and C#, and have successfully executed various projects
        utilizing React and Next frameworks. I am dedicated to ongoing learning
        and advancement, especially within the realm of Frontend development. My
        skillset encompasses strong analytical capabilities, diligence, and
        adaptability.
      </div>
    </motion.div>
  );
};

export default AboutDesc;
