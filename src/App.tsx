import React, { useState } from 'react';
import { 
  CreditCard, 
  TrendingUp, 
  Clock, 
  RefreshCw, 
  Download, 
  Eye, 
  Filter,
  Calendar,
  Plus,
  QrCode,
  FileText,
  Bell,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import StatsCard from './components/StatsCard';
import TransactionTable from './components/TransactionTable';
import Analytics from './components/Analytics';
import PayoutSection from './components/PayoutSection';
import QuickActions from './components/QuickActions';
import Notifications from './components/Notifications';

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [dateRange, setDateRange] = useState('This Month');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Payments</h1>
              <p className="text-sm text-slate-600 mt-1">Manage your payment dashboard</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                <Bell size={20} />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                JT
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-6 space-y-6 pb-20">
        {/* Quick Stats */}
        <section>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <StatsCard
              title="Total Earnings"
              value="₹1,24,500"
              change="+12.5%"
              trend="up"
              icon={<CreditCard size={20} />}
              color="blue"
            />
            <StatsCard
              title="This Month"
              value="₹28,750"
              change="+8.2%"
              trend="up"
              icon={<TrendingUp size={20} />}
              color="green"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatsCard
              title="Pending"
              value="₹5,200"
              change="2 pending"
              trend="neutral"
              icon={<Clock size={20} />}
              color="orange"
            />
            <StatsCard
              title="Refunds"
              value="₹1,800"
              change="3 this month"
              trend="down"
              icon={<RefreshCw size={20} />}
              color="red"
            />
          </div>
        </section>

        {/* Notifications */}
        <Notifications />

        {/* Quick Actions */}
        <QuickActions />

        {/* Analytics */}
        <Analytics />

        {/* Payout Section */}
        <PayoutSection />

        {/* Transactions */}
        <TransactionTable />
      </main>
    </div>
  );
}

export default App;