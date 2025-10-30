import { useState, useEffect } from 'react';
import { Database, TrendingUp, Cpu, BarChart3, Zap, Server } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { icon: Database, text: "Connecting to data sources...", color: "from-purple-500 to-purple-600" },
    { icon: Server, text: "Initializing ETL pipelines...", color: "from-blue-500 to-blue-600" },
    { icon: Cpu, text: "Processing data streams...", color: "from-cyan-500 to-cyan-600" },
    { icon: BarChart3, text: "Building analytics models...", color: "from-teal-500 to-teal-600" },
    { icon: TrendingUp, text: "Generating insights...", color: "from-green-500 to-green-600" },
    { icon: Zap, text: "Optimizing performance...", color: "from-yellow-500 to-yellow-600" },
  ];

  useEffect(() => {
    const duration = 3500; // 3.5 seconds total
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        
        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * phases.length);
        setCurrentPhase(Math.min(phaseIndex, phases.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete, phases.length]);

  const CurrentIcon = phases[currentPhase].icon;
  const currentColor = phases[currentPhase].color;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Data flow lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={`${20 + i * 20}%`}
              x2="100%"
              y2={`${20 + i * 20}%`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        {/* Animated icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-green-500 border-r-teal-500 rounded-full animate-spin"></div>
            
            {/* Middle pulsing ring */}
            <div className="absolute inset-2 w-28 h-28 border-4 border-transparent border-b-cyan-500 border-l-blue-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
            
            {/* Icon container */}
            <div className={`relative w-32 h-32 bg-gradient-to-br ${currentColor} rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500`}>
              <CurrentIcon className="w-16 h-16 text-white animate-pulse" />
            </div>

            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentColor} rounded-full blur-xl opacity-50 animate-pulse`}></div>
          </div>
        </div>

        {/* Brand name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Krish Patil
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-300 mb-8 font-semibold">
          Data Engineer & Analytics
        </p>

        {/* Phase text */}
        <div className="mb-8 h-8">
          <p className="text-green-400 text-lg font-medium animate-pulse">
            {phases[currentPhase].text}
          </p>
        </div>

        {/* Progress bar */}
        <div className="relative w-full max-w-md mx-auto">
          {/* Background bar */}
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden shadow-inner">
            {/* Progress fill */}
            <div
              className="h-full bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            </div>
          </div>

          {/* Percentage */}
          <div className="mt-3 text-gray-400 text-sm font-mono">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Data metrics animation */}
        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          {[
            { label: "Data Points", value: Math.floor(progress * 1000) + "K" },
            { label: "Pipelines", value: Math.floor(progress / 10) },
            { label: "Insights", value: Math.floor(progress / 5) },
          ].map((metric, i) => (
            <div key={i} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
              <div className="text-2xl font-bold text-green-400 font-mono">
                {metric.value}
              </div>
              <div className="text-xs text-gray-400 mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Binary code rain effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
          <div className="text-green-400 text-xs font-mono whitespace-pre animate-scroll">
            {[...Array(10)].map((_, i) => (
              <div key={i}>
                {Array.from({ length: 50 }, () => Math.random() > 0.5 ? '1' : '0').join(' ')}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-green-500 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-teal-500 opacity-30"></div>
    </div>
  );
};

export default LoadingScreen;
