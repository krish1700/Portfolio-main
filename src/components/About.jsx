import { MapPin, Mail, Phone, Download } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const About = () => {
  const { personal } = resumeData;

  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        
        <div className="card">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                Get to know me
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {personal.summary}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm passionate about creating innovative solutions and continuously learning new technologies. 
                When I'm not coding, you can find me exploring new tech trends, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>
              <a
                href="/Resume_KrishPatil.pdf"
                download="Krish_Patil_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5 text-green-400" />
                  <a href={`mailto:${personal.email}`} className="hover:text-green-400 transition-colors">
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>{personal.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
