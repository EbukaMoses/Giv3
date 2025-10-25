import React from 'react';
import { DashboardLayout } from '@/ui/dashboard';

const ConvertPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Convert to Fiat</h1>
          <p className="text-emerald-100">
            Convert your USDT/USDC to local currency and withdraw to your bank account.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Conversion Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Convert Crypto</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  From Token
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white">
                  <option>USDT</option>
                  <option>USDC</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount to Convert
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="1000"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                  />
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white">
                    <option>USDT</option>
                    <option>USDC</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  To Currency
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent">
                  <option>USD - US Dollar</option>
                  <option>NGN - Nigerian Naira</option>
                  <option>GHS - Ghanaian Cedi</option>
                  <option>KES - Kenyan Shilling</option>
                </select>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-800">Exchange Rate:</span>
                  <span className="font-medium text-gray-900">1 USDT = 1.00 USD</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-800">You&apos;ll receive:</span>
                  <span className="font-medium text-gray-900">$1,000 USD</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-800">Fee:</span>
                  <span className="font-medium text-gray-900">$5.00 (0.5%)</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Convert & Withdraw
              </button>
            </form>
          </div>

          {/* Bank Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Bank Account Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bank Name
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white">
                  <option>Select your bank...</option>
                  <option>Access Bank</option>
                  <option>GTBank</option>
                  <option>First Bank</option>
                  <option>Zenith Bank</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Number
                </label>
                <input
                  type="text"
                  placeholder="1234567890"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-gray-800">
                  ✅ Bank details verified. Funds will be sent to this account.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0FA47A] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#16BFA8] transition-colors"
              >
                Convert & Withdraw
              </button>
            </form>
          </div>
        </div>

        {/* Supported Providers */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Supported Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-2xl">T</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Transak</h3>
              <p className="text-sm text-gray-600">Global fiat on-ramp</p>
              <p className="text-xs text-gray-500 mt-1">0.5% fee</p>
            </div>

            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-2xl">B</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Bitnob</h3>
              <p className="text-sm text-gray-600">African markets</p>
              <p className="text-xs text-gray-500 mt-1">0.75% fee</p>
            </div>

            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-2xl">P</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Paychant</h3>
              <p className="text-sm text-gray-600">Multi-currency support</p>
              <p className="text-xs text-gray-500 mt-1">0.6% fee</p>
            </div>
          </div>
        </div>

        {/* Conversion History */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Conversions</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">💱</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">200 USDT → USD</p>
                  <p className="text-sm text-gray-500">Access Bank • ****7890</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">$200 USD</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">💱</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">500 USDT → NGN</p>
                  <p className="text-sm text-gray-500">GTBank • ****1234</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">₦325,000 NGN</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConvertPage;
