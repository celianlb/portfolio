'use client';
import { motion } from "framer-motion";

const spinTransition = {
  repeat: Infinity,
  ease: "easeInOut",
  // width: ['100%', '50%'],
  duration: 1
};

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-80">
      <div className="bg-primary w-12 h-12 flex justify-center items-center">
        <motion.span
          className="block w-12 h-12 border-4 border-solid border-t-secondary border-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />
      </div>
    </div>
  );
}
