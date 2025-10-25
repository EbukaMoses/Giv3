import React from 'react';

interface BalanceData {
  category: string;
  amount: number;
  percentage: number;
  color: string;
}

const balanceData: BalanceData[] = [
  { category: 'Personal Gifts', amount: 12500, percentage: 45, color: 'bg-[#0FA47A]' },
  { category: 'Charity & Projects', amount: 15600, percentage: 25, color: 'bg-[#16BFA8]' },
  { category: 'Event Gifting', amount: 8400, percentage: 15, color: 'bg-emerald-500' },
  { category: 'Conversions', amount: 4200, percentage: 10, color: 'bg-emerald-400' },
  { category: 'Other', amount: 1400, percentage: 5, color: 'bg-emerald-300' }
];

const DashboardChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Balance Distribution</h3>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#0FA47A]">
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last year</option>
        </select>
      </div>

      {/* Balance Overview */}
      <div className="mb-6">
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-gray-900">$54,100</div>
          <div className="text-sm text-gray-500">Total Balance</div>
        </div>

        {/* Distribution Chart */}
        <div className="space-y-3">
          {balanceData.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-20 text-sm font-medium text-gray-700">
                {item.category}
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-16 text-right">
                <div className="text-sm font-semibold text-gray-900">
                  ${item.amount.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">
                  {item.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <div className="text-lg font-bold text-[#F59E0B]">+12.5%</div>
          <div className="text-xs text-gray-500">vs last month</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-[#38BDF8]">89%</div>
          <div className="text-xs text-gray-500">claim rate</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
