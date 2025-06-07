'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SkillChartProps {
  title: string;
  skills: Array<{
    name: string;
    level: number;
    category: string;
  }>;
}

export function SkillChart({ title, skills }: SkillChartProps) {
  return (
    <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center text-white/80">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Card>
  );
}
