import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "../mock";

const HeroSection = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        const scrollY = window.scrollY;
        circleRef.current.style.transform = `rotate(${scrollY * 0.1}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full text-center">
        <div className="mb-12 flex justify-center">
          <div className="relative flex items-center justify-center">
            <div
              ref={circleRef}
              className="absolute h-36 w-36 md:h-44 md:w-44 rounded-full border-2 border-black/10 transition-transform duration-100 ease-out"
              style={{ transformOrigin: "center" }}
            >
              <div className="absolute inset-4 rounded-full border border-black/5" />
              <div className="absolute inset-8 rounded-full border border-black/5" />
            </div>
            <img
              src="/avatar.svg"
              alt={`${personalInfo.name} avatar`}
              className="relative h-24 w-24 md:h-28 md:w-28 rounded-full border border-black/10 bg-white shadow-lg"
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-6 animate-fade-in">
          {personalInfo.name}
        </h1>

        <p className="text-xl md:text-2xl font-light text-black/60 mb-4 animate-fade-in-delay">
          {personalInfo.title}
        </p>

        <p className="text-sm md:text-base text-black/50 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
          {personalInfo.tagline}
        </p>

        <button
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors duration-300 animate-bounce-slow"
          aria-label="Scroll to about section"
        >
          <span>Explore</span>
          <ArrowDown size={16} />
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
