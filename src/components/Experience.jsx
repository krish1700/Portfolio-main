import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, TrendingUp, Zap } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  const { experience } = resumeData;
  const [expandedJob, setExpandedJob] = useState(null); // All jobs collapsed by default

  const toggleJob = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <section id="experience" className="section-container bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <Briefcase className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Professional Journey</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable data solutions and driving measurable business impact through innovative engineering
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((job, index) => {
            const isExpanded = expandedJob === index;
            const isRecent = index === 0;

            return (
              <div
                key={job.id}
                className={`
                  relative group
                  bg-gradient-to-br from-gray-800 to-gray-900 
                  rounded-2xl overflow-hidden
                  border-2 transition-all duration-500
                  ${isExpanded ? 'border-green-500 shadow-2xl shadow-green-500/20' : 'border-gray-700 hover:border-green-500/50'}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >

                {/* Header - Always visible */}
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleJob(index)}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`
                      relative flex-shrink-0
                      p-4 rounded-xl
                      bg-gradient-to-br from-green-500 to-teal-500
                      shadow-lg transform transition-all duration-300
                      ${isExpanded ? 'scale-110 rotate-6' : 'group-hover:scale-105'}
                    `}>
                      <Briefcase className="w-7 h-7 text-white" />
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl blur-lg opacity-50"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-100 mb-1 group-hover:text-green-400 transition-colors">
                            {job.position}
                          </h3>
                          <p className="text-lg font-semibold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                            {job.company}
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

                      {/* Date and location */}
                      <div className="flex flex-wrap gap-4 mt-3 text-sm">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-4 h-4 mr-1.5" />
                          <span>{job.startDate} - {job.endDate}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="w-4 h-4 mr-1.5" />
                          <span>{job.location}</span>
                        </div>
                      </div>

                      {/* Metrics - Always visible */}
                      {job.metrics && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {Object.entries(job.metrics).map(([key, value], idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-1 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg"
                            >
                              <TrendingUp className="w-3 h-3 text-green-400" />
                              <span className="text-xs font-semibold text-green-400">{value}</span>
                              <span className="text-xs text-gray-400">{key}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable content */}
                <div
                  className={`
                    overflow-hidden transition-all duration-500
                    ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-gray-700/50">
                    {/* Description */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {job.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-300 leading-relaxed"
                            style={{ animationDelay: `${idx * 0.05}s` }}
                          >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <span>{item}</span>
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
                        {job.technologies.map((tech, idx) => (
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

export default Experience;
