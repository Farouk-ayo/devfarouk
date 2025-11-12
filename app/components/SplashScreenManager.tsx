"use client";

import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

const SplashScreenManager = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isLoadedPage = window.location.pathname === "/";
    setIsLoading(isLoadedPage);
    if (isLoadedPage) {
      const timer = setTimeout(() => setIsLoading(false), 3000); 
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    <SplashScreen finishLoading={() => setIsLoading(false)} />
  ) : (
    <>{children}</>
  );
};

export default SplashScreenManager;
