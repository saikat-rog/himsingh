const CourseLearning = () => {
  return (
    <div className="flex flex-col items-center w-full py-10 lg:py-20 bg-primary">
      {/* Heading */}
      <h3 className="bg-secondary p-2 my-5">Course Learning</h3>
      <p>After completing my courses you will</p>
      <div className="hidden lg:block w-5/7 my-10 space-y-10">
        {[
          {
            img: "/assets/pay.svg",
            text: "Make an additional $1000 – $5000 per month working with International clients",
            align: "start",
          },
          {
            img: "/assets/scholar.svg",
            text: "Make an additional $1000 – $5000 per month working with International clients",
            align: "end",
          },
          {
            img: "/assets/headset.svg",
            text: "Make an additional $1000 – $5000 per month working with International clients",
            align: "start",
          },
          {
            img: "/assets/headset.svg",
            text: "Make an additional $1000 – $5000 per month working with International clients",
            align: "start",
          },
          {
            img: "/assets/headset.svg",
            text: "Make an additional $1000 – $5000 per month working with International clients",
            align: "start",
          },
          {
            img: "/assets/suitcase.svg",
            text: "Make an additional $1000 – $5000 per month working with International clients",
            align: "end",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:items-start" : "md:items-end"
            }`}
          >
            <div className="flex flex-row rounded-xl shadow-lg px-7 py-7 w-2/3 items-center space-x-5 bg-white">
              <img src={item.img} alt="" />
              <div className="text-[20px] font-bold">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="block lg:hidden w-full px-5 max-w-lg md:max-w-2xl lg:max-w-4xl my-10 space-y-8">
        {[
          {
            img: "pay.svg",
            text: "Earn an additional $1000 – $5000 per month working with International clients",
          },
          {
            img: "scholar.svg",
            text: "Master high-income freelancing skills that clients love",
          },
          {
            img: "headset.svg",
            text: "Work remotely from anywhere in the world with global clients",
          },
          {
            img: "headset.svg",
            text: "Work remotely from anywhere in the world with global clients",
          },
          {
            img: "headset.svg",
            text: "Work remotely from anywhere in the world with global clients",
          },
          {
            img: "suitcase.svg",
            text: "Build a sustainable freelancing career and grow your business",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:justify-between ${
              index % 2 === 0 ? "md:items-start" : "md:items-end"
            }`}
          >
            <div className="flex flex-row rounded-xl shadow-md px-5 md:px-7 py-6 w-full md:w-3/4 lg:w-2/3 items-center space-x-4 bg-white">
              <img
                src={`/assets/${item.img}`}
                alt=""
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <div className="text-lg md:text-lg font-semibold">
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CourseLearning;
