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
              π»ν¨ν€μ§ λμμΈ μ€ννΈμ μΈν΄μΌλ‘ μ»€λ¦¬μ΄λ₯Ό μμνμΌλ©°
              <br />
              π¬λ₯μν μμ΄ μ­λμΌλ‘ μλ¬Έμ νμ©, λ¦¬μμΉμ κ°μ μ΄ μμ΅λλ€.
              <br />
              πββοΈμ μ°μ μ΄λμ μ’μν΄ μμ¬μ²μ μμ£Ό λλλ€.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
