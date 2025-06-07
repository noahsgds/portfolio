'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  tags: string[];
}

export function ProjectCard({ title, description, impact, tags }: ProjectCardProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
      <CardHeader className="flex flex-col gap-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} variant="outline" className="bg-blue-500/10 text-blue-500">
              {tag}
            </Tag>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 mb-4">{description}</CardDescription>
        <div className="flex items-center gap-2 text-green-500">
          <span className="text-2xl">🚀</span>
          <span>{impact}</span>
        </div>
      </CardContent>
    </Card>
  );
}
