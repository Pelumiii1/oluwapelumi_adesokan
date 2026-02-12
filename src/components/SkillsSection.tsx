import { skills } from "../mock";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black mb-16 text-center">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-200 hover:border-black/20 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-light text-black mb-6 tracking-tight">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 text-xs text-black/70 bg-gray-50 hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
