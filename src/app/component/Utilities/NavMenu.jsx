import Link from "next/link";
import "animate.css";

const NavMenu = ({ linkUrl, linkTitle }) => {
  return (
    <div className="lg:text-xl text-lg lg:py-1 py-4">
      <Link
        href={linkUrl}
        className="nav-hover hover:text-yellow-500 transition duration-300"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default NavMenu;
