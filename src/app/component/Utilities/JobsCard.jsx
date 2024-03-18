import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const JobsCard = ({
  logoComp,
  jobName,
  nameComp,
  yearsExp,
  descJob,
  contriText1,
  contriText2,
  contriText3,
  contriText4,
  contriText5,
}) => {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-2">
        <Image src={logoComp} alt="logo" width={150} height={150} className="rounded-lg" />
      </div>
      <div className="col-span-10">
        <div className="font-bold text-2xl pb-1">{jobName}</div>
        <div className="font-semibold text-xl pb-1">{nameComp}</div>
        <div className="font-semibold pb-1">{yearsExp}</div>
        <div className="py-5 leading-7">{descJob}</div>
      </div>
    </div>
  );
};

export default JobsCard;
