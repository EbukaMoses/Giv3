import React from 'react';
import { DashboardLayout } from '@/ui/dashboard';

const CharityPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Charity & Crowdfunding</h1>
          <p className="text-emerald-100">
            Create fundraising campaigns and accept crypto donations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Create Campaign Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Campaign Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Campaign Title
                </label>
                <input
                  type="text"
                  placeholder="Help us build a school..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell your story and explain why people should support your cause..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target Amount
                  </label>
                  <input
                    type="number"
                    placeholder="10000"
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Campaign Image (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#0FA47A] transition-colors">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-emerald-600">📷</span>
                  </div>
                  <p className="text-emerald-600 text-sm">Upload campaign image</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] text-white font-semibold py-2 px-4 rounded-lg hover:from-[#16BFA8] hover:to-[#0FA47A] transition-all duration-300"
              >
                Create Campaign
              </button>
            </form>
          </div>

          {/* Campaign Preview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Campaign Preview</h2>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0FA47A] to-[#16BFA8] rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-2xl">🏫</span>
                </div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-1">Help Build a School</h3>
                <p className="text-emerald-700 text-sm">Education for every child</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-600">Raised: $6,500</span>
                  <span className="text-emerald-600">Target: $10,000</span>
                </div>
                <div className="w-full bg-emerald-200 rounded-full h-2">
                  <div className="bg-[#0FA47A] h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-emerald-600">
                  <span>65% funded</span>
                  <span>23 days left</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-emerald-200">
                <div className="text-center">
                  <div className="text-emerald-800 font-semibold">$6,500 raised</div>
                  <div className="text-emerald-600 text-sm">by 45 donors</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Share Campaign */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Share Your Campaign</h2>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value="https://giv3.app/campaign/school-project-2024"
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
                <button className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors">
                  Copy Link
                </button>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-[#38BDF8] text-white rounded-lg hover:bg-blue-500 transition-colors">
                Share on Twitter
              </button>
              <button className="px-4 py-2 bg-[#0FA47A] text-white rounded-lg hover:bg-[#16BFA8] transition-colors">
                Share on Telegram
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CharityPage;
