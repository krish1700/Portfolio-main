import { Github, Linkedin, Mail, Award, TrendingUp, Database, Download } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Hero = () => {
  const { personal } = resumeData;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-normal filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-normal filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-normal filter blur-xl opacity-10 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-2xl opacity-30 animate-float"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-20 animate-pulse"></div>
              <img
                src={personal.photo}
                alt={personal.name}
                className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-green-100"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x200/22c55e/ffffff?text=' + personal.name.split(' ').map(n => n[0]).join('');
                }}
              />
              {/* Floating icons */}
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg animate-bounce">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-2 shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                <Database className="w-5 h-5 text-teal-600" />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-3 animate-slide-up font-semibold">
            {personal.title}
          </p>
          <p className="text-lg text-green-400 mb-6 animate-slide-up font-medium italic">
            {personal.tagline}
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 animate-slide-up">
            {personal.summary}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8 animate-slide-up">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-gray-300" />
            </a>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-red-400" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <a
              href="/Resume_KrishPatil.pdf"
              download="Krish_Patil_Resume.pdf"
              className="flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-800 text-gray-200 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-gray-700"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-gray-800 text-gray-200 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-gray-700"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
