import ProjectCard from "@/app/component/Utilities/ProjectCard";

const AllProject = () => {
  return (
    <section>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <ProjectCard
          linkUrl="/"
          imageUrl="/img/projects/cvfrontend.png"
          title="My Portofolio (Website)"
          description="Home Decor Solution is a website providing services for property rental and interior design."
        />
        <ProjectCard
          linkUrl="/"
          imageUrl="/img/projects/webplayer.png"
          title="ArtTube Player (Website)"
          description="Taonime is a web app containing information about anime. This website is built by utilizing an external data fetch API"
        />
        <ProjectCard
          linkUrl="/"
          imageUrl="/img/projects/cvfullstack.png"
          title="My Portofolio (Website)"
          description="Kingpik Store is a website for promoting and selling products of SMEs, such as potato and taro chips."
        />
      </div>
    </section>
  );
};

export default AllProject;
