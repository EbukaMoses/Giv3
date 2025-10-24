import React from 'react';

interface ChartData {
  month: string;
  gifts: number;
  raised: number;
  recipients: number;
}

const chartData: ChartData[] = [
  { month: 'Jan', gifts: 120, raised: 4500, recipients: 45 },
  { month: 'Feb', gifts: 135, raised: 5200, recipients: 52 },
  { month: 'Mar', gifts: 148, raised: 4800, recipients: 48 },
  { month: 'Apr', gifts: 162, raised: 6100, recipients: 61 },
  { month: 'May', gifts: 175, raised: 5800, recipients: 58 },
  { month: 'Jun', gifts: 190, raised: 7200, recipients: 72 },
];

const DashboardChart: React.FC = () => {
  const maxGifts = Math.max(...chartData.map(d => d.gifts));
  const maxRaised = Math.max(...chartData.map(d => d.raised));
  const maxRecipients = Math.max(...chartData.map(d => d.recipients));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Gifts Over Time */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Gifts Sent Over Time</h3>
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Last 6 months</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>
        <div className="h-64 flex items-end justify-between space-x-2">
          {chartData.map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full flex flex-col items-center space-y-2 mb-2">
                <div
                  className="w-full bg-gradient-to-t from-orange-400 to-orange-500 rounded-t-sm transition-all duration-300 hover:from-orange-500 hover:to-orange-600"
                  style={{ height: `${(data.gifts / maxGifts) * 200}px`, minHeight: '8px' }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 font-medium">{data.month}</span>
              <span className="text-xs text-gray-700 font-semibold">{data.gifts}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Funds Raised Over Time */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Funds Raised Over Time</h3>
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Last 6 months</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>
        <div className="h-64 flex items-end justify-between space-x-2">
          {chartData.map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full flex flex-col items-center space-y-2 mb-2">
                <div
                  className="w-full bg-gradient-to-t from-green-400 to-green-500 rounded-t-sm transition-all duration-300 hover:from-green-500 hover:to-green-600"
                  style={{ height: `${(data.raised / maxRaised) * 200}px`, minHeight: '8px' }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 font-medium">{data.month}</span>
              <span className="text-xs text-gray-700 font-semibold">${(data.raised / 1000).toFixed(1)}k</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recipients Growth */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recipients Helped</h3>
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Last 6 months</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>
        <div className="h-64 flex items-end justify-between space-x-2">
          {chartData.map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full flex flex-col items-center space-y-2 mb-2">
                <div
                  className="w-full bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm transition-all duration-300 hover:from-blue-500 hover:to-blue-600"
                  style={{ height: `${(data.recipients / maxRecipients) * 200}px`, minHeight: '8px' }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 font-medium">{data.month}</span>
              <span className="text-xs text-gray-700 font-semibold">{data.recipients}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gift Categories */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Gift Categories</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Personal Gifts</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">45%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Charity</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">25%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Events</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">15%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Other</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">15%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
