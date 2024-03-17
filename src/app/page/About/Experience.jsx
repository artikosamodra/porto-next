import JobsCard from "@/app/component/Utilities/JobsCard";
import TitlePage from "@/app/component/Utilities/TitlePage";

const MyExperience = () => {
  return (
    <section className="px-20">
      <TitlePage titlePage="My Experience" />
      <JobsCard
        logoComp="/picture.jpg"
        nameComp="Lorem"
        jobName="Lorem"
        yearsExp="Lorem"
        descJob="Lorem"
        contriText="Lorem10"
      />
    </section>
  );
};

export default MyExperience;
