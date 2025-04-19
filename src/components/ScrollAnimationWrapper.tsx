import { motion, useInView, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  initialOpacity?: number;
  initialTranslation?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
  repeat?: boolean;
  threshold?: number;
  margin?: string; // Simple string type for useInView margin
}

const animations: Record<string, Variants> = {
  fadeUp: {
    hidden: (customValues: { initialOpacity: number; initialTranslation: number }) => ({
      opacity: customValues.initialOpacity,
      y: customValues.initialTranslation,
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  fadeDown: {
    hidden: (customValues: { initialOpacity: number; initialTranslation: number }) => ({
      opacity: customValues.initialOpacity,
      y: -customValues.initialTranslation,
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  fadeLeft: {
    hidden: (customValues: { initialOpacity: number; initialTranslation: number }) => ({
      opacity: customValues.initialOpacity,
      x: customValues.initialTranslation,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  fadeRight: {
    hidden: (customValues: { initialOpacity: number; initialTranslation: number }) => ({
      opacity: customValues.initialOpacity,
      x: -customValues.initialTranslation,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  scale: {
    hidden: (customValues: { initialOpacity: number }) => ({
      opacity: customValues.initialOpacity,
      scale: 0.8,
    }),
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  rotate: {
    hidden: (customValues: { initialOpacity: number }) => ({
      opacity: customValues.initialOpacity,
      rotate: -10,
      scale: 0.9,
    }),
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },
};

export default function ScrollAnimationWrapper({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  initialOpacity = 0,
  initialTranslation = 40,
  staggerChildren = false,
  staggerDelay = 0.1,
  repeat = true,
  threshold = 0.2,
  margin = "-50px",
}: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: !repeat,
    margin: margin as any, // Type assertion to bypass strict typing
    amount: threshold
  });

  const customValues = { initialOpacity, initialTranslation };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren ? staggerDelay : 0,
        delayChildren: delay,
        duration,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      custom={customValues}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerChildren ? containerVariants : animations[animation]}
      className={className}
      style={{ opacity: 1 }} // Ensure visibility in case of issues
    >
      {children}
    </motion.div>
  );
}

export function ScrollAnimationItem({
  children,
  className = "",
  animation = "fadeUp",
  index = 0,
  duration = 0.6,
  initialOpacity = 0,
  initialTranslation = 40,
}: Omit<ScrollAnimationWrapperProps, 'repeat' | 'threshold' | 'margin'> & { index?: number }) {
  const customValues = { initialOpacity, initialTranslation };

  return (
    <motion.div
      custom={customValues}
      variants={animations[animation]}
      transition={{ duration, delay: index * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Higher-order component to easily add scroll animations
export function withScrollAnimation<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  animationProps: Partial<ScrollAnimationWrapperProps> = {}
) {
  return function WithScrollAnimation(props: P) {
    return (
      <ScrollAnimationWrapper {...animationProps}>
        <WrappedComponent {...props} />
      </ScrollAnimationWrapper>
    );
  };
}
