"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="link"
      size="icon"
      className="relative w-6 h-6"
      onClick={toggleTheme}
    >
      <Sun className="h-full w-full transition-opacity duration-300 opacity-100 dark:opacity-0 dark:fill-primary-color" />
      <Moon className="absolute h-full w-full transition-opacity duration-300 opacity-0 dark:opacity-100 dark:fill-primary-color" />
    </Button>
  );
}
