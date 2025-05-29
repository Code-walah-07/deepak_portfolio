import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

function Banner() {
  const words = ["Coding", "Web Developing", "Frontend Development", "Cricket"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center px-8 justify-center md:px-16  min-h-screen  text-white">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start md:items-start justify-center text-center md:text-left mb-30 md:mb-0">
        <h2 className="font-bold text-3xl md:text-4xl mb-4">
          Hello! I'm Deepak Chauhan
        </h2>
        <p className="font-semibold text-xl md:text-2xl">
          I like{" "}
          <span className="text-slate-900 bg-white px-3 py-1 rounded-2xl transition-all duration-300">
            {words[index]}.
          </span>
        </p>
        <div className="flex gap-6 text-3xl mt-8 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/deepak-chauhan-69426622b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-blue-500 transition"
            />
          </a>
          <a
            href="https://github.com/Code-walah-07"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:text-gray-400 transition"
            />
          </a>
          <a
            href="https://www.hackerrank.com/profile/dchauhan2159"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faHackerrank}
              className="hover:text-green-500 transition"
            />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center pb-20">
        <img
          className="h-60 md:h-80 rounded-full border-4 border-white shadow-lg object-cover"
          src="./images/deepak_pic.jpg"
          alt="Deepak Chauhan"
        />
      </div>
    </div>
  );
}

export default Banner;
