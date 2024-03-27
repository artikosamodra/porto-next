"use client";
import { motion } from "framer-motion";

const Biodata = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 3 }}
    >
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
    </motion.div>
  );
};
export default Biodata;
