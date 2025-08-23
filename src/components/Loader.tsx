import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const Loader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onLoadComplete, 500);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-500 ${
      isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8 animate-pulse-slow">
          <span
            role="img"
            aria-label="Wattar logo"
            className="mx-auto block mb-4 h-24 w-48 md:h-28 md:w-56"
            style={{
              backgroundColor: "#008080",
              WebkitMask: `url(${logo}) center / contain no-repeat`,
              mask: `url(${logo}) center / contain no-repeat`,
            }}
          />
          <p className="text-xl text-muted-foreground">كل فكرة إبداع بلا قيود</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-border rounded-full h-1 mb-4">
            <div 
              className="bg-gradient-primary h-1 rounded-full transition-all duration-300 shadow-glow-yellow"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground">{Math.round(progress)}%</p>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-secondary rounded-full blur-2xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Loader;