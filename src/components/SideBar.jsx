import '../styles.css';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Sidebar({ text }) {
  // Animation when sidebar comes into view
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="sidebar" ref={ref}>
      <motion.h1
        className="sidebar-text"
        initial={{ opacity: 0, y: 20 }}   // Fade in + Slide up
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} 
        transition={{ duration: 0.6 }}
      >
        {text}
      </motion.h1>
    </div>
  );
}
