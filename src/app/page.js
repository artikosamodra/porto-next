import Image from "next/image";
import Navbar from "./component/Utilities/Navbar";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center w-full h-screen font-bold">
        <Navbar />
        <h1 className="text-7xl pt-10 pb-4">Artiko Fajar Samodra</h1>
        <h2 className="text-4xl pb-10">Frontend Developer</h2>
        <p className="text-lg">
          Hi, I'm a passionate frontend developer specializing in creating
          engaging and responsive user interfaces.
        </p>
        <div className="flex gap-8 pt-10">
          <div>Icon Sosmed</div>
          <div>Icon Sosmed</div>
          <div>Icon Sosmed</div>
          <div>Icon Sosmed</div>
        </div>
      </div>
    </main>
  );
}
