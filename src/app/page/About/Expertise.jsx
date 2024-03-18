import ExpertiseCard from "@/app/component/Utilities/ExpertiseCard";
import TitlePage from "@/app/component/Utilities/TitlePage";

const MyExpertise = () => {
  return (
    <section className="px-40 py-10">
      <TitlePage titlePage="My Expertise" />
      <div className="grid grid-cols-4">
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Lorem"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Lorem"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Lorem"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Lorem"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Lorem"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Lorem"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Lorem"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Lorem"
          descTech="Lorem10"
        />
      </div>
    </section>
  );
};

export default MyExpertise;
