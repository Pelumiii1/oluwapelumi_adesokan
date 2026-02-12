import { Briefcase, MapPin } from "lucide-react";
import { experience, personalInfo } from "../mock";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black mb-16 text-center">
          About
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-start gap-3">
              <Briefcase size={20} className="text-black/50 mt-1" />
              <div>
                <p className="text-sm text-black/50 mb-1">Experience</p>
                <p className="text-base font-light text-black">
                  {experience.years} years
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-black/50 mt-1" />
              <div>
                <p className="text-sm text-black/50 mb-1">Current</p>
                <p className="text-base font-light text-black">
                  {experience.current}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-black/50 mb-2">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {experience.focus.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs border border-black/10 text-black/70 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-base md:text-lg font-light text-black/70 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
