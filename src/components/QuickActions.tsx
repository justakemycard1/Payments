import React from 'react';
import { QrCode, FileText, Plus, Send } from 'lucide-react';

const QuickActions: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
      
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm active:scale-95">
          <QrCode size={20} />
          <span className="font-medium">Payment Link</span>
        </button>
        
        <button className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-sm active:scale-95">
          <FileText size={20} />
          <span className="font-medium">Create Invoice</span>
        </button>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3">
        <button className="flex items-center justify-center space-x-2 p-3 bg-white border-2 border-dashed border-slate-300 text-slate-700 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all">
          <Plus size={18} />
          <span className="font-medium">Add New Payment Method</span>
        </button>
      </div>
    </section>
  );
};

export default QuickActions;