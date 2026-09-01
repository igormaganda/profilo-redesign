import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const FadeUp = ({ children, delay = 0, className = "", y = 28 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

export const MaskedLines = ({ lines, className = "", lineClassName = "" }) => (
  <span className={className}>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden pb-[0.08em]">
        <motion.span
          className={`block ${lineClassName}`}
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: EASE }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);
