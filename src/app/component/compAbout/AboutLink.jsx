"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutLink = () => {
  return (
    <motion.div
      initial={{ rotateX: 180, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Link
        href="/page/About"
        className="py-2 px-5 shadow-lg bg-stone-600 rounded-md text-white hover:bg-indigo-600 font-bold"
      >
        My Details
      </Link>
    </motion.div>
  );
};

export default AboutLink;
