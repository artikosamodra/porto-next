import MyExperience from "@/app/page/About/Experience";
import Image from "next/image";

const CertificateCard = ({ imgCerti, nameCerti }) => {
  return (
    <div>
      <Image src={imgCerti} alt="Certificate" width={200} height={100} />
      <h1>{nameCerti}</h1>
    </div>
  );
};

export default CertificateCard;
