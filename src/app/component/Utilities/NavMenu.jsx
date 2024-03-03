import Link from "next/link";

const NavMenu = ({ linkUrl, linkTitle }) => {
  return (
    <div className="text-xl">
      <Link href={linkUrl} className="hover:text-gray-600">
        {linkTitle}
      </Link>
    </div>
  );
};

export default NavMenu;
