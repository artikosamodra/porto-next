"use client";
import MyExperience from "@/app/page/About/Experience";
import Image from "next/image";

const CertificateCard = ({ imgCerti, nameCerti, lisC, pdfSrc }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    window.open(pdfSrc, "_blank");
  };

  return (
    <div onClick={handleLinkClick} className="cursor-pointer">
      <Image src={imgCerti} width={200} height={100} alt="Thumbnail" />
      <h1>{nameCerti}</h1>
      <h1>{lisC}</h1>
    </div>
  );
};

export default CertificateCard;
