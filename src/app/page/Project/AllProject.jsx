import ProjectCard from "@/app/component/Utilities/ProjectCard";
import Techno from "@/app/component/Utilities/Techno";

const AllProject = () => {
  return (
    <section>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
        <div className="pb-4">
          <ProjectCard
            linkUrl="/"
            linkRepo="https://github.com/artikosamodra/porto-next"
            imageUrl="/img/projects/cvfrontend.png"
            title="My Portofolio (Website)"
            description="Home Decor Solution is a website providing services for property rental and interior design."
          />
          <div className="flex flex-wrap gap-2 pt-2 px-4">
            <Techno tech="Next" />
            <Techno tech="React" />
            <Techno tech="Tailwind" />
            <Techno tech="AnimateCSS" />
          </div>
        </div>
        <div className="pb-4">
          <ProjectCard
            linkUrl="https://artikosamodra.github.io/video-player-web/"
            linkRepo="https://github.com/artikosamodra/video-player-web"
            imageUrl="/img/projects/webplayer.png"
            title="ArtTube Player (Website)"
            description="ArtTube Player is a simple website for creating a framework of video player features in the browser."
          />
          <div className="flex flex-wrap gap-2 pt-2 px-4">
            <Techno tech="HTML" />
            <Techno tech="Boostrap" />
            <Techno tech="JavaScript" />
          </div>
        </div>
        <div className="pb-4">
          <ProjectCard
            linkUrl="/"
            linkRepo="/"
            imageUrl="/img/projects/cvfullstack.png"
            title="My Portofolio (Website)"
            description="My Portfolio Website is created using Bootstrap."
          />
          <div className="flex flex-wrap gap-2 pt-2 px-4">
            <Techno tech="HTML" />
            <Techno tech="CSS" />
            <Techno tech="Boostrap5" />
            <Techno tech="JavaScript" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProject;
