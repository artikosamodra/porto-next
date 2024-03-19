"use client";
import { useState } from "react";
import ContriList from "@/app/component/Utilities/ContriList";
import JobsCard from "@/app/component/Utilities/JobsCard";
import BtnHide from "@/app/component/Utilities/ButtonHide";
import TitleAbout from "@/app/component/Utilities/TitleAbout";

const MyExperience = () => {
  const [activeContent, setActiveContent] = useState(null);

  const handleButtonClick = (contentId) => {
    if (activeContent === contentId) {
      setActiveContent(null);
    } else {
      setActiveContent(contentId);
    }
  };

  return (
    <section className="lg:px-40 px-10 py-10">
      <TitleAbout titleAbout="My Experience" />
      <div className="pb-10">
        <JobsCard
          logoComp="/img/company/digistar.jpg"
          jobName="Augmented Reality Development Trainer"
          nameComp="PT. Inovasi Utama Nusantara"
          yearsExp="Maret 2022- Aug 2022"
          descJob="Playing the role of a mentor for Junior Augmented Reality Developers and a trainer in public workshops organized by the company. Collaborating with stakeholders in developing Augmented Reality Apps Projects for innovation in enhancing business in other sectors, serving as solutions that not only follow trends but also pioneer in transforming user experiences."
        />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2 md:block hidden"></div>
          <div className="md:col-span-10 col-span-12">
            <BtnHide
              nameBtn="Contribution"
              handle={() => handleButtonClick("content1")}
            />
            <div
              className={`mt-4 p-4 bg-stone-100 text-stone-500 shadow-xl rounded-md ${
                activeContent !== "content1" && "hidden"
              }`}
            >
              <ContriList contriText="Conducting a 4-month mentoring program for seven prospective Junior Augmented Reality Developers, the aim is to provide a solid foundation in Augmented Reality Technology development to prepare them for integration into a new team within the company." />
              <ContriList contriText="As a trainer for the Augmented Reality and Game Workshop organized by INTARA, I work with a diverse audience, including educators and business professionals. The workshop's objective is to establish mutually beneficial partnerships across various sectors by leveraging Augmented Reality Technology." />
              <ContriList contriText="Spearheading the development of the AR House Solution application, I have led the creation of a virtual review platform for residential properties in the city of Malang. This innovative application not only utilizes augmented reality technology to attract potential property customers in Malang but also provides a unique and immersive virtual experience, enhancing engagement and interest for housing developers affiliated with INTARA." />
              <ContriList contriText="Additionally, I have had the privilege of being a speaker at the Metaverse Based Learning seminar. This seminar targets young educators in the city of Malang, aiming to pique their interest in the development of virtual technologies such as Augmented Reality and Virtual Reality as effective teaching tools." />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <JobsCard
          logoComp="/img/company/ibig.jpg"
          jobName="Frontend Developer"
          nameComp="Ibig Unimoon"
          yearsExp="Jan 2020- Des 2021"
          descJob="Involved in the development of web applications as part of a team to meet client needs. Using React technology to build the frontend application. Also contributed to processing APIs together with the integrated and optimized backend."
        />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2 md:block hidden"></div>
          <div className="md:col-span-10 col-span-12">
            <BtnHide
              nameBtn="Contribution"
              handle={() => handleButtonClick("content2")}
            />
            <div
              className={`mt-4 p-4 bg-stone-100 text-stone-500 shadow-xl rounded-md ${
                activeContent !== "content2" && "hidden"
              }`}
            >
              <ContriList contriText="Successfully contributed to the development of the 'ShoesCare Laundry' Web App for a client." />
              <ContriList contriText="Created a cashier Web App." />
              <ContriList contriText="Successfully integrated the use of APIs for location services and requirements in the 'ShoesCare Laundry' Web App." />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-10">
        <JobsCard
          logoComp="/img/company/jm.jpg"
          jobName="Augmented Reality Developer"
          nameComp="CV. Jaya Mandiri Interior Internship"
          yearsExp="Jun 2018- Sep 2018"
          descJob="Responsible for developing marker-based augmented reality applications for virtual interior product reviews."
        />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2 md:block hidden"></div>
          <div className="md:col-span-10 col-span-12">
            <BtnHide
              nameBtn="Contribution"
              handle={() => handleButtonClick("content3")}
            />
            <div
              className={`mt-4 p-4 bg-stone-100 text-stone-500 shadow-xl rounded-md ${
                activeContent !== "content3" && "hidden"
              }`}
            >
              <ContriList contriText="Created 3D models of interior products marketed by the company using SketchUp." />
              <ContriList contriText="Designed features for interior product review needs." />
              <ContriList contriText="Developed Augmented Reality using Vuforia, C# Language and Unity 3D technologies." />
              <ContriList contriText="Designed UI for user interactions." />
              <ContriList contriText="Conducted debugging and unit testing to improve application efficiency." />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-10">
        <JobsCard
          logoComp="/img/company/ganimx.jpg"
          jobName="Junior Project Manager"
          nameComp="Ganimx Studio"
          yearsExp="Sep 2017- Jun 2018"
          descJob="Served as an assistant team lead to organize task assignments. Assisted the senior project manager in designing the project framework, team organization, and handling various stakeholders/clients."
        />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2 md:block hidden"></div>
          <div className="md:col-span-10 col-span-12">
            <BtnHide
              nameBtn="Contribution"
              handle={() => handleButtonClick("content4")}
            />
            <div
              className={`mt-4 p-4 bg-stone-100 text-stone-500 shadow-xl rounded-md ${
                activeContent !== "content4" && "hidden"
              }`}
            >
              <ContriList contriText="Successfully assisted the team in developing a game mobile app." />
              <ContriList contriText="Planned and scheduled project workflow." />
              <ContriList contriText="Implemented agile-scrum methodology." />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <JobsCard
          logoComp="/img/company/ganimx.jpg"
          jobName="Game Developer"
          nameComp="Ganimx Studio"
          yearsExp="Mar 2016 - Aug 2017"
          descJob="Contributed to helping the team develop Unity 3D and C# game applications."
        />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2 md:block hidden"></div>
          <div className="md:col-span-10 col-span-12">
            <BtnHide
              nameBtn="Contribution"
              handle={() => handleButtonClick("content5")}
            />
            <div
              className={`mt-4 md:p-4 p-1 bg-stone-100 text-stone-500 shadow-xl rounded-md ${
                activeContent !== "content5" && "hidden"
              }`}
            >
              <ContriList contriText="Successfully created smartphone games, CarBoom, Cat Dodge, Shooting Stance, Angry Quiz, and Knowledge Puzzle as solo projects assigned by the company." />
              <ContriList contriText="Contributed as an additional team member in the development of a horror game with a development team from Manila." />
              <ContriList contriText="Mastered 3D modeling using Blender." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
