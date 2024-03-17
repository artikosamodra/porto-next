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
    <div className="flex flex-row gap-10">
      <div>
        <Image src={logoComp} alt="logo" width={150} height={150} />
      </div>
      <div>
        <div>{jobName}</div>
        <div>{nameComp}</div>
        <div>{yearsExp}</div>
        <div>{descJob}</div>
        <button>Contribution</button>
        <div className="flex">
          <CheckCircle size={32} /> {contriText1}
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
