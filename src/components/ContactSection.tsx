import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../mock";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black mb-8">
          Let's Connect
        </h2>

        <p className="text-base md:text-lg text-black/60 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href={`mailto:${personalInfo.email}`}>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/80 transition-all duration-300 hover:scale-105"
            >
              <Mail size={18} className="mr-2" />
              Send Email
            </Button>
          </a>
          <a href={personalInfo.cvLink} download>
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
            >
              Download CV
            </Button>
          </a>
        </div>

        <div className="flex items-center justify-center gap-8">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/70 hover:text-black hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/70 hover:text-black hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          {/* <a
            href={personalInfo.social.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/70 hover:text-black hover:-translate-y-1 transition-all duration-300"
            aria-label="Portfolio"
          >
            <ExternalLink size={24} />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
