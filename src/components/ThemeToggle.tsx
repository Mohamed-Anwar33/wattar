import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative group p-3 rounded-full bg-card/80 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label={theme === 'light' ? 'تفعيل الوضع الليلي' : 'تفعيل الوضع النهاري'}
    >
      {/* Background glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
      
      {/* Icon container */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-foreground transition-all duration-300 group-hover:text-primary" />
        ) : (
          <Sun className="w-5 h-5 text-foreground transition-all duration-300 group-hover:text-primary animate-spin-slow" />
        )}
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-card/95 backdrop-blur-md text-foreground text-sm rounded-lg shadow-lg border border-border/50 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
        {theme === 'light' ? 'الوضع الليلي' : 'الوضع النهاري'}
      </div>
    </button>
  );
};

export default ThemeToggle;
