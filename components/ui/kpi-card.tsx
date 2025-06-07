'use client';

import { Card } from "@/components/ui/card";
import { Trend } from "@/components/ui/trend";

interface KpiCardProps {
  title: string;
  value: number | string;
  trend: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
}

export function KpiCard({ title, value, trend, icon, className }: KpiCardProps) {
  return (
    <Card className={`p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">{value}</span>
            <Trend trend={trend} />
          </div>
        </div>
        {icon && (
          <div className="text-blue-500 w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}
