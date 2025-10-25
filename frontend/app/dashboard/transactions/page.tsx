import React from 'react';
import { DashboardLayout } from '@/ui/dashboard';

const TransactionsPage: React.FC = () => {
  const transactions = [
    {
      id: 1,
      type: 'Gift Sent',
      amount: 100,
      currency: 'USDT',
      recipient: '0x742d35Cc6635C0532...89aB',
      status: 'Completed',
      date: '2024-01-20',
      hash: '0x8f3...c2d'
    },
    {
      id: 2,
      type: 'Charity Donation',
      amount: 250,
      currency: 'USDT',
      recipient: 'School Project Campaign',
      status: 'Completed',
      date: '2024-01-19',
      hash: '0x5b2...9f1'
    },
    {
      id: 3,
      type: 'Giveaway Prize',
      amount: 50,
      currency: 'USDT',
      recipient: '0x123d35Cc6635C0532...45cD',
      status: 'Completed',
      date: '2024-01-18',
      hash: '0x9k8...7h6'
    },
    {
      id: 4,
      type: 'Gift Received',
      amount: 75,
      currency: 'USDC',
      recipient: 'You',
      status: 'Claimed',
      date: '2024-01-17',
      hash: '0x3m4...2n1'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
            <p className="text-gray-600">View all your crypto transactions and activity</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Export CSV
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Filter
            </button>
          </div>
        </div>

        {/* Transaction Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Sent</p>
                <p className="text-2xl font-bold text-gray-900">$475</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600">📥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Received</p>
                <p className="text-2xl font-bold text-gray-900">$75</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600">🔄</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Transactions</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-[#0FA47A]">⏰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">$400</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recipient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          tx.type === 'Gift Sent' ? 'bg-blue-100' :
                          tx.type === 'Charity Donation' ? 'bg-green-100' :
                          tx.type === 'Giveaway Prize' ? 'bg-purple-100' :
                          'bg-emerald-100'
                        }`}>
                          <span className={`text-sm ${
                            tx.type === 'Gift Sent' ? 'text-blue-600' :
                            tx.type === 'Charity Donation' ? 'text-green-600' :
                            tx.type === 'Giveaway Prize' ? 'text-purple-600' :
                            'text-[#0FA47A]'
                          }`}>
                            {tx.type === 'Gift Sent' ? '🎁' :
                             tx.type === 'Charity Donation' ? '❤️' :
                             tx.type === 'Giveaway Prize' ? '🏆' : '📥'}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {tx.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        ${tx.amount} {tx.currency}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-500 font-mono">
                        {tx.recipient}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        tx.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(tx.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href={`https://polygonscan.com/tx/${tx.hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0FA47A] hover:text-[#16BFA8] font-mono"
                      >
                        {tx.hash}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TransactionsPage;
