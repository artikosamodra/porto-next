import CertificateCard from "@/app/component/Utilities/CertificateCard";
import TitlePage from "@/app/component/Utilities/TitlePage";

const MyCertificate = () => {
  return (
    <section className="px-40 py-10">
      <TitlePage titlePage="MyCertificate" />
      <div className="grid grid-cols-4">
        <CertificateCard
          pdfSrc="/pdf/ITSupport.pdf"
          imgCerti="/img/projects/homedecor.png"
          nameCerti="Google IT Support"
          lisC="Coursera"
        />
        <CertificateCard
          pdfSrc="/pdf/KomITSupport.pdf"
          imgCerti="/img/projects/homedecor.png"
          nameCerti="Kominfo IT Support- FGA"
          lisC="Digitalent"
        />
        <CertificateCard
          pdfSrc="/pdf/PMP.pdf"
          imgCerti="/img/projects/homedecor.png"
          nameCerti="Google Project Management"
          lisC="Coursera"
        />
        <CertificateCard
          pdfSrc="/pdf/Backend.pdf"
          imgCerti="/img/projects/homedecor.png"
          nameCerti="Backend"
          lisC="Dicoding"
        />
        <button></button>
        <div>
          <CertificateCard
            pdfSrc="/pdf/AWS.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="AWS"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/JS.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="JavaScript"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/Dart.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="Dart"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/DevOps.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="DevOps"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/Github.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="Github"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/C.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="C"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/Java.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="Java"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/KJ.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="Keamanan Jaringan"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/Kotlin.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="Kotlin"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/PemWeb.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="Pemrograman Web"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/PM.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="Project Management"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/SOLID.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="Pemrograman SOLID"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="/pdf/Swift.pdf"
            imgCerti="/img/projects/homedecor.png"
            nameCerti="Swift"
            lisC="Dicoding"
          />
        </div>
      </div>
    </section>
  );
};
export default MyCertificate;
