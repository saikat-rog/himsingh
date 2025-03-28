const CourseLearning = () => {
  return (
    <div className="flex flex-col items-center w-full py-10 lg:py-20 bg-primary">
      {/* Heading */}
      <h3 className="bg-secondary p-2 my-5">Course Learning</h3>
      <p className="text-white">After completing my courses you will</p>
      <div className="lg:block w-5/7 my-10 space-y-10">
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
            img: "/assets/headset.svg",
            text: "Make an additional $1000 – $5000 per month working with International clients",
            align: "end",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:items-start" : "md:items-end"
            } justify-center items-center`}
          >
            <div className="flex flex-row rounded-xl shadow-lg sm:px-5 sm:py-5 w-full h-48 md:w-2/3 items-center space-x-5 bg-white">
              <img src={item.img} alt="" />
              <div className="text-[20px] font-bold">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CourseLearning;
