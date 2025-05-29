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
    <div className="flex  flex-col-reverse md:flex-row items-start md:items-center px-6 md:px-16 py-10 md:py-4 h-120 text-white">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left mt-10 md:mt-0">
        <h2 className="font-bold text-2xl md:text-4xl mb-4">
          Hello! I'm Deepak Chauhan
        </h2>
        <p className="font-semibold text-xl md:text-2xl">
          I like{" "}
          <span className="text-slate-900 bg-white px-3 py-1 rounded-2xl transition-all duration-300">
            {words[index]}.
          </span>
        </p>
        <div className="flex gap-6 text-3xl mt-8">
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
      <div className="w-110 md:w-1/2 h-90 flex justify-center md:justify-center">
        <img
          className="h-60 md:h-80 rounded-full border-4 border-white shadow-lg object-cove "
          src="./images/deepak_pic.jpg"
          alt="Deepak Chauhan"
        />
      </div>
      s
    </div>
  );
}

export default Banner;
