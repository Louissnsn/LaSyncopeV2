import style from "@/app/styles/DownloadButton.module.css";

const DownloadButton = () => {
  return (
    <a
      href="/Portfolio_Cie_2024_compressed.pdf"
      download="Portfolio_Cie_2024_compressed.pdf"
    >
      <button>Download PDF</button>
    </a>
  );
};

export default DownloadButton;
