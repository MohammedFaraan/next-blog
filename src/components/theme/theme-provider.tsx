"use client"

import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";
import Header from "../layout/header";
import { cn } from "@/lib/utils";

interface NextThemeProviderInterface extends ThemeProviderProps {
  containerClassName?: string;
}

export default function ThemeProvider({
  children,
  containerClassName,
  ...props
}: NextThemeProviderInterface) {
  return (
    <NextThemeProvider {...props}>
      <Header />
      <main className={cn("container mx-auto px-4", containerClassName)}>
        {children}
      </main>
    </NextThemeProvider>
  );
}
