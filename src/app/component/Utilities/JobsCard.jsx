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
      <div className="md:col-span-2 col-span-12">
        <Image
          src={logoComp}
          alt="logo"
          width={120}
          height={120}
          className="rounded-lg"
        />
      </div>
      <div className="md:col-span-10 col-span-12">
        <div className="font-bold lg:text-2xl text-xl pb-1">{jobName}</div>
        <div className="font-semibold lg:text-xl text-lg pb-1">{nameComp}</div>
        <div className="font-semibold lg:text-lg text-md pb-1">{yearsExp}</div>
        <div className="py-5 leading-7 lg:text-lg text-md">{descJob}</div>
      </div>
    </div>
  );
};

export default JobsCard;
