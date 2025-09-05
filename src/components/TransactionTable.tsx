import React, { useState } from 'react';
import { Eye, Download, Filter, Calendar, ChevronDown } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  client: {
    name: string;
    avatar: string;
  };
  method: string;
  status: 'Paid' | 'Pending' | 'Failed' | 'Refunded';
  amount: string;
}

const transactions: Transaction[] = [
  {
    id: '1',
    date: '2025-01-15',
    client: { name: 'Rahul Kumar', avatar: 'RK' },
    method: 'UPI',
    status: 'Paid',
    amount: '₹2,500'
  },
  {
    id: '2',
    date: '2025-01-14',
    client: { name: 'Priya Sharma', avatar: 'PS' },
    method: 'Card',
    status: 'Paid',
    amount: '₹1,200'
  },
  {
    id: '3',
    date: '2025-01-13',
    client: { name: 'Amit Singh', avatar: 'AS' },
    method: 'PayPal',
    status: 'Pending',
    amount: '₹3,750'
  },
  {
    id: '4',
    date: '2025-01-12',
    client: { name: 'Neha Gupta', avatar: 'NG' },
    method: 'UPI',
    status: 'Failed',
    amount: '₹850'
  },
  {
    id: '5',
    date: '2025-01-11',
    client: { name: 'Vikram Patel', avatar: 'VP' },
    method: 'Card',
    status: 'Refunded',
    amount: '₹1,500'
  }
];

const statusColors = {
  Paid: 'bg-green-100 text-green-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Failed: 'bg-red-100 text-red-800',
  Refunded: 'bg-gray-100 text-gray-800'
};

const TransactionTable: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('This Month');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTransactions = transactions.filter(transaction => 
    statusFilter === 'All' || transaction.status === statusFilter
  );

  return (
    <section>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Recent Transactions</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <Filter size={16} />
              <span className="text-sm">Filter</span>
              <ChevronDown size={14} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-2">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All">All Status</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Failed">Failed</option>
                  <option value="Refunded">Refunded</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-2">Date Range</label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Today">Today</option>
                  <option value="Last 7 days">Last 7 days</option>
                  <option value="This Month">This Month</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="divide-y divide-slate-200">
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {transaction.client.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{transaction.client.name}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <p className="text-xs text-slate-600">{transaction.method}</p>
                      <span className="text-xs text-slate-400">•</span>
                      <p className="text-xs text-slate-600">{new Date(transaction.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900 text-sm">{transaction.amount}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${statusColors[transaction.status]}`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <button className="flex items-center space-x-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs hover:bg-blue-100 transition-colors">
                  <Eye size={12} />
                  <span>View</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs hover:bg-slate-200 transition-colors">
                  <Download size={12} />
                  <span>Receipt</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransactionTable;