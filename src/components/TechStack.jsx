import { useState } from 'react';

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    // Programming Languages
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500', category: 'Language' },
    { name: 'SQL', icon: '🗄️', color: 'from-blue-500 to-blue-700', category: 'Language' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-400 to-blue-600', category: 'Language' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-yellow-600', category: 'Language' },
    { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-500', category: 'Language' },
    { name: 'Bash', icon: '💻', color: 'from-gray-600 to-gray-800', category: 'Scripting' },
    
    // Data Engineering & Big Data
    { name: 'Apache Airflow', icon: '🌊', color: 'from-cyan-400 to-blue-500', category: 'Workflow' },
    { name: 'Apache Kafka', icon: '📨', color: 'from-gray-700 to-gray-900', category: 'Streaming' },
    { name: 'PySpark', icon: '⚡', color: 'from-orange-500 to-red-500', category: 'Big Data' },
    { name: 'Databricks', icon: '🧱', color: 'from-red-600 to-orange-600', category: 'Platform' },
    
    // Cloud Platforms
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500', category: 'Cloud' },
    { name: 'GCP', icon: '☁️', color: 'from-red-500 to-yellow-500', category: 'Cloud' },
    { name: 'Azure', icon: '☁️', color: 'from-blue-400 to-blue-600', category: 'Cloud' },
    { name: 'Snowflake', icon: '❄️', color: 'from-blue-300 to-cyan-400', category: 'Data Warehouse' },
    
    // Databases
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-blue-800', category: 'Database' },
    { name: 'MySQL', icon: '🐬', color: 'from-blue-500 to-blue-700', category: 'Database' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700', category: 'Database' },
    
    // Analytics & Visualization
    { name: 'Power BI', icon: '📊', color: 'from-yellow-400 to-orange-500', category: 'Analytics' },
    { name: 'Tableau', icon: '📈', color: 'from-blue-400 to-blue-600', category: 'Analytics' },
    { name: 'Excel', icon: '📗', color: 'from-green-500 to-green-700', category: 'Analytics' },
    
    // DevOps & Tools
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600', category: 'DevOps' },
    { name: 'Kubernetes', icon: '☸️', color: 'from-blue-500 to-purple-500', category: 'Orchestration' },
    { name: 'Git', icon: '🔀', color: 'from-orange-500 to-red-500', category: 'Version Control' },
    { name: 'Linux', icon: '🐧', color: 'from-yellow-400 to-orange-500', category: 'OS' },
    
    // Frameworks
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500', category: 'Framework' },
    { name: 'FastAPI', icon: '⚡', color: 'from-teal-400 to-teal-600', category: 'Framework' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full">
              <span className="text-2xl">🛠️</span>
              <span className="text-teal-400 font-semibold">Tech Arsenal</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I work with daily to build scalable data solutions
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`
                relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-xl p-4 
                transform transition-all duration-300 cursor-pointer overflow-hidden
                hover:scale-110 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20
                ${hoveredTech === tech.name ? 'scale-110 border-green-500 shadow-2xl shadow-green-500/20' : ''}
              `}>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-2 text-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {tech.icon}
                  </div>
                  <div className="text-xs text-center text-gray-400 group-hover:text-green-400 transition-colors font-semibold">
                    {tech.name}
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>

              {/* Tooltip */}
              {hoveredTech === tech.name && (
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
                  <div className={`bg-gradient-to-r ${tech.color} text-white px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap shadow-2xl border border-white/20`}>
                    {tech.category}
                  </div>
                  <div className={`w-3 h-3 bg-gradient-to-r ${tech.color} transform rotate-45 mx-auto -mt-1.5`}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
