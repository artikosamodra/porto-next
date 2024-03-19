import Image from "next/image";

const CertificateCard = ({ nameCerti, lisC, pdfSrc }) => {
  return (
    <a href={pdfSrc} target="_blank">
      <div className="cursor-pointer flex flex-col justify-center items-center">
        <Image src="/certificate.png" width={60} height={60} alt="Thumbnail" />
        <h1 className="font-bold md:text-lg text-md text-slate-400 pt-2">
          {nameCerti}
        </h1>
        <h1 className="font-semibold md:text-md text-sm text-slate-400">
          {lisC}
        </h1>
      </div>
    </a>
  );
};

export default CertificateCard;
