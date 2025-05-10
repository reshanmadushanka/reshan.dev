import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Boxes } from "./ui/background-boxes";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

const Hero = () => {
  return (
    <div className="" id="home">
      <div>
        <Spotlight
          className="top-40 -left-10`md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 -left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center">
        <div
          className="absolute inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        >
          <Boxes />
        </div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <img
            src="/profile2.jpg"
            alt="Your Name"
            className="w-32 h-32 rounded-full mx-auto shadow-lg p-5"
          ></img>
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Laravel|Vuejs|NextJs|PHP|React
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Experienced Software Engineer with 8+ Years"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Reshan Wijerathna, a Senior Software Engineer based in
            Sri Lanka.
          </p>
          <a href="#about">
            <ButtonsCard>Show My Experience</ButtonsCard>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
