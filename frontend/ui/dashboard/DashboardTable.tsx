import React from 'react';

interface Transaction {
  id: string;
  type: 'gift' | 'fundraise' | 'received';
  title: string;
  amount: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  recipient?: string;
  donor?: string;
}

const recentTransactions: Transaction[] = [
  {
    id: 'TXN001',
    type: 'gift',
    title: 'Birthday Gift for Sarah',
    amount: '$50.00',
    date: '2024-01-15',
    status: 'completed',
    recipient: 'Sarah Johnson'
  },
  {
    id: 'TXN002',
    type: 'fundraise',
    title: 'Medical Emergency Fund',
    amount: '$2,500.00',
    date: '2024-01-14',
    status: 'completed',
    donor: 'Anonymous Donor'
  },
  {
    id: 'TXN003',
    type: 'received',
    title: 'Gift from Mike',
    amount: '$25.00',
    date: '2024-01-13',
    status: 'completed',
    donor: 'Mike Wilson'
  },
  {
    id: 'TXN004',
    type: 'gift',
    title: 'Charity Donation',
    amount: '$100.00',
    date: '2024-01-12',
    status: 'pending',
    recipient: 'Local Food Bank'
  },
  {
    id: 'TXN005',
    type: 'fundraise',
    title: 'Education Fund',
    amount: '$1,200.00',
    date: '2024-01-11',
    status: 'completed',
    donor: 'John Smith'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'failed':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'gift':
      return '🎁';
    case 'fundraise':
      return '💰';
    case 'received':
      return '📥';
    default:
      return '📋';
  }
};

const DashboardTable: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
            View all
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-lg">{getTypeIcon(transaction.type)}</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {transaction.type === 'gift' && transaction.recipient && `To: ${transaction.recipient}`}
                        {transaction.type === 'fundraise' && transaction.donor && `From: ${transaction.donor}`}
                        {transaction.type === 'received' && transaction.donor && `From: ${transaction.donor}`}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">
                    {transaction.amount}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {new Date(transaction.date).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-orange-600 hover:text-orange-900 mr-4">
                    View
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
