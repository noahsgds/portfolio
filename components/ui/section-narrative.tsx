'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SectionNarrativeProps {
  title: string;
  content: string;
  keyPoints: string[];
}

export function SectionNarrative({ title, content, keyPoints }: SectionNarrativeProps) {
  return (
    <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/80 mb-6">{content}</p>
        <div className="border-t border-white/10 pt-4">
          <h4 className="text-lg font-semibold text-white/90 mb-2">Points Clés</h4>
          <ul className="space-y-2">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span className="text-white">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Card>
  );
}
