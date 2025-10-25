import React from 'react';
import { DashboardLayout } from '@/ui/dashboard';

const GiveawayPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Create Giveaway</h1>
          <p className="text-emerald-100">
            Host crypto giveaways and engage your community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Create Giveaway Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Giveaway Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Giveaway Title
                </label>
                <input
                  type="text"
                  placeholder="Enter giveaway title..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your giveaway and what participants need to do..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total Prize Pool
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
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0FA47A] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#16BFA8] transition-colors"
              >
                Create Giveaway
              </button>
            </form>
          </div>

          {/* Giveaway Preview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Giveaway Preview</h2>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0FA47A] to-[#16BFA8] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Win $1000 in USDT!</h3>
              <p className="text-emerald-700 text-sm mb-4">
                Join our community giveaway and stand a chance to win amazing prizes!
              </p>
              <div className="flex justify-between text-sm text-emerald-600 mb-2">
                <span>📅 7 days left</span>
                <span>👥 150 participants</span>
              </div>
              <div className="w-full bg-emerald-200 rounded-full h-2">
                <div className="bg-[#0FA47A] h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Share Giveaway */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Share Your Giveaway</h2>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value="https://giv3.app/giveaway/crypto-winter-survival"
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
                <button className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GiveawayPage;
