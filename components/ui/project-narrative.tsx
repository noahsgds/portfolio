'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectNarrativeProps {
  title: string;
  introduction: string;
  process: string[];
  impact: string;
  lesson: string;
}

export function ProjectNarrative({ title, introduction, process, impact, lesson }: ProjectNarrativeProps) {
  return (
    <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        
        <section className="mb-6">
          <h4 className="text-lg font-semibold text-white/90 mb-2">Introduction</h4>
          <p className="text-white/80">{introduction}</p>
        </section>

        <section className="mb-6">
          <h4 className="text-lg font-semibold text-white/90 mb-2">Processus</h4>
          <ul className="space-y-2">
            {process.map((step, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-400">{index + 1}</span>
                <span className="text-white">{step}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h4 className="text-lg font-semibold text-white/90 mb-2">Impact</h4>
          <p className="text-white/80">{impact}</p>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-white/90 mb-2">Leçon Apprise</h4>
          <p className="text-white/80">{lesson}</p>
        </section>
      </motion.div>
    </Card>
  );
}
