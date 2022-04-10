import React from "react";
import WorkImg from "../assets/workImg.png";
import WorkImg2 from "../assets/workImg2.png";
import WorkImg3 from "../assets/workImg3.png";

function Project() {
  return (
    <div
      name="project"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Project
          </p>
          <p className="py-6">참여했던 팀/개인 프로젝트 목록입니다.</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* project #1 */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto
          content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Vue.js shopping mall
              </span>
              <div className="m-2">#브랜드신발 쇼핑몰 #팀프로젝트</div>
              <div className="pt-8 text-center">
                <a
                  href="https://sinbalshop.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Yeongkyeong12/Team_mini"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project #2 */}
          <div
            style={{ backgroundImage: `url(${WorkImg2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto
          content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React.js Challenge App
              </span>
              <div className="m-2">#친환경 챌린지 어플 #팀프로젝트</div>
              <div className="pt-10 text-center">
                <a href="http://15.164.98.50/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Green-Challenge/Green-Challenge-Client"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project #3 */}
          <div
            style={{ backgroundImage: `url(${WorkImg3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto
          content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Vue.js Todo App
              </span>
              <div className="m-2">#투두리스트 #개인프로젝트</div>
              <div className="pt-8 text-center">
                <a
                  href="https://melodious-pithivier-94556a.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Yeongkyeong12/vue-todolist"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
