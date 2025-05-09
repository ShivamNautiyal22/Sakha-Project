import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Element } from "react-scroll";

const Solution = () => {
  return (
    <Element name="solution" className="px-10 py-10 flex flex-col items-center gap-6">
      <DotLottieReact
        src="https://lottie.host/c45a74ae-a722-46ce-acb1-5a321fbdb90d/ND1tUuALH8.lottie"
        loop
        autoplay
        className="w-200"
      />
      <h1 className="text-[35px] text-center ">
        Sakha brings education home. Vibrant learning spaces just steps away
        from every learner's home.
      </h1>
    </Element>
  );
};

export default Solution;
