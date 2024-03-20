import { GithubLogo, Globe } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import Techno from "./techno";

const ProjectCard = ({
  imageUrl,
  title,
  description,
  linkUrl,
  linkRepo,
  tech1,
  tech2,
  tech3,
  tech4,
  tech1ClassName,
  tech2ClassName,
  tech3ClassName,
  tech4ClassName,
}) => {
  return (
    <div className="hover:bg-gradient-to-b from-gray-400 transition duration-5000 rounded-lg p-2">
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
          <p className="pt-3 leading-7">{description}</p>
        </div>
        <div className="flex px-4 gap-5">
          <a href={linkUrl} target="_blank">
            <Globe size={32} />
          </a>
          <a href={linkRepo} target="_blank">
            <GithubLogo size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
