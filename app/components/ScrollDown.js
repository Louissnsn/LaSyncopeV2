"use client";
import styles from "@/styles/ScrollDown.module.css";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

export default function ScrollDown() {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0.8 }}
      animate={{ y: 10, opacity: 1 }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={styles.scrollIndicator}
    >
      <ChevronsDown size={48} className={styles.icone} />
    </motion.div>
  );
}
