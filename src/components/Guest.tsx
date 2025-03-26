const Guest = () => {
  return (
    <div className="flex flex-col items-center space-y-5 py-20 bg-[url('.\assets\bg-grid.png')] bg-cover bg-center h-full bg-primary">
      {/* Heading */}
      <h1 className="text-white">Guest Instructors</h1>
      <p className="w-4/5 lg:w-1/3 text-center text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        perferendis doloremque? Quis odit, nemo assumenda cupiditate consectetur
        perferendis ea consequatur culpa possimus sit autem iste facere eum
        sequi porro consequuntur?
      </p>
      <img src="\assets\guest.png" alt="" />
    </div>
  );
};
export default Guest;
