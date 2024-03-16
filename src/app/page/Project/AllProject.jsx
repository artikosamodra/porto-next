import ProjectCard from "@/app/component/Utilities/ProjectCard";

const AllProject = () => {
  return (
    <section>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <ProjectCard
          imageUrl="/img/projects/homedecor.png"
          title="Home Decor Solution (Website)"
          description="Home Decor Solution is a website providing services for property rental and interior design."
        />
        <ProjectCard
          imageUrl="/img/projects/taonime.png"
          title="Taonime (Web App)"
          description="Taonime is a web app containing information about anime. This website is built by utilizing an external data fetch API"
        />
        <ProjectCard
          imageUrl="/img/projects/kingpik.png"
          title="Kingpik Store (Website)"
          description="Kingpik Store is a website for promoting and selling products of SMEs, such as potato and taro chips."
        />
      </div>
    </section>
  );
};

export default AllProject;
