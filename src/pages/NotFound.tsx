
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Seo from "@/components/Seo";
import { APP_NAME } from "@/constants/constants";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
    <Seo
      title={`Page Not Found - ${APP_NAME}`}
      description="The page you're looking for does not exist."
      robots="noindex,nofollow"
      type="website"
    />
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="mb-6 flex justify-center">
          <Clock className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
    </>
  );
};

export default NotFound;
