const PDFLink = () => {
  return (
    <Link href={pdfSrc}>
      <a target="_blank" rel="noopener noreferrer">
        <Image src={thumbnailSrc} width={100} height={100} alt="Thumbnail" />
      </a>
    </Link>
  );
};
export default PDFLink;
