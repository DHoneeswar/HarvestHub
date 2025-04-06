import React from 'react';
import { motion, MotionProps } from 'framer-motion';

// Common props type
type AnimationProps = React.PropsWithChildren<{
  delay?: number;
  duration?: number;
} & MotionProps>;

// Fade-in animation
export const FadeIn: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  exit = { opacity: 0 },
  ...props
}) => (
  <motion.div
    initial={initial}
    animate={animate}
    exit={exit}
    transition={{ duration, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

// Slide-in animation
type SlideDirection = 'up' | 'down' | 'left' | 'right';

interface SlideInProps extends AnimationProps {
  direction?: SlideDirection;
  distance?: number;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'up',
  distance = 20,
  delay = 0,
  duration = 0.5,
  ...props
}) => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  const initialPos = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...initialPos }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, ...initialPos }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scale-in animation
interface ScaleInProps extends AnimationProps {
  initialScale?: number;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  initialScale = 0.9,
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, scale: initialScale }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: initialScale }}
    transition={{ duration, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

// Stagger container
interface StaggerContainerProps extends React.PropsWithChildren {
  delay?: number;
  staggerDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  delay = 0,
  staggerDelay = 0.1,
  ...props
}) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Stagger item
export const StaggerItem: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  const variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Grouped export (optional but nice!)
const MotionWrappers = {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
};

export default MotionWrappers;