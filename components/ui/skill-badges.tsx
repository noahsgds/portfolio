'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  title: string;
  skills: Array<{
    name: string;
    category: string;
  }>;
  className?: string;
}

const scrollingAnimation = {
  display: "flex",
  animation: "scroll 20s linear infinite",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
};

const styles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

export function SkillBadges({ title, skills }: SkillBadgeProps) {
  return (
    <div className="w-full overflow-hidden">
      <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <style>{styles}</style>
          <div className="overflow-hidden w-full">
            <div style={scrollingAnimation} className="flex gap-12 h-16">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="text-5xl text-white font-semibold whitespace-nowrap"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Card>
    </div>
  );
}
