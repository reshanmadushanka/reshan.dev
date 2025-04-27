"use client"; // This directive marks the component as a Client Component

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

export default function DownloadButton() {
  function handleClick() {
    if (typeof document !== "undefined") {
      const pdfUrl = "/documents/ReshanWijerathna.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Reshan Wijerathna.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  if (typeof document === "undefined") {
    return null;
  }

  return (
    <a onClick={handleClick}>
      <MagicButton
        title="Download CV"
        icon={<FaLocationArrow />}
        position="right"
      />
    </a>
  );
}
