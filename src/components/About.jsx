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
          <div className="sm:text-right text-4xl font-bold pb-4">
            <p className="pb-5">Hi, my name is Yeongkyeong Oh.</p>
          </div>
          <div>
            <p className="mt-2.5">
              💻패키징 디자인 스타트업 인턴으로 커리어를 시작했으며
              <br />
              💬능숙한 영어 역량으로 영문서 활용, 리서치에 강점이 있습니다.
              <br />
              🏃‍♀️유산소 운동을 좋아해 양재천을 자주 뜁니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
