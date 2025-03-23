const CourseLearning = () => {
  return (
    <div className="flex flex-col items-center w-full py-20 bg-bgWhite">
      {/* Heading */}
      <div className="bg-secondary p-2 font-bold my-5 text-[25px]">
        Course Learning
      </div>
      <p style={{ color: "black" }}>After completing my courses you will</p>

      <div className="w-5/7 my-10 space-y-10">
        {/* each row [pay]*/}
        <div className="flex flex-col items-start">
          <div className="flex flex-row rounded-xl shadow-sm px-7 py-7 w-2/3 items-center space-x-5 bg-white">
            <img src="src\assets\pay.png" alt="" />
            <div className="text-[20px] font-bold">
              Make an additional $1000 – $5000 per month working with
              International clients
            </div>
          </div>
        </div>
        {/* each row [scholar]*/}
        <div className="flex flex-col items-end">
          <div className="flex flex-row rounded-xl shadow-sm px-7 py-7 w-2/3 items-center space-x-5 bg-white">
            <img src="src\assets\scholar.png" alt="" />
            <div className="text-[20px] font-bold">
              Make an additional $1000 – $5000 per month working with
              International clients
            </div>
          </div>
        </div>
        {/* each row [headset]*/}
        <div className="flex flex-col items-start">
          <div className="flex flex-row rounded-xl shadow-sm px-7 py-7 w-2/3 items-center space-x-5 bg-white">
            <img src="src\assets\headset.png" alt="" />
            <div className="text-[20px] font-bold">
              Make an additional $1000 – $5000 per month working with
              International clients
            </div>
          </div>
        </div>
        {/* each row [suitcase]*/}
        <div className="flex flex-col items-end">
          <div className="flex flex-row rounded-xl shadow-sm px-7 py-7 w-2/3 items-center space-x-5 bg-white">
            <img src="src\assets\suitcase.png" alt="" />
            <div className="text-[20px] font-bold">
              Make an additional $1000 – $5000 per month working with
              International clients
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseLearning;
