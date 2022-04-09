import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Welcome to</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">
          Yeongkyeong's
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#ced4ebd2]">
          Portfolio
        </h2>
        {/* <p className="text-[#ced4ebd2] py-4 max-w-[700px]">
          I am a frontend developer looking for new job opportunities.
          Currently, I'm focused on new project applying React, Redux and style
          libraries.
        </p> */}
        <p className="text-[#ced4ebd2] py-4 max-w-[700px]">
          안녕하세요! 새로운 지식을 배우고 적용하며 즐거움을 찾는,
          <br />
          주니어 프론트엔드 개발자 오영경입니다.
        </p>
        <div>
          <Link to="project" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-pink-600 hover:border-pink-600">
              View Project
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
