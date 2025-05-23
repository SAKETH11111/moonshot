"use client"; // Required for framer-motion

import { motion, type Variants as FramerVariants } from "framer-motion"; // Removed unused types
import { cn } from "~/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number; // Optional: for staggering children inside this section
  tag?: keyof typeof motion; // Optional: specify the motion tag (e.g., 'section', 'div')
  animationStyle?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn'; // New prop for animation style
}

const commonTransition = {
  duration: 0.6,
  ease: [0.25, 0.4, 0.25, 1], // Smoother ease
};

const sectionAnimationVariants: Record<NonNullable<AnimatedSectionProps['animationStyle']>, FramerVariants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: commonTransition },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: commonTransition },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: commonTransition },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: commonTransition },
  },
};

const containerVariants = (stagger = 0.1): FramerVariants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.2, // Add a small delay before children start animating
    },
  },
});

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  staggerChildren,
  tag = 'div', // Default to div
  animationStyle = 'fadeInUp', // Default animation style
}) => {
  const selectedVariants = staggerChildren
    ? containerVariants(staggerChildren)
    : sectionAnimationVariants[animationStyle];
  
  const initial = "hidden";
  const whileInView = "visible";
  const viewport = { once: true, amount: 0.2 }; // Trigger when 20% is visible

  // Define transition prop separately if delay is needed and not staggering
  const transitionProp = (!staggerChildren && delay > 0) ? { delay } : undefined;

  // Define common props for the motion component
  const commonProps = {
    className: cn(className),
    variants: selectedVariants,
    initial: initial,
    whileInView: whileInView,
    viewport: viewport,
    transition: transitionProp, // Apply delay via transition prop if defined
  };

  // Use conditional rendering to avoid dynamic motion[tag] in JSX return
  if (tag === 'section') {
    return <motion.section {...commonProps}>{children}</motion.section>;
  }
  if (tag === 'li') {
    return <motion.li {...commonProps}>{children}</motion.li>;
  }
  // Add other common tags if needed (e.g., 'ul', 'article')
  // ...

  // Default to div
  return <motion.div {...commonProps}>{children}</motion.div>;
// Removed extra closing parenthesis from here
}

// Optional: Export item variants if needed directly in pages for staggered lists
export const itemVariants: FramerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { // This now conforms to OurTransition
      duration: 0.5,
      ease: "easeOut",
    },
  },
};