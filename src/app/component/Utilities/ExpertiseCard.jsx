import Image from "next/image";

const ExpertiseCard = ({ iconTech, nameTech, descTech }) => {
  return (
    <div className="p-5 bg-stone-100 rounded-md">
      <Image src={iconTech} alt="Icon" width={70} height={70} />
      <h1 className="font-bold text-slate-600 text-lg pt-2 pb-1 pl-2">
        {nameTech}
      </h1>
      <p className="font-semibold text-slate-400 text-sm pl-2">{descTech}</p>
    </div>
  );
};

export default ExpertiseCard;
