import JobsCard from "@/app/component/Utilities/JobsCard";
import TitlePage from "@/app/component/Utilities/TitlePage";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const MyExperience = () => {
  return (
    <section className="px-40 py-10">
      <TitlePage titlePage="My Experience" />
      <JobsCard
        logoComp="/picture.jpg"
        jobName="Augmented Reality Development Trainer"
        nameComp="PT. Inovasi Utama Nusantara"
        yearsExp="Maret 2022- Aug 2022"
        descJob="Playing the role of a mentor for Junior Augmented Reality Developers and a trainer in public workshops organized by the company. Collaborating with stakeholders in developing Augmented Reality Apps Projects for innovation in enhancing business in other sectors, serving as solutions that not only follow trends but also pioneer in transforming user experiences."
        contriText1="Conducting a 4-month mentoring program for seven prospective Junior Augmented Reality Developers, the aim is to provide a solid foundation in Augmented Reality Technology development to prepare them for integration into a new team within the company."
        contriText2="As a trainer for the Augmented Reality and Game Workshop organized by INTARA, I work with a diverse audience, including educators and business professionals. The workshop's objective is to establish mutually beneficial partnerships across various sectors by leveraging Augmented Reality Technology."
        contriText3="Spearheading the development of the AR House Solution application, I have led the creation of a virtual review platform for residential properties in the city of Malang. This innovative application not only utilizes augmented reality technology to attract potential property customers in Malang but also provides a unique and immersive virtual experience, enhancing engagement and interest for housing developers affiliated with INTARA."
        contriText4="Additionally, I have had the privilege of being a speaker at the Metaverse Based Learning seminar. This seminar targets young educators in the city of Malang, aiming to pique their interest in the development of virtual technologies such as Augmented Reality and Virtual Reality as effective teaching tools."
      />
      <JobsCard
        logoComp="/picture.jpg"
        jobName="Augmented Reality Development Trainer"
        nameComp="Lorem"
        yearsExp="Lorem"
        descJob="Lorem"
        contriText="Lorem10"
      />
      <JobsCard
        logoComp="/picture.jpg"
        jobName="Augmented Reality Development Trainer"
        nameComp="Lorem"
        yearsExp="Lorem"
        descJob="Lorem"
        contriText="Lorem10"
      />
      <JobsCard
        logoComp="/picture.jpg"
        jobName="Augmented Reality Development Trainer"
        nameComp="Lorem"
        yearsExp="Lorem"
        descJob="Lorem"
        contriText="Lorem10"
      />
    </section>
  );
};

export default MyExperience;
