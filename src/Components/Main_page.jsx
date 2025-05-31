import "/src/App.css";
import { useEffect } from "react";
import Header_class from "./header";
import Banner from "./Banner";
import About from "./About";
import AOS from "aos";
import "aos/dist/aos.css";

function MainPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // animation should happen only once
    });
  }, []);

  return (
    <div className="relative bg-[#1e1e1e] min-h-screen text-white overflow-hidden">
      {/* Local pattern with stronger visibility */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-30 z-0 bg-repeat bg-size-50"></div>
      <div className="relative z-10">
        <Header_class />
        <Banner />
        <About />
      </div>
    </div>
  );
}
export default MainPage;
