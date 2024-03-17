import NavbarB from "@/app/component/Utilities/NavbarB";
import MyCertificate from "./Certificate";
import MyExperience from "./Experience";
import MyExpertise from "./Expertise";
import MyInfo from "./Info";

const MyDetail = () => {
  return (
    <main>
      <NavbarB />
      <MyInfo />
      <MyExperience />
      <MyExpertise />
      <MyCertificate />
    </main>
  );
};

export default MyDetail;
