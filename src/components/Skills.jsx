import { Code, Database, Layout, Wrench } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Skills = () => {
  const { skills } = resumeData;

  const iconMap = {
    'Languages': Code,
    'Frontend': Layout,
    'Backend': Code,
    'Database': Database,
    'Tools & Others': Wrench,
  };

  return (
    <section id="skills" className="section-container bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => {
            const Icon = iconMap[category] || Code;
            return (
              <div
                key={category}
                className="card hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-indigo-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
