import Image from "next/image";

const JobsCard = ({
  logoComp,
  jobName,
  nameComp,
  yearsExp,
  descJob,
  contriText,
}) => {
  return (
    <div className="flex flex-row">
      <div>
        <Image src={logoComp} alt="logo" width={300} height={300} />
      </div>
      <div>
        <div>{jobName}</div>
        <div>{nameComp}</div>
        <div>{yearsExp}</div>
        <div>{descJob}</div>
        <button>Contribution</button>
        <div>{contriText}</div>
      </div>
    </div>
  );
};

export default JobsCard;
