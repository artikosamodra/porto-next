"use client";
import { Player } from "@lottiefiles/react-lottie-player";
const TitlePage = ({ titlePage, embedLottie, sizeh, sizew }) => {
  return (
    <div className="text-center md:text-7xl text-5xl font-bold pb-20 flex items-center justify-center">
      {titlePage}
      <Player
        autoplay
        loop
        src={embedLottie}
        style={{ height: "100px", width: "100px" }}
      ></Player>
    </div>
  );
};

export default TitlePage;
