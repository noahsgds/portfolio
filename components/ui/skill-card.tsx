'use client';

import { Card } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  skills: Array<{
    name: string;
    level?: string;
  }>;
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>•</span>
            <span className="text-white">{skill.name}</span>
            {skill.level && (
              <span className="text-green-400 text-sm">({skill.level})</span>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
