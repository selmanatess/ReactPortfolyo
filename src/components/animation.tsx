import React from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedComponent = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isInView ? 0 : 200, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
