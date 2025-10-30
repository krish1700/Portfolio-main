import { Code, Database, Cloud, Wrench, BarChart3, Cpu, Layers, GitBranch } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const SkillsData = () => {
  const { skills } = resumeData;

  const iconMap = {
    'Programming Languages': Code,
    'Data Engineering & Big Data': Database,
    'Cloud Platforms': Cloud,
    'Databases & Storage': Database,
    'Analytics & Visualization': BarChart3,
    'DevOps & Tools': Wrench,
    'Development & Frameworks': Layers,
    'Core Concepts': Cpu,
  };

  const colorMap = {
    'Programming Languages': 'from-purple-500 to-purple-600',
    'Data Engineering & Big Data': 'from-cyan-500 to-cyan-600',
    'Cloud Platforms': 'from-blue-500 to-blue-600',
    'Databases & Storage': 'from-green-500 to-green-600',
    'Analytics & Visualization': 'from-teal-500 to-teal-600',
    'DevOps & Tools': 'from-orange-500 to-orange-600',
    'Development & Frameworks': 'from-pink-500 to-pink-600',
    'Core Concepts': 'from-indigo-500 to-indigo-600',
  };

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <Code className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Technical Expertise</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficiency levels based on hands-on experience and project work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => {
            const Icon = iconMap[category] || Code;
            const gradient = colorMap[category] || 'from-gray-500 to-gray-600';
            
            return (
              <div
                key={category}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-gray-700 hover:border-green-500/50 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`relative p-3 bg-gradient-to-br ${gradient} rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-md opacity-50`}></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-green-400 transition-colors">
                      {category}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {items.map((skill, idx) => (
                      <div key={idx} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-200 font-medium group-hover/skill:text-green-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-bold px-2 py-0.5 rounded bg-gradient-to-r ${gradient} text-white`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-600">
                          <div
                            className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 ease-out relative`}
                            style={{ 
                              width: `${skill.level}%`,
                              transitionDelay: `${(index * 0.1) + (idx * 0.05)}s`
                            }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsData;
