import Image from "next/image";

const ProjectCard = ({ imageUrl, title, description }) => {
  return (
    <div className="overflow-hidden">
      <div className="relative lg:h-48 md:h-32 h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg p-2 border border-2"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="py-3 leading-8">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
