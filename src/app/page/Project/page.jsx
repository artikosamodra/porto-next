// import ProjectCard from "@/app/component/Utilities/ProjectCard";
import ProjectCard from "@/app/component/Utilities/ProjectCard";
import TitlePage from "@/app/component/Utilities/TitlePage";

const Project = () => {
  return (
    <section className="py-40 lg:px-40 px-10">
      <TitlePage titlePage="PROJECT" />

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
    </section>
  );
};

export default Project;
