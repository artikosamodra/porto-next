import Icons from "@/app/component/Utilities/Icons/Icon";
import {
  DiscordLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <section>
      <div className="flex flex-col font-bold">
        <Link
          href="/"
          className="text-blue-900 bg-blue-400 border border-3 shadow-xl w-full py-3 px-8 my-4 rounded-lg flex gap-4 items-center hover:bg-gradient-to-r from-orange-500 to-purple-600 hover:text-stone-100 transition duration-200 md:text-lg text-md"
        >
          <InstagramLogo size={40} weight="fill" />
          <h1>Instagram</h1>
        </Link>

        <Link
          href="/"
          className="text-red-900 bg-red-400 border border-3 shadow-xl w-full py-3 px-8 my-4 rounded-lg flex gap-4 items-center hover:bg-blue-700 hover:text-stone-100 transition duration-500"
        >
          <LinkedinLogo size={40} weight="fill" />
          <h1>LinkedIn</h1>
        </Link>
        <Link
          href="/"
          className="text-gray-900 bg-yellow-300 border border-3 shadow-xl w-full py-3 px-8 my-4 rounded-lg flex gap-4 items-center hover:bg-blue-500 hover:text-stone-100 transition duration-500"
        >
          <FacebookLogo size={40} weight="fill" />
          <h1>Facebook</h1>
        </Link>
        <Link
          href="/"
          className="text-green-900 bg-green-400 border border-3 shadow-xl w-full py-3 px-8 my-4 rounded-lg flex gap-4 items-center hover:bg-indigo-500 hover:text-stone-100 transition duration-500"
        >
          <DiscordLogo size={40} weight="fill" />
          <h1 className="shawdow-xl">Discord</h1>
        </Link>
      </div>
    </section>
  );
};

export default SocialMedia;
