import { Element } from 'react-scroll';

const Problem = () => {
  return (
    <Element 
      name="problem" 
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 relative group">
            <div className="absolute rounded-lg  opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative">
              <img 
                src="/section-1.png" 
                alt="problem-traffic" 
                className="w-full max-w-[400px] rounded-lg  transform transition duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-[45px] font-bold leading-tight text-gray-900 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B4FD8] to-[#5B42D8]">
                Learning shouldn't be
              </span>
              <br /> a long commute.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Every child deserves great education—
              <span className="font-semibold">close to home, within reach.</span>
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Problem;