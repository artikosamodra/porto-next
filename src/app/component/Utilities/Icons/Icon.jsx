"use client";
import * as PhosphorIcons from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Icons = ({ iconLink, iconName, iconSize, iconClass }) => {
  const IconComponent = PhosphorIcons[iconName];

  return (
    <div>
      <Link href={iconLink} target="_blank">
        {IconComponent && (
          <IconComponent className={iconClass} size={iconSize} />
        )}
      </Link>
    </div>
  );
};

export default Icons;
