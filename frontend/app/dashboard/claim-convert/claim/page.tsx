import React from 'react';
import { DashboardLayout } from '@/ui/dashboard';

const ClaimGiftPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Claim Gift</h1>
          <p className="text-emerald-100">
            Redeem gift codes and choose how to use your funds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Claim Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Gift Code</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gift Code or Link
                </label>
                <input
                  type="text"
                  placeholder="Enter your gift code or paste the link..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
                <p className="text-xs text-gray-500 mt-1">
                  You can enter a gift code or paste the full gift link
                </p>
              </div>

              <button
                type="button"
                className="w-full bg-[#0FA47A] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#16BFA8] transition-colors"
              >
                Verify Gift Code
              </button>
            </form>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Enter Gift Code</h3>
                  <p className="text-sm text-gray-600">Input your unique gift code or link</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Verify & Preview</h3>
                  <p className="text-sm text-gray-600">See gift details and verify authenticity</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Choose Redemption</h3>
                  <p className="text-sm text-gray-600">Select how you want to use your funds</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redemption Options Preview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Redemption Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:border-[#0FA47A] transition-colors bg-white">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-emerald-600 text-xl">👛</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Claim to Wallet</h3>
              <p className="text-sm text-gray-600">Send crypto directly to your wallet</p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:border-[#0FA47A] transition-colors bg-white">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-emerald-600 text-xl">🏦</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Claim to Bank</h3>
              <p className="text-sm text-gray-600">Convert to fiat and send to bank account</p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:border-[#0FA47A] transition-colors bg-white">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-emerald-600 text-xl">⚡</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Pay Bills</h3>
              <p className="text-sm text-gray-600">Use funds to pay utility bills</p>
            </div>
          </div>
        </div>

        {/* Recent Claims */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Claims</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600">🎁</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Gift from John Doe</p>
                  <p className="text-sm text-gray-500">100 USDT • Claimed to wallet</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">+100 USDT</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600">🏦</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Gift from Sarah Smith</p>
                  <p className="text-sm text-gray-500">250 USDT • Converted to bank</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">$250 USD</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClaimGiftPage;
