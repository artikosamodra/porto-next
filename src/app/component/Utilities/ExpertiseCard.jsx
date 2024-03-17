import Image from "next/image";

const ExpertiseCard = ({ iconTech, nameTech, descTech }) => {
  return (
    <div>
      <Image src={iconTech} alt="Icon" width={100} height={100} />
      <h1>{nameTech}</h1>
      <p>{descTech}</p>
    </div>
  );
};

export default ExpertiseCard;
