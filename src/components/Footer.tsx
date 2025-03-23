import { ArrowRightIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-20 w-full bg-gray text-bgWhite text-center py-4">
      <div className="flex flex-row justify-center m-20 space-x-4">
        {/* Left part */}
        <div className="w-2/3 flex flex-col items-start space-y-4">
          <div className="flex flex-col text-start space-y-4">
            <h1>We’d love to hear from you</h1>
            <p className="w-2/3">
              Have a question for us? Want to suggest a creator we should
              interview? Interested in partnering with us? Just want to say hi?
              We’ve got a form for that.
            </p>
          </div>
          <button className="flex flex-row justify-center items-center bg-white rounded-full p-2 space-x-3">
            <span className="text-primary bg-secondary px-2 py-2 rounded-full font-bold">
              <ArrowRightIcon className="w-6 h-6 text-primary font-bold" />
            </span>
            <span className="px-2 text-black">Get in touch</span>
          </button>
        </div>

        {/* Right part */}
        <div className="w-1/3 flex flex-row">
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
