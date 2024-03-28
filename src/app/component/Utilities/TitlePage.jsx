"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const TitlePage = ({
  titlePage1,
  titlePage2,
  titlePage3,
  embedLottie,
  init1,
  init2,
  init3,
  anim1,
  anim2,
  anim3,
  trans1,
  trans2,
  trans3,
}) => {
  return (
    <div className="text-center md:text-7xl text-5xl font-bold pb-20 flex items-center justify-center">
      <motion.span initial={init1} animate={anim1} transition={trans1}>
        {titlePage1}
      </motion.span>
      <motion.span initial={init2} animate={anim2} transition={trans2}>
        {titlePage2}
      </motion.span>
      <motion.span initial={init3} animate={anim3} transition={trans3}>
        {titlePage3}
      </motion.span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 3 }}
      >
        <Player
          autoplay
          loop
          src={embedLottie}
          style={{ height: "100px", width: "100px" }}
        ></Player>
      </motion.div>
    </div>
  );
};

export default TitlePage;
