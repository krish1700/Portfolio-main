import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Award, Code } from 'lucide-react';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { icon: Code, value: 50, suffix: '+', label: 'Projects Completed', color: 'from-purple-500 to-purple-600' },
    { icon: TrendingUp, value: 99.9, suffix: '%', label: 'Pipeline Uptime', color: 'from-blue-500 to-blue-600' },
    { icon: Users, value: 1000000, suffix: '+', label: 'Records Processed', color: 'from-cyan-500 to-cyan-600', format: 'M' },
    { icon: Award, value: 5, suffix: '+', label: 'Certifications', color: 'from-green-500 to-green-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ target, suffix, format }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, target]);

    const displayValue = format === 'M' ? (count / 1000000).toFixed(1) : count.toFixed(format === '%' ? 1 : 0);
    return <span>{displayValue}{format === 'M' ? 'M' : ''}{suffix}</span>;
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-block mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  <div className={`relative p-4 bg-gradient-to-br ${stat.color} rounded-full transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} format={stat.format} />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
