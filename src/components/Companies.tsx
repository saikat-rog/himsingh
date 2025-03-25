const Companies = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full pt-70 md:pt-10 pb-20 lg:pt-50 lg:pb-20">
        <h3 className="bg-secondary px-3 py-1 mb-5">Companies</h3>
        <h1>That trust Me with their Growth</h1>
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20 w-full pt-10">
          <img src="/assets/brandlogos/hostinger.png" alt="" className="h-15 lg:h-25" />
          <img src="/assets/brandlogos/archway.png" alt="" className="h-15 lg:h-25" />
          <img src="/assets/brandlogos/elementor.png" alt="" className="h-15 lg:h-25" />
          <img src="/assets/brandlogos/reachinbox.png" alt="" className="h-15 lg:h-25 rounded-xl" />
          <img src="/assets/brandlogos/filmora.png" alt="" className="h-15 lg:h-25" />
        </div>
      </div>
    </div>
  );
};
export default Companies;
