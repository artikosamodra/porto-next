import NavbarB from "@/app/component/Utilities/NavbarB";
import MyCertificate from "./Certificate";
import MyExperience from "./Experience";
import MyExpertise from "./Expertise";
import MyInfo from "./Info";

const MyDetail = () => {
  return (
    <main>
      <NavbarB />
      <div className="pt-20">
        <MyInfo />
        <MyExperience />
        <MyExpertise />
        <MyCertificate />
      </div>
    </main>
  );
};

export default MyDetail;
