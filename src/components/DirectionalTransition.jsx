// src/components/DirectionalTransition.jsx
import { motion } from 'framer-motion';

const pageVariants = {
  initial: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

const DirectionalTransition = ({ children }) => {
  // You can make direction dynamic based on route history
  // For simplicity we use fixed direction here
  const direction = 1; // 1 = forward, -1 = backward

  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: 'tween',
        duration: 0.4,
        ease: 'easeInOut',
      }}
      style={{ width: '100%', minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
};

export default DirectionalTransition;