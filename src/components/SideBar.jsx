import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Sidebar = ({ text }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will play only once when in view
        threshold: 0.1, // Adjust threshold as needed
    });

    return (
        <div className="sidebar" ref={ref}>
            <motion.h1
                className="side-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6 }}
            >
                {text}
            </motion.h1>
        </div>
    );
};

export default Sidebar;
