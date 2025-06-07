'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface KPIDashboardProps {
  title: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: string;
}

export function KPIDashboard({ title, value, trend = 'neutral', icon = '📊' }: KPIDashboardProps) {
  const trendColor = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-white/80'
  }[trend];

  return (
    <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-2xl text-white/80">{icon}</span>
        </div>
        <div className="text-3xl font-bold text-white mb-2">{value}</div>
        <div className={`flex items-center gap-2 ${trendColor}`}>
          <span>•</span>
          <span className="text-sm">{trend === 'up' ? '↑ +20%' : trend === 'down' ? '↓ -10%' : 'Stable'}</span>
        </div>
      </motion.div>
    </Card>
  );
}
