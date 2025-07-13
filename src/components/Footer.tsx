import CTAButton from "@/utils/CTAButton";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-20 w-full bg-gray text-bgWhite text-center py-4">
      <div className="flex w-full flex-col lg:flex-row justify-between p-10 lg:p-20 space-y-20 lg:space-x-4">
        {/* Left part */}
        <div className="w-2xl flex flex-col items-start space-y-10">
          <div className="flex flex-col text-start space-y-4">
            <h1>Still Have Questions?</h1>
            <p className="w-2/3">
              Can&apos;t find the answer? "Have a question? Want to partner with
              us? Just want to say hi ? Reach out!
            </p>
          </div>

          {/* Button */}
          <CTAButton text="Say Hi 👋" />
        </div>

        {/* Right part */}
        <div className="max-w-xl flex flex-row">
          {/* Social */}
          <div className="w-1/2 flex flex-col">
            <ul className="space-y-4">
              <li>
                <div className="bg-white/10 backdrop-blur-md flex rounded-full w-10 h-10 items-center p-1">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/09/11/18/21/youtube-6616310_1280.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="bg-white/10 backdrop-blur-md flex rounded-full w-10 h-10 items-center p-2.5">
                  <img
                    src="https://cdn.pixabay.com/photo/2022/04/01/05/40/app-7104075_1280.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="bg-white/10 backdrop-blur-md flex rounded-full w-10 h-10 items-center p-2.5">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/23/22/59/linked-in-2674741_1280.png"
                    alt=""
                  />
                </div>
              </li>
            </ul>
          </div>

          {/* Options */}
          <div className="w-xl flex flex-col text-start justify-between space-y-5">
            <ul className="space-y-3">
              <li>
                <Link to="/about">📘 About Lancrr</Link>
              </li>
              <li>
                <Link to="/why-join-lancrr">💼 Why join Lancrr</Link>
              </li>
              <li>
                <a href="#meetyourinstructor">🧑‍🏫 Meet Your Instructor(s)</a>
              </li>
              <li>
                <Link to="">📩 Get Support</Link>
              </li>
              <li>
                <Link to="">🧠 Student Results & Reviews</Link>
              </li>
            </ul>

            {/* Copyright Text */}
            <p style={{ color: "gray", fontWeight: 100 }}>
              © {new Date().getFullYear()} Lancrr. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <img src="\assets\logofooter.svg" alt="" className="w-full" />
      </div>
    </div>
  );
};
export default Footer;
