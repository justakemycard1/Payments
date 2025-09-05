import React from 'react';
import { Calendar, CreditCard, Clock, ArrowRight } from 'lucide-react';

const PayoutSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Payouts</h2>
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="space-y-4">
          {/* Next Payout */}
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-lg text-white">
                <Calendar size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Next Payout</p>
                <p className="text-xs text-blue-700">January 20, 2025</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-blue-900">₹12,750</p>
              <p className="text-xs text-blue-700">In queue</p>
            </div>
          </div>

          {/* Bank Account Info */}
          <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-slate-100 rounded-lg">
                <CreditCard size={16} className="text-slate-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">HDFC Bank</p>
                <p className="text-xs text-slate-600">****1234</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Payout History */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-slate-900">Recent Payouts</h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm text-slate-900">₹8,500</p>
                    <p className="text-xs text-slate-600">Jan 13, 2025</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm text-slate-900">₹6,200</p>
                    <p className="text-xs text-slate-600">Jan 6, 2025</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm text-slate-900">₹4,750</p>
                    <p className="text-xs text-slate-600">Processing</p>
                  </div>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                  <Clock size={10} className="inline mr-1" />
                  Processing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayoutSection;