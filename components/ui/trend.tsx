'use client';

interface TrendProps {
  trend: string;
}

export function Trend({ trend }: TrendProps) {
  const isPositive = trend.includes('↑');
  const isNegative = trend.includes('↓');

  return (
    <span className={`w-6 h-6 rounded-full flex items-center justify-center ${
      isPositive ? 'bg-green-500' : isNegative ? 'bg-red-500' : 'bg-gray-500'
    }`}>
      {isPositive ? '↑' : isNegative ? '↓' : '→'}
    </span>
  );
}
