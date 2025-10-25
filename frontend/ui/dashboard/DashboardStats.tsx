import React from 'react';

interface StatCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
  description: string;
}

const stats: StatCard[] = [
  {
    title: 'Total Gifts Sent',
    value: '1,234',
    change: '+12.5%',
    changeType: 'positive',
    icon: '🎁',
    description: 'vs last month'
  },
  {
    title: 'Total Claimed',
    value: '1,089',
    change: '+8.2%',
    changeType: 'positive',
    icon: '✅',
    description: 'vs last month'
  },
  {
    title: 'Total Raised',
    value: '$45,678',
    change: '+15.3%',
    changeType: 'positive',
    icon: '💰',
    description: 'charity + projects'
  },
  {
    title: 'Total Spent/Converted',
    value: '$23,456',
    change: '+5.7%',
    changeType: 'positive',
    icon: '💳',
    description: 'fiat + bills + airtime'
  }
];

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
              </div>
              <div className="mb-2">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="flex items-center space-x-1">
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' :
                  stat.changeType === 'negative' ? 'text-red-600' :
                  'text-gray-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500">{stat.description}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
