import "/src/App.css";
import Header_class from "./header";
import Banner from "./Banner";
function MainPage() {
  return (
    <div className="relative bg-[#1e1e1e] min-h-screen text-white overflow-hidden">
      {/* Local pattern with stronger visibility */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-30 z-0 bg-repeat bg-size-50"></div>
      <div className="relative z-10">
        <Header_class/>
        <Banner/>
      </div>
    </div>
  );
}
export default MainPage;
