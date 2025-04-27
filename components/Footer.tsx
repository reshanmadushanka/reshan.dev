import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import DownloadButton from "./DownloadButton";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[60vw]">
          Looking for a{" "}
          <span className="text-purple">talented Software Engineer</span> to
          join your team?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I’m ready to bring my expertise to your organization. Let’s connect
          and discuss how I can contribute to your success.
        </p>
        <div className="flex items-center space-x-2 text-white bg-gray-800 p-4 rounded-lg shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-purple-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-13zm3 0a.5.5 0 00-.5.5V6h11V4a.5.5 0 00-.5-.5h-10zM16 7H4v8.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V7z" />
          </svg>
          <span className="text-xs font-semibold sm:text-xs lg:text-xs">
            Call me:{" "}
            <a
              href="tel:+94711380025"
              className="text-purple-400 hover:underline"
            >
              +9471 138 0025
            </a>
          </span>
        </div>

        <div className="flex flex-row gap-4 pt-2">
          <div className="basis-128">
            <a href="mailto:reshanmadushanka@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
          <div className="basis-128">
            <DownloadButton />
          </div>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Reshan Wijerathna
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.url}
              key={info.id}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
