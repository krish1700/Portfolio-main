import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Timeline = () => {
  const timelineItems = [
    ...resumeData.experience.map(exp => ({
      type: 'work',
      icon: Briefcase,
      title: exp.position,
      subtitle: exp.company,
      date: `${exp.startDate} - ${exp.endDate}`,
      color: 'from-green-500 to-teal-500'
    })),
    ...resumeData.education.map(edu => ({
      type: 'education',
      icon: GraduationCap,
      title: edu.degree,
      subtitle: edu.institution,
      date: `${edu.startDate} - ${edu.endDate}`,
      color: 'from-blue-500 to-purple-500'
    }))
  ].sort((a, b) => {
    // Sort by end date (most recent first)
    const getYear = (date) => {
      if (date.includes('Present') || date.includes('Expected')) return 9999;
      return parseInt(date.split(' ').pop());
    };
    return getYear(b.date.split(' - ')[1]) - getYear(a.date.split(' - ')[1]);
  });

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            My Journey
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Career timeline and milestones
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-teal-500 to-blue-500"></div>

          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative mb-12 ${isLeft ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
              >
                {/* Icon */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 ${isLeft ? 'md:-translate-x-1/2' : 'md:-translate-x-1/2'}`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-gray-900 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-24 md:ml-0 ${isLeft ? 'md:mr-16' : 'md:ml-16'}`}>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 hover:shadow-2xl transition-all duration-300 group">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} rounded-full text-white text-xs font-semibold mb-3`}>
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.subtitle}</p>
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

export default Timeline;
