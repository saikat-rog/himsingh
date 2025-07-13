const Introduce = () => {
  return (
    <div className="flex flex-col items-center text-center py-10 bg-primary text-white">
      <h3 className="bg-secondary px-3 py-1 my-5 text-black">Introducing</h3>
      <h1 className="text-2xl font-bold mb-4">
        LANCRR: a Zero to Pro Freelancing Blueprint
      </h1>

      <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-md max-w-4xl mx-auto text-left space-y-4 mb-10">
        <h2 className="text-xl font-bold">
          A complete, no-fluff course to help you land international clients
        </h2>
        <p>Even if you have no degree, no experience, and just a phone.</p>
        <p className="font-semibold">
          The most action-based program for Indian freelancers who want to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Find and close international clients</li>
          <li>Earn ₹1–5 Lakh/month consistently</li>
          <li>Use just their phone to start</li>
        </ul>
        <p>
          Everything taught step-by-step, in simple language (mostly Hindi),
          with full support.
        </p>
      </div>

      <img src="/assets/intro.png" alt="intro" className="p-10" />
      <img src="/assets/topics.png" alt="topics" className="p-10" />
    </div>
  );
};

export default Introduce;
