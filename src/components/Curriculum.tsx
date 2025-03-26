import Modules from "./Modules";

function Curriculum() {
  return (
    <div className="flex flex-col items-center justify-center bg-primary py-5 lg:py-10">
      {/* Header */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-secondary">Course Curriculum</h3>
        <h1 className="text-white">What You'll Learn</h1>
      </div>

      <Modules />
    </div>
  );
}

export default Curriculum;
