import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, my name is Yeongkyeong Oh.</p>
          </div>
          <div>
            <p>
              I love building new things, and have spent the last several years
              working and learning in various fields. When I'm not coding, I
              enjoy jogging and traveling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
