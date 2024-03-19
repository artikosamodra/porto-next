"use client";
import MyExperience from "@/app/page/About/Experience";
import Image from "next/image";

const CertificateCard = ({ nameCerti, lisC, pdfSrc }) => {
  //   const handleLinkClick = (e) => {
  //     e.preventDefault();
  //     window.open(pdfSrc, "_blank");
  //   };

  return (
    // <div
    //   onClick={handleLinkClick}
    //   className="cursor-pointer flex flex-col justify-center items-center"
    // >
    //   <Image src="/certificate.png" width={60} height={60} alt="Thumbnail" />
    //   <h1 className="font-bold text-lg text-slate-400 pt-2">{nameCerti}</h1>
    //   <h1 className="font-semibold text-md text-slate-400">{lisC}</h1>
    // </div>

    <a href={pdfSrc} target="_blank">
      <div className="cursor-pointer flex flex-col justify-center items-center">
        <Image src="/certificate.png" width={60} height={60} alt="Thumbnail" />
        <h1 className="font-bold text-lg text-slate-400 pt-2">{nameCerti}</h1>
        <h1 className="font-semibold text-md text-slate-400">{lisC}</h1>
      </div>
    </a>
  );
};

export default CertificateCard;
