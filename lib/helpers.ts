/**
 * Utility functions for responsive design and common operations
 */

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

/**
 * Common responsive spacing values
 */
export const responsiveSpacing = {
  xs: "px-4 py-2",
  sm: "px-4 sm:px-6 py-3 sm:py-4",
  md: "px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-12",
  lg: "px-8 sm:px-12 md:px-16 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20",
  xl:
    "px-12 sm:px-16 md:px-20 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32",
} as const;

/**
 * Common responsive text sizes
 */
export const responsiveText = {
  xs: "text-xs sm:text-sm",
  sm: "text-sm sm:text-base",
  base: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl",
  xl: "text-xl sm:text-2xl",
  "2xl": "text-2xl sm:text-3xl md:text-4xl",
  "3xl": "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  "4xl": "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
} as const;

/**
 * Generate responsive class names based on screen size
 */
export function responsive(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string {
  const classes = [base];

  if (sm) classes.push(`sm:${sm}`);
  if (md) classes.push(`md:${md}`);
  if (lg) classes.push(`lg:${lg}`);
  if (xl) classes.push(`xl:${xl}`);

  return classes.join(" ");
}

/**
 * Generate random delay for animations
 */
export function randomDelay(min = 0.1, max = 1): number {
  return Math.random() * (max - min) + min;
}

/**
 * Format social media links
 */
export function formatSocialLink(
  platform: "instagram" | "email",
  handle: string
): string {
  switch (platform) {
    case "instagram":
      return `https://instagram.com/${handle.replace("@", "")}`;
    case "email":
      return `mailto:${handle}`;
    default:
      return handle;
  }
}

/**
 * Check if device is mobile based on screen width
 */
export function isMobile(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

/**
 * Check if device is tablet based on screen width
 */
export function isTablet(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 768 && window.innerWidth < 1024;
}

/**
 * Get responsive container classes
 */
export function getContainerClasses(
  size: "sm" | "md" | "lg" | "xl" | "full" = "lg"
): string {
  const baseClasses = "mx-auto px-4 sm:px-6 lg:px-8";

  switch (size) {
    case "sm":
      return `${baseClasses} max-w-2xl`;
    case "md":
      return `${baseClasses} max-w-4xl`;
    case "lg":
      return `${baseClasses} max-w-6xl`;
    case "xl":
      return `${baseClasses} max-w-7xl`;
    case "full":
      return `${baseClasses}`;
    default:
      return `${baseClasses} max-w-6xl`;
  }
}
