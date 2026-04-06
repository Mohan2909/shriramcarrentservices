"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type SectionRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
