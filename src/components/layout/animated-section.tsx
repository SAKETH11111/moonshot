"use client"; // Required for framer-motion

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { cn } from "~/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number; // Optional: for staggering children inside this section
  tag?: keyof typeof motion; // Optional: specify the motion tag (e.g., 'section', 'div')
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1], // Smoother ease
    },
  },
};

const containerVariants = (stagger: number = 0.1): Variants => ({
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
}) => {
  const MotionComponent = motion[tag];
  const variants = staggerChildren ? containerVariants(staggerChildren) : defaultVariants;
  const initial = "hidden";
  const whileInView = "visible";
  const viewport = { once: true, amount: 0.2 }; // Trigger when 20% is visible

  // Apply delay directly to the transition if not staggering children
  if (!staggerChildren && delay > 0) {
    variants.visible.transition.delay = delay;
  }
  // If staggering, the container's delayChildren handles the initial pause

  return (
    <MotionComponent
      className={cn(className)}
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </MotionComponent>
  );
};

// Optional: Export item variants if needed directly in pages for staggered lists
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};