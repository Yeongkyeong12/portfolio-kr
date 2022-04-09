import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form
        method="POST"
        action="https://getform.io/f/7efb74f7-2dde-4c3f-a36d-639315aa4137"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            양식을 작성해주시거나, 이메일로 연락 부탁드립니다:)
            <br />
            <div style={{ display: "flex" }}>
              <svg
                class="h-5 w-5 text-white mr-0.3 pt-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p style={{ paddingBottom: "px" }}>ohkyeong1995@gmail.com</p>
            </div>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="7"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 rounded-md hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's work together!
        </button>
      </form>
    </div>
  );
}

export default Contact;
