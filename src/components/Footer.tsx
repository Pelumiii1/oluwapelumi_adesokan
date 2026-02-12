import { personalInfo } from "../mock";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-light text-black/90">
              {personalInfo.name}
            </p>
            <p className="text-xs text-black/50 mt-1">{personalInfo.title}</p>
          </div>
          {/* 
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/70 hover:text-black hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/70 hover:text-black hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.social.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/70 hover:text-black hover:-translate-y-1 transition-all duration-300"
              aria-label="Portfolio"
            >
              <ExternalLink size={20} />
            </a>
          </div> */}

          <div className="text-center md:text-right">
            <p className="text-xs text-black/50">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
