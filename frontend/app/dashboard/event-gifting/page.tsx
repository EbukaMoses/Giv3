import React from 'react';
import { DashboardLayout } from '@/ui/dashboard';

const EventGiftingPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Employee & Event Gifting</h1>
          <p className="text-emerald-100">
            Send gifts to multiple recipients with CSV upload or manual entry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload CSV Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Bulk Upload</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-emerald-600 text-2xl">📁</span>
              </div>
              <p className="text-emerald-600 mb-4">
                Upload a CSV file with recipient details
              </p>
              <button className="bg-[#0FA47A] text-white px-4 py-2 rounded-lg hover:bg-[#16BFA8] transition-colors">
                Choose CSV File
              </button>
              <p className="text-xs text-emerald-500 mt-2">
                CSV format: email, name, amount
              </p>
            </div>
          </div>

          {/* Manual Entry Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Manual Entry</h2>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="recipient@example.com"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
                <button className="px-3 py-2 text-gray-500 hover:text-[#0FA47A] hover:bg-emerald-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <button className="w-full bg-emerald-100 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-200 transition-colors">
                + Add Another Recipient
              </button>
            </div>
          </div>
        </div>

        {/* Gift Configuration */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Gift Configuration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Amount
              </label>
              <input
                type="number"
                placeholder="1000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white">
                <option>USDT</option>
                <option>USDC</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount Per Person
              </label>
              <input
                type="number"
                placeholder="100"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              General Message (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Thank you for your hard work this quarter!"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
            />
          </div>
        </div>

        {/* Send Gifts Button */}
        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] text-white font-semibold py-3 px-8 rounded-lg hover:from-[#16BFA8] hover:to-[#0FA47A] transition-all duration-300">
            Send Gifts to All Recipients
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EventGiftingPage;
