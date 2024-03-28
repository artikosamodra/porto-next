"use client";
import ProjectCard from "@/app/component/Utilities/ProjectCard";
import TitlePage from "@/app/component/Utilities/TitlePage";
import AllProject from "../Project/AllProject";
import { useState, useEffect } from "react";
import Techno from "@/app/component/Utilities/Techno";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = () => {
  const [showProject, setShowProject] = useState(false);

  const { ref, inView } = useInView();

  const [playAnim, setPlayAnim] = useState(false);

  // button handle
  const handleBtnAllProjects = () => {
    setShowProject(true);
  };

  const handleBtnHiddenProjects = () => {
    setShowProject(false);
  };

  // Animation handle
  useEffect(() => {
    if (inView && !playAnim) {
      setPlayAnim(true);
    }
  }, [inView, playAnim]);

  return (
    <section className="py-40 lg:px-40 px-10">
      <motion.div
        ref={ref}
        initial={{ x: -200, opacity: 0 }}
        animate={playAnim ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{ delay: 2, duration: 2 }}
      >
        <TitlePage
          titlePage1="PROJ"
          init1={{ x: -200, opacity: 0 }}
          anim1={{ x: 0, opacity: 1 }}
          trans1={{ delay: 1, duration: 1 }}
          titlePage2="E"
          init2={{ y: -200, opacity: 0 }}
          anim2={{ y: 0, opacity: 1 }}
          trans2={{ delay: 3, duration: 3 }}
          titlePage3="CT"
          init3={{ x: 200, opacity: 0 }}
          anim3={{ x: 0, opacity: 1 }}
          trans3={{ delay: 1, duration: 1 }}
          embedLottie="https://lottie.host/7d119f4c-d48d-4023-abad-20523861a97a/NPSh69mBjZ.json"
        />

        <div className="flex flex-col justify-center items-center">
          <motion.div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
              <div className="pb-4">
                <ProjectCard
                  linkUrl="https://taonime-app-v1.vercel.app/"
                  linkRepo="https://github.com/artikosamodra/taonime-app"
                  imageUrl="/img/projects/taonime.png"
                  title="Taonime (Web App)"
                  description="Taonime is a web app containing information about anime. This website is built by utilizing an external data fetch API"
                />
                <div className="flex flex-wrap gap-2 pt-2 px-4">
                  <Techno tech="React" />
                  <Techno tech="NextJS" />
                  <Techno tech="Tailwind" />
                  <Techno tech="SwiperJS" />
                </div>
              </div>
              <div className="pb-4">
                <ProjectCard
                  linkUrl="https://homedecor-six.vercel.app/"
                  linkRepo="https://github.com/artikosamodra/homedecor"
                  tech1="NextJS"
                  tech2="Tailwind"
                  imageUrl="/img/projects/homedecor.png"
                  title="Home Decor Solution (Website)"
                  description="Home Decor Solution is a website providing services for property rental and interior design."
                />
                <div className="flex flex-wrap gap-2 pt-2 px-4">
                  <Techno tech="NextJS" />
                  <Techno tech="Tailwind" />
                </div>
              </div>

              <div className="pb-4">
                <ProjectCard
                  linkUrl="https://artikosamodra.github.io/kingpik-store/"
                  linkRepo="https://github.com/artikosamodra/kingpik-store"
                  imageUrl="/img/projects/kingpik.png"
                  title="Kingpik Store (Website)"
                  description="Kingpik Store is a website for promoting and selling products of SMEs, such as potato and taro chips."
                />
                <div className="flex flex-wrap gap-2 pt-2 px-4">
                  <Techno tech="HTML" />
                  <Techno tech="CSS" />
                  <Techno tech="JavaScript" />
                </div>
              </div>
            </div>
          </motion.div>

          <div
            id="allproject"
            style={{ display: showProject ? "block" : "none" }}
          >
            <AllProject />
          </div>

          <div className="pt-10">
            <button
              onClick={handleBtnAllProjects}
              style={{ display: showProject ? "none" : "block" }}
              className="py-2 px-5 shadow-lg bg-stone-600 rounded-md text-white hover:bg-indigo-600 font-bold"
            >
              All Projects
            </button>
            <button
              onClick={handleBtnHiddenProjects}
              style={{ display: showProject ? "block" : "none" }}
              className="py-2 px-5 shadow-lg bg-stone-600 rounded-md text-white hover:bg-indigo-600 font-bold"
            >
              Hide Project
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
