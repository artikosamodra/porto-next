import MyCertificate from "./Certificate";
import MyExperience from "./Experience";
import MyExpertise from "./Expertise";
import MyInfo from "./Info";

const MyDetail = () => {
  return (
    <main>
      <MyInfo />
      <MyExperience />
      <MyExpertise />
      <MyCertificate />
    </main>
  );
};

export default MyDetail;
