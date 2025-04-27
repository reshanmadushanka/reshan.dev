"use client";

import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const DownloadButton = () => {
  const handleClick = () => {
    const pdfUrl = "/documents/ReshanWijerathna.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Reshan Wijerathna.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div onClick={handleClick}>
      <MagicButton
        title="Download CV"
        icon={<FaLocationArrow />}
        position="right"
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(DownloadButton), {
  ssr: false,
});
