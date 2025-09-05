import React from 'react';
import { BarChart3, PieChart } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Analytics</h2>
      
      <div className="space-y-4">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-md font-medium text-slate-900">Monthly Revenue</h3>
            <BarChart3 size={20} className="text-slate-500" />
          </div>
          
          <div className="h-32 flex items-end justify-between space-x-1">
            {[65, 45, 78, 52, 89, 67, 95].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-slate-600 mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-md font-medium text-slate-900">Payment Methods</h3>
            <PieChart size={20} className="text-slate-500" />
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-slate-700">UPI</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-slate-900">40%</span>
                <div className="w-16 h-1.5 bg-slate-200 rounded-full mt-1">
                  <div className="w-2/5 h-full bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-700">Card</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-slate-900">35%</span>
                <div className="w-16 h-1.5 bg-slate-200 rounded-full mt-1">
                  <div className="w-2/6 h-full bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-slate-700">PayPal</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-slate-900">25%</span>
                <div className="w-16 h-1.5 bg-slate-200 rounded-full mt-1">
                  <div className="w-1/4 h-full bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;