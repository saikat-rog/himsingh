const Guest = () => {
  return (
    <div className="flex flex-col items-center space-y-5 py-20 bg-[url('.\assets\bg-grid.png')] bg-cover bg-center h-full bg-primary">
      {/* Heading */}
      <h1 className="text-white">Bonus Sessions From 7+ Experts</h1>
      <p className="w-4/5 lg:w-1/3 text-center text-white">
        Learn from top agency owners, freelancers, and digital entrepreneurs who started just like you.
      </p>
      <img src="\assets\guest.png" alt="" />
    </div>
  );
};
export default Guest;
