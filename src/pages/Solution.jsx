import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Element } from "react-scroll";

const Solution = () => {
  return (
    <Element
      name="solution"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          <div className=" relative group">
            <div className="relative  rounded-lg mix-blend-multiply p-1 transform transition duration-500 group-hover:scale-[1.01]">
              <DotLottieReact
                src="https://lottie.host/c45a74ae-a722-46ce-acb1-5a321fbdb90d/ND1tUuALH8.lottie"
                loop
                autoplay
                className="w-full max-w-[700px] mx-auto "
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-[45px] font-bold leading-tight text-gray-900 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5B42D8] to-[#3B4FD8]">
                Sakha brings education
              </span>
              <br /> home.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Vibrant learning spaces
              <span className="font-semibold">
                {" "}
                just steps away from every learner's home.
              </span>
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Solution;
