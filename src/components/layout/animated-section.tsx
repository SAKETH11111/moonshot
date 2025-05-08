"use client"; // Required for framer-motion

import { motion, type Variants as FramerVariants, type TargetAndTransition, type Transition as FramerTransition } from "framer-motion";
import { cn } from "~/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number; // Optional: for staggering children inside this section
  tag?: keyof typeof motion; // Optional: specify the motion tag (e.g., 'section', 'div')
}

// Define more specific types for our variants
interface OurTransition extends FramerTransition {
  duration?: number;
  ease?: any; // framer-motion uses various types for ease
  staggerChildren?: number;
  delayChildren?: number;
  delay?: number;
}

interface OurVisibleVariant extends TargetAndTransition {
  opacity?: number;
  y?: number;
  transition: OurTransition; // Ensure transition is non-optional and uses OurTransition
}

interface OurVariants extends FramerVariants {
  hidden: TargetAndTransition;
  visible: OurVisibleVariant;
}

const defaultVariants: OurVariants = {
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

const containerVariants = (stagger: number = 0.1): OurVariants => ({
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
  const baseVariants: OurVariants = staggerChildren ? containerVariants(staggerChildren) : defaultVariants;
  const initial = "hidden";
  const whileInView = "visible";
  const viewport = { once: true, amount: 0.2 }; // Trigger when 20% is visible

  let processedVariants: OurVariants = baseVariants; // Ensure consistent strict typing

  // Apply delay directly to the transition if not staggering children
  if (!staggerChildren && delay > 0) {
    // Create a new object, leveraging the stricter OurVariants type
    processedVariants = {
      ...baseVariants, // Spread all properties from baseVariants (OurVariants)
      visible: { // Override the visible property
        ...baseVariants.visible, // Spread all properties from baseVariants.visible (OurVisibleVariant)
        transition: { // Override the transition property
          ...baseVariants.visible.transition, // Spread all properties from baseVariants.visible.transition (OurTransition)
          delay: delay, // Add/override the delay
        },
      },
    };
  }
  // If staggering, the container's delayChildren handles the initial pause

  return (
    <MotionComponent
      className={cn(className)}
      variants={processedVariants as FramerVariants} // Cast to base FramerVariants for the component
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </MotionComponent>
  );
};

// Optional: Export item variants if needed directly in pages for staggered lists
export const itemVariants: OurVariants = {
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