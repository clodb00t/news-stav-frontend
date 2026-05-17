import React from 'react';
import { cn } from '@/lib/utils';

interface TrustMeterProps {
  score: number; // 0 to 100
  className?: string;
}

export const TrustMeter = ({ score, className }: TrustMeterProps) => {
  const getLevel = (s: number) => {
    if (s >= 80) return { label: 'High Trust', color: 'bg-green-500', text: 'text-green-700' };
    if (s >= 50) return { label: 'Medium Trust', color: 'bg-yellow-500', text: 'text-yellow-700' };
    return { label: 'Low Trust', color: 'bg-red-500', text: 'text-red-700' };
  };

  const { label, color, text } = getLevel(score);

  return (
    <div className={cn("flex items-center gap-2 px-2 py-1 rounded-full bg-slate-100 border border-slate-200 w-fit", className)}>
      <div className={cn("w-2 h-2 rounded-full animate-pulse", color)} />
      <span className={cn("text-xs font-semibold uppercase tracking-wider", text)}>
        {label}: {score}%
      </span>
    </div>
  );
};
