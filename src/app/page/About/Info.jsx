import TitlePage from "@/app/component/Utilities/TitlePage";
import Image from "next/image";

const MyInfo = () => {
  return (
    <section className="px-20">
      <TitlePage titlePage="My Info" />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <Image src="/picture.jpg" alt="profil pic" width={300} height={300} />
        </div>
        <div className="col-span-3">
          <div>Nama</div>
          <div>Job</div>
          <div className="grid grid-cols-2">
            <div>Sos 1</div>
            <div>Sos 2</div>
            <div>Sos 3</div>
            <div>Sos 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyInfo;