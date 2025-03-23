const MoneyBackGurantee = () => {
    return (
      <div className="flex flex-col justify-center items-center h-full bg-bgWhite px-6">
        <div className="flex flex-col md:flex-row text-center md:text-left justify-center items-center space-y-6 md:space-y-0 md:space-x-10 py-16 w-full max-w-lg md:max-w-2xl lg:max-w-4xl">
          <img
            src="src/assets/moneybackgurantee.png"
            alt="Money Back Guarantee"
            className="w-24 md:w-32 lg:w-40"
          />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            If you don't find any value in the course content, I will return your
            money.
          </h3>
        </div>
      </div>
    );
  };
  
  export default MoneyBackGurantee;
  