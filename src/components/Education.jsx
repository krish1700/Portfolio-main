import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Education = () => {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="section-container bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Academic Journey</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
            <h3 className="text-3xl font-bold text-gray-100">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="relative p-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-7 h-7 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl blur-md opacity-50"></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{edu.startDate} - {edu.endDate}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {edu.gpa && (
                      <p className="text-gray-300 mb-2">
                        <span className="font-semibold">GPA:</span> {edu.gpa}
                      </p>
                    )}

                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
              <h3 className="text-3xl font-bold text-gray-100">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border-2 border-gray-700 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  
                  <div className="flex items-start space-x-3 relative z-10">
                    <div className="relative p-2 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-5 h-5 text-white" />
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg blur-md opacity-50"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-100 mb-1 group-hover:text-green-400 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm font-semibold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-gray-300 mt-1">
                        Issued: {cert.date}
                      </p>
                      {cert.credentialId && (
                        <p className="text-xs text-gray-400 mt-1">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
