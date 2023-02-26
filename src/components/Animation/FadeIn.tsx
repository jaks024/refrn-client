import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const FadeIn = ({ children }: PropsWithChildren) => {
  return (
    <motion.div animate={{ opacity: 1 }} style={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};
