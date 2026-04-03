"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

export default function DownloadButton() {
  function handleClick() {
    const pdfUrl = "/documents/ReshanWijerathnaCV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Reshan Wijerathna.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <MagicButton
      title="Download CV"
      icon={<FaLocationArrow />}
      position="right"
      handleClick={handleClick}
    />
  );
}
