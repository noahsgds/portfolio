'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export function ExperienceCard({ company, role, period, achievements }: ExperienceCardProps) {
  return (
    <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{company}</h3>
          <span className="text-white/80">{period}</span>
        </div>
        <h4 className="text-lg font-semibold text-white/90 mb-4">{role}</h4>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-400">•</span>
              <span className="text-white">{achievement}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Card>
  );
}
