import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import DownloadButton from "./DownloadButton";
import CvPreview from "./CvPreview";

const Footer = () => {
  return (
    <footer
      className="w-full pt-10 pb-8 mb-[100px] md:mb-5 sm:pt-2"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[60vw]">
          Looking for a{" "}
          <span className="text-purple">talented Software Engineer</span> to
          join your team?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 max-w-2xl text-center text-sm leading-6 sm:text-base">
          I am ready to bring my expertise to your organization. Let us
          connect and discuss how I can contribute to your success.
        </p>

        <div className="w-full max-w-6xl">
          <CvPreview />
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white shadow-lg backdrop-blur-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-13zm3 0a.5.5 0 00-.5.5V6h11V4a.5.5 0 00-.5-.5h-10zM16 7H4v8.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V7z" />
            </svg>
            <span className="text-xs font-semibold sm:text-sm">
              Call me:{" "}
              <a
                href="tel:+94711380025"
                className="text-purple hover:underline"
              >
                +9471 138 0025
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="md:text-base text-sm md:font-normal font-light text-white/70">
          Copyright (c) {new Date().getFullYear()} Reshan Wijerathna
        </p>

        <div className="flex items-center gap-4 md:gap-3">
          {socialMedia.map((info) => (
            <a
              href={info.url}
              key={info.id}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg transition hover:border-purple/50 hover:bg-white/10"
            >
              <img src={info.img} alt="social icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
