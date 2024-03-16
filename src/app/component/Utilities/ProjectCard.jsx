import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ imageUrl, title, description, linkUrl }) => {
  return (
    <Link
      href={linkUrl}
      className="hover:bg-gradient-to-b from-gray-400 transition duration-5000 rounded-lg p-2 "
    >
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
    </Link>
  );
};

export default ProjectCard;
