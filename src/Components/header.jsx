import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can also use any icon library like react-icons

function Header_class() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["About", "Projects", "Skills", "Contact"];

  return (
    <header className="flex items-center justify-between px-6 py-4 sticky top-0 z-50  text-white ">
      <div className="text-2xl font-bold">Deepak Chauhan</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-sd font-semibold">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative px-4 py-2 transition-all duration-100 ease-in-out 
              hover:text-white overflow-hidden rounded-2xl group"
          >
            <span className="absolute inset-0 bg-slate-600 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-center z-[-1] rounded-2xl"></span>
            {item}
          </a>
        ))}
        
      </nav>
        <div >
          <a 
          href="/resume.pdf"
          className="btn-primary text-lg font-semibold rounded-2xl p-2 px-3 hover:bg-slate-600 hover:text-white"
        >
          Resume
        </a>
        </div>
      {/* Hamburger Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-6 w-52 bg-[#2c2c2c] shadow-lg rounded-xl flex flex-col gap-4 p-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:bg-slate-700 px-3 py-2 rounded-md transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="bg-slate-700 text-white text-center px-3 py-2 rounded-md hover:bg-slate-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default Header_class;
