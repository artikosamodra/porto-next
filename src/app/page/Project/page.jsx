// import ProjectCard from "@/app/component/Utilities/ProjectCard";
import ProjectCard from "@/app/component/Utilities/ProjectCard";
import TitlePage from "@/app/component/Utilities/TitlePage";
import Link from "next/link";

const Project = () => {
  return (
    <section className="py-40 lg:px-40 px-10">
      <TitlePage
        titlePage="PROJECT"
        embedLottie="https://lottie.host/7d119f4c-d48d-4023-abad-20523861a97a/NPSh69mBjZ.json"
      />

      <div className="flex flex-col justify-center items-center gap-10">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <ProjectCard
            imageUrl="/picture.jpg"
            title="Example Card"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at felis libero."
          />
          <ProjectCard
            imageUrl="/picture.jpg"
            title="Example Card"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at felis libero."
          />
          <ProjectCard
            imageUrl="/picture.jpg"
            title="Example Card"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at felis libero."
          />
        </div>

        <Link
          href="/"
          className="py-2 px-5 shadow-lg bg-stone-600 rounded-md text-white hover:bg-indigo-600 font-bold"
        >
          All Projects
        </Link>
      </div>
    </section>
  );
};

export default Project;
