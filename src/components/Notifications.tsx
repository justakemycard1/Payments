import React from 'react';
import { CheckCircle, AlertTriangle, X } from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'warning';
  message: string;
  timestamp: string;
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    message: '₹2,500 payment from Rahul Kumar credited successfully 🎉',
    timestamp: '2 mins ago'
  },
  {
    id: '2',
    type: 'warning',
    message: 'One transaction is pending verification from Amit Singh',
    timestamp: '1 hour ago'
  }
];

const Notifications: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Notifications</h2>
      
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-xl border-l-4 ${
              notification.type === 'success'
                ? 'bg-green-50 border-green-500'
                : 'bg-yellow-50 border-yellow-500'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {notification.type === 'success' ? (
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertTriangle size={20} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <p className={`text-sm font-medium ${
                    notification.type === 'success' ? 'text-green-900' : 'text-yellow-900'
                  }`}>
                    {notification.message}
                  </p>
                  <p className={`text-xs mt-1 ${
                    notification.type === 'success' ? 'text-green-700' : 'text-yellow-700'
                  }`}>
                    {notification.timestamp}
                  </p>
                </div>
              </div>
              <button className={`p-1 rounded-full hover:bg-opacity-20 transition-colors ${
                notification.type === 'success' 
                  ? 'text-green-600 hover:bg-green-600' 
                  : 'text-yellow-600 hover:bg-yellow-600'
              }`}>
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notifications;