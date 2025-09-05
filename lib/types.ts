export interface TeamMember {
  name: string;
  description: string;
  imageUrl: string;
}

export interface TriangleProps {
  color: number;
  position: [number, number];
  rotation: number;
  className?: string;
}

export interface AnimationConfig {
  delay?: number;
  duration?: number;
  ease?: string;
}

export interface ContactInfo {
  instagram: string;
  email: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  year: string;
}
