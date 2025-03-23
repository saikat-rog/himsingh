const CourseLearning = () => {
  return (
    <div className="flex flex-col items-center w-full py-10 lg:py-20 bg-bgWhite">
      {/* Heading */}
      <h3 className="bg-secondary p-2 my-5">
        Course Learning
      </h3>
      <p style={{ color: "black" }}>After completing my courses you will</p>

      <div className="hidden lg:block w-5/7 my-10 space-y-10">
        {/* each row [pay]*/}
        <div className="flex flex-col items-start">
          <div className="flex flex-row rounded-xl shadow-lg px-7 py-7 w-2/3 items-center space-x-5 bg-white">
            <img src="src\assets\pay.png" alt="" />
            <div className="text-[20px] font-bold">
              Make an additional $1000 – $5000 per month working with
              International clients
            </div>
          </div>
        </div>
        {/* each row [scholar]*/}
        <div className="flex flex-col items-end">
          <div className="flex flex-row rounded-xl shadow-lg px-7 py-7 w-2/3 items-center space-x-5 bg-white">
            <img src="src\assets\scholar.png" alt="" />
            <div className="text-[20px] font-bold">
              Make an additional $1000 – $5000 per month working with
              International clients
            </div>
          </div>
        </div>
        {/* each row [headset]*/}
        <div className="flex flex-col items-start">
          <div className="flex flex-row rounded-xl shadow-lg px-7 py-7 w-2/3 items-center space-x-5 bg-white">
            <img src="src\assets\headset.png" alt="" />
            <div className="text-[20px] font-bold">
              Make an additional $1000 – $5000 per month working with
              International clients
            </div>
          </div>
        </div>
        {/* each row [suitcase]*/}
        <div className="flex flex-col items-end">
          <div className="flex flex-row rounded-xl shadow-lg px-7 py-7 w-2/3 items-center space-x-5 bg-white">
            <img src="src\assets\suitcase.png" alt="" />
            <div className="text-[20px] font-bold">
              Make an additional $1000 – $5000 per month working with
              International clients
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden w-full px-5 max-w-lg md:max-w-2xl lg:max-w-4xl my-10 space-y-8">
        {[
          { img: "pay.png", text: "Earn an additional $1000 – $5000 per month working with International clients" },
          { img: "scholar.png", text: "Master high-income freelancing skills that clients love" },
          { img: "headset.png", text: "Work remotely from anywhere in the world with global clients" },
          { img: "suitcase.png", text: "Build a sustainable freelancing career and grow your business" },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:justify-between ${
              index % 2 === 0 ? "md:items-start" : "md:items-end"
            }`}
          >
            <div className="flex flex-row rounded-xl shadow-md px-5 md:px-7 py-6 w-full md:w-3/4 lg:w-2/3 items-center space-x-4 bg-white">
              <img src={`src/assets/${item.img}`} alt="" className="w-10 h-10 md:w-12 md:h-12" />
              <div className="text-lg md:text-lg font-semibold">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CourseLearning;
