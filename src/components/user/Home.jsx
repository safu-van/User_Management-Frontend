import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-5xl text-[#556B2F]">
        Welcome, <strong>Safuvan</strong>
      </span>
      <button className="w-40 h-10 bg-white rounded-md text-[#556B2F] border-2 border-[#556B2F] hover:bg-[#556B2F] hover:text-white">
        View Profile
      </button>
    </div>
  );
};

export default Home;
