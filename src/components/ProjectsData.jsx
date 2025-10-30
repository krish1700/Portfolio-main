import { useState } from 'react';
import { Github, ExternalLink, TrendingUp, Database, Brain, LineChart, ChevronDown, ChevronUp } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const ProjectsData = () => {
  const { projects } = resumeData;
  const [expandedProject, setExpandedProject] = useState(null); // First project expanded by default

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const categoryIcons = {
    'Machine Learning': Brain,
    'Data Engineering': Database,
    'Time Series Analysis': LineChart,
    'Natural Language Processing': Brain,
  };

  const categoryColors = {
    'Machine Learning': 'bg-purple-100 text-purple-700 border-purple-200',
    'Data Engineering': 'bg-cyan-100 text-cyan-700 border-cyan-200',
    'Time Series Analysis': 'bg-teal-100 text-teal-700 border-teal-200',
    'Natural Language Processing': 'bg-blue-100 text-blue-700 border-blue-200',
  };

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <span className="text-2xl">🚀</span>
              <span className="text-cyan-400 font-semibold">Portfolio Showcase</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Data Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world projects with measurable impact and production deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category] || TrendingUp;
            const categoryColor = categoryColors[project.category] || 'bg-gray-100 text-gray-700 border-gray-200';
            const isExpanded = expandedProject === index;
            
            return (
              <div
                key={project.id}
                className={`
                  relative group
                  bg-gradient-to-br from-gray-800 to-gray-900 
                  rounded-2xl overflow-hidden
                  border-2 transition-all duration-500
                  ${isExpanded ? 'border-green-500 shadow-2xl shadow-green-500/20' : 'border-gray-700 hover:border-green-500/50'}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Header - Always visible */}
                <div
                  className="p-6 cursor-pointer relative z-10"
                  onClick={() => toggleProject(index)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border ${categoryColor} shadow-lg`}>
                      <CategoryIcon className="w-4 h-4" />
                      <span className="text-sm font-semibold">{project.category}</span>
                    </div>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-300" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-300" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-green-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-gray-300 mb-3 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Expand button */}
                    <button className="flex-shrink-0 p-2 hover:bg-gray-700 rounded-lg transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-green-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </button>
                  </div>

                  {/* Metrics - Always visible */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="bg-gray-900 rounded-lg p-3 border border-gray-700">
                          <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-lg font-bold text-gray-100">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Expandable content */}
                <div
                  className={`
                    overflow-hidden transition-all duration-500
                    ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-gray-700/50 relative z-10">
                    {/* Full Description */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-3">
                        Project Details
                      </h4>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-3">
                        Key Highlights
                      </h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-gray-300 leading-relaxed">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 border border-gray-600 hover:border-green-500 text-gray-300 hover:text-green-400 rounded-lg text-sm font-medium transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default ProjectsData;
