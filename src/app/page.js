"use client";
import Biodata from "./component/Biodata";
import Icons from "./component/Utilities/Icons/Icon";
import NavbarA from "./component/Utilities/NavbarA";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-400">
      <div className="flex flex-col justify-center items-center w-full h-screen md:px-20 px-5 text-center">
        <motion.div
          initial={{ y: -1000, scale: 0.2 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <NavbarA />
        </motion.div>
        <Biodata />
        <div className="flex flex-wrap justify-center md:gap-10 gap-6 md:pt-14 pt-20 px-10">
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 2.5 }}
          >
            <Icons
              iconLink="https://www.instagram.com/artikofs/"
              iconName="InstagramLogo"
              iconSize="72"
              iconClass="text-white bg-slate-400 lg:p-3 p-2 rounded-full shadow-xl hover:bg-gradient-to-r from-orange-500 to-purple-600 transition duration-500 shadow-lg hover:shadow-stone-100 lg:w-20 lg:h-20 w-12 h-12"
            />
          </motion.div>

          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 3 }}
          >
            <Icons
              iconLink="https://github.com/artikosamodra"
              iconName="GithubLogo"
              iconSize="md:72 24"
              iconClass="text-white bg-slate-400 lg:p-3 p-2 rounded-full shadow-xl hover:bg-stone-900 transition duration-500 shadow-lg hover:shadow-orange-500 lg:w-20 lg:h-20 w-12 h-12"
            />
          </motion.div>

          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 3.5 }}
          >
            <Icons
              iconLink="https://www.linkedin.com/in/artiko/"
              iconName="LinkedinLogo"
              iconSize="md:72 24"
              iconClass="bg-slate-400 lg:p-3 p-2 rounded-full shadow-xl hover:bg-blue-600 transition duration-500 text-white shadow-lg hover:shadow-stone-200 lg:w-20 lg:h-20 w-12 h-12"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
