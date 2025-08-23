import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <div className="text-8xl font-bold text-primary mb-6">404</div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">الصفحة غير موجودة</h1>
        <p className="text-xl text-muted-foreground mb-8">عذراً، الصفحة التي تبحث عنها غير متوفرة</p>
        <Button className="btn-primary" onClick={() => window.location.href = "/"}>
          العودة للرئيسية
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
