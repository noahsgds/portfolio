'use client';

import { Card } from "@/components/ui/card";

interface TimelineCardProps {
  title: string;
  items: Array<{
    date: string;
    position: string;
    company: string;
    impact: string;
  }>;
}

export function TimelineCard({ title, items }: TimelineCardProps) {
  return (
    <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 w-1 h-full bg-gray-600" />
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white">{index + 1}</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">{item.position}</h4>
                <p className="text-gray-300">{item.company}</p>
                <p className="text-green-400 mt-1">{item.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
