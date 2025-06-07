'use client';

import { Card } from "@/components/ui/card";
import { Trend } from "@/components/ui/trend";

interface MetricCardProps {
  title: string;
  value: string | number;
  trend: string;
  color: string;
}

export function MetricCard({ title, value, trend, color }: MetricCardProps) {
  return (
    <Card className={`p-6 ${color} text-white rounded-xl shadow-lg`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium opacity-80">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <div className="flex items-center mt-2">
            <Trend trend={trend} />
            <span className="ml-2 text-sm">{trend}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
