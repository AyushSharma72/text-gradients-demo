import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
const Socials = () => {
  return (
    <div className="fixed top-[50%] bg-white  rounded-md p-1 flex flex-col items-center gap-2">
      <a href="https://github.com/AyushSharma72" target="_blank">
        <FaGithubSquare className="cursor-pointer text-2xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/ayush-sharma-a155a8267/"
        target="_blank"
      >
        {" "}
        <GrLinkedin className="cursor-pointer text-xl text-blue-600" />
      </a>{" "}
    </div>
  );
};

export default Socials;
