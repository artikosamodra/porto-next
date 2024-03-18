import ExpertiseCard from "@/app/component/Utilities/ExpertiseCard";
import TitlePage from "@/app/component/Utilities/TitlePage";

const MyExpertise = () => {
  return (
    <section className="px-40 py-10">
      <TitlePage titlePage="My Expertise" />
      <div className="grid grid-cols-4">
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="HTML"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="CSS"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="JavaScript"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Tailwind"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="React"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="NextJS"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="NodeJS"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="ExpressJS"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Boostrap"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Git"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Unity 3D"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="AR Foundation"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="MySQL"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="C#"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="Kotlin"
          descTech="Lorem10"
        />
        <ExpertiseCard
          iconTech="/picture.jpg"
          nameTech="PHP"
          descTech="Lorem10"
        />
      </div>
    </section>
  );
};

export default MyExpertise;
