"use client";
import { useState } from "react";
import BtnHide from "@/app/component/Utilities/ButtonHide";
import CertificateCard from "@/app/component/Utilities/CertificateCard";
import TitlePage from "@/app/component/Utilities/TitlePage";

const MyCertificate = () => {
  const [activeContent, setActiveContent] = useState(null);

  const handleButtonClick = (contentId) => {
    if (activeContent === contentId) {
      setActiveContent(null);
    } else {
      setActiveContent(contentId);
    }
  };
  return (
    <section className="px-40 py-10">
      <TitlePage titlePage="MyCertificate" />
      <div className="grid grid-cols-4 gap-10 pb-10">
        <CertificateCard
          pdfSrc="https://www.coursera.org/account/accomplishments/specialization/certificate/CXAL9YH2YE43"
          nameCerti="Google IT Support"
          lisC="Coursera"
        />
        <CertificateCard
          pdfSrc="https://digitalent.kominfo.go.id/cek-sertifikat?registrasi=1956492840-1771"
          nameCerti="Kominfo IT Support- FGA"
          lisC="Digitalent"
        />
        <CertificateCard
          pdfSrc="https://www.coursera.org/account/accomplishments/specialization/certificate/DQ76HU3WPTCE"
          nameCerti="Google Project Management"
          lisC="Coursera"
        />
        <CertificateCard
          pdfSrc="https://www.dicoding.com/certificates/1OP8164V2ZQK"
          nameCerti="Backend"
          lisC="Dicoding"
        />
      </div>
      <div>
        <div
          className={`grid grid-cols-4 gap-10 ${
            activeContent !== "showall" && "hidden"
          }`}
        >
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/98XWVR11WPM3"
            nameCerti="AWS"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/JMZV1G49JXN9"
            nameCerti="JavaScript"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/MEPJVL314P3V"
            nameCerti="DevOps"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/2VX3YGEJ3PYQ"
            nameCerti="Dart"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/81P28E55NPOY"
            nameCerti="Git"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/MRZM46L1NXYQ"
            nameCerti="C"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/JMZVNE6GOPN9"
            nameCerti="Java"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/NVP7OK7YRPR0"
            nameCerti="Jaringan Komputer"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/81P23OM4JXOY"
            nameCerti="Kotlin"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/KEXL8O494ZG2"
            nameCerti="Pemrograman Web"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/1RXYOG8N1PVM"
            nameCerti="Manajemen Proyek"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/81P285QMOPOY"
            nameCerti="Pemrograman SOLID"
            lisC="Dicoding"
          />
          <CertificateCard
            pdfSrc="https://www.dicoding.com/certificates/NVP79M95OZR0"
            nameCerti="Swift"
            lisC="Dicoding"
          />
        </div>
        <div className="flex justify-center py-10">
          <BtnHide
            nameBtn="Show All Certificate"
            handle={() => handleButtonClick("showall")}
          />
        </div>
      </div>
    </section>
  );
};
export default MyCertificate;
