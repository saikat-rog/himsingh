import { ArrowRightIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-20 w-full bg-gray text-bgWhite text-center py-4">
      <div className="flex flex-col lg:flex-row justify-center p-10 lg:p-20 space-y-20 lg:space-x-4">
        
        {/* Left part */}
        <div className="lg:w-2/3 flex flex-col items-start space-y-10">
          <div className="flex flex-col text-start space-y-4">
            <h1>We’d love to hear from you</h1>
            <p className="w-2/3">
              Have a question for us? Want to suggest a creator we should
              interview? Interested in partnering with us? Just want to say hi?
              We’ve got a form for that.
            </p>
          </div>

          {/* Button */}
          <button className="flex flex-row justify-center items-center bg-white rounded-full p-1.5 lg:p-2 mb-5">
            <span className="text-primary bg-secondary px-2 py-2 rounded-full font-bold">
              <ArrowRightIcon className="w-5 lg:w-6 h-5 lg:h-6 text-primary font-bold" />
            </span>
            <span className="px-3 lg:px-4 text-gray">Enroll Now</span>
          </button>
        </div>

        {/* Right part */}
        <div className="lg:w-1/3 flex flex-row">
          {/* Social */}
          <div className="w-1/2 flex flex-col">
            <ul className="space-y-4">
              <li>
                <img src="src\assets\youtube.png" alt="" />
              </li>
              <li>
                <img src="src\assets\spotify.png" alt="" />
              </li>
              <li>
                <img src="src\assets\instagram.png" alt="" />
              </li>
              <li>
                <img src="src\assets\twitter.png" alt="" />
              </li>
            </ul>
          </div>

          {/* Options */}
          <div className="w-1/2 flex flex-col text-start justify-between space-y-4">
            <ul>
              <li>The Colin & Samir Show</li>
              <li>Creator Support</li>
              <li>Creator Startup</li>
              <li>Contact</li>
            </ul>

            {/* Copyright Text */}
            <p style={{ color: "gray", fontWeight: 100 }}>
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <img src="src\assets\HimSingh.png" alt="" className="w-full" />
      </div>
    </div>
  );
};
export default Footer;
