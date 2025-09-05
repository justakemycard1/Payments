import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'orange' | 'red';
}

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  orange: 'from-orange-500 to-orange-600',
  red: 'from-red-500 to-red-600'
};

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, trend, icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${colorClasses[color]} text-white`}>
          {icon}
        </div>
        {trend !== 'neutral' && (
          <div className={`flex items-center space-x-1 text-xs ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span>{change}</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-xs text-slate-600 mb-1">{title}</p>
        <p className="text-lg font-bold text-slate-900">{value}</p>
        {trend === 'neutral' && (
          <p className="text-xs text-slate-500 mt-1">{change}</p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;