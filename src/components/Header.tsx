import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-xl font-light tracking-tight text-black hover:opacity-70 transition-opacity duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Oluwapelumi
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-black/70 hover:text-black hover:-translate-y-0.5 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            <a href="/path-to-your-cv.pdf" download className="ml-4">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                Download CV
              </Button>
            </a>
          </nav>

          <button
            className="md:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm text-black/70 hover:text-black transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
              <a href="/path-to-your-cv.pdf" download className="mt-2">
                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  Download CV
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
