import React from 'react';
import { DashboardLayout } from '@/ui/dashboard';

const AirtimePage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Buy Airtime & Data</h1>
          <p className="text-emerald-100">
            Purchase mobile airtime and data bundles directly from your crypto balance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Airtime Purchase Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Buy Airtime</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Network
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white">
                  <option>MTN</option>
                  <option>Airtel</option>
                  <option>Glo</option>
                  <option>9mobile</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="08012345678"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount (USDT)
                </label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <button type="button" className="px-3 py-2 border border-gray-300 rounded-lg hover:border-[#0FA47A] hover:bg-emerald-50 transition-colors">
                    $5
                  </button>
                  <button type="button" className="px-3 py-2 border border-gray-300 rounded-lg hover:border-[#0FA47A] hover:bg-emerald-50 transition-colors">
                    $10
                  </button>
                  <button type="button" className="px-3 py-2 border border-gray-300 rounded-lg hover:border-[#0FA47A] hover:bg-emerald-50 transition-colors">
                    $20
                  </button>
                </div>
                <input
                  type="number"
                  placeholder="Enter custom amount..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-800">Airtime Value:</span>
                  <span className="font-medium text-gray-900">$10.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-800">Network Fee:</span>
                  <span className="font-medium text-gray-900">$0.20</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-gray-800">Total:</span>
                  <span className="text-gray-900">$10.20 USDT</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Buy Airtime
              </button>
            </form>
          </div>

          {/* Data Purchase Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Buy Data</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Network
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white">
                  <option>MTN</option>
                  <option>Airtel</option>
                  <option>Glo</option>
                  <option>9mobile</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="08012345678"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data Plan
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white">
                  <option>1GB - 30 days - $3</option>
                  <option>2GB - 30 days - $5</option>
                  <option>5GB - 30 days - $10</option>
                  <option>10GB - 30 days - $18</option>
                  <option>20GB - 30 days - $30</option>
                  <option>50GB - 30 days - $50</option>
                </select>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-800">Data Plan:</span>
                  <span className="font-medium text-gray-900">5GB - 30 days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-800">Cost:</span>
                  <span className="font-medium text-gray-900">$10.00</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-gray-800">Total:</span>
                  <span className="text-gray-900">$10.00 USDT</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0FA47A] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#16BFA8] transition-colors"
              >
                Buy Data Plan
              </button>
            </form>
          </div>
        </div>

        {/* Popular Plans */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Data Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:border-[#0FA47A] transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Daily Plan</span>
                <span className="text-sm text-gray-500">MTN</span>
              </div>
              <div className="text-2xl font-bold text-gray-700 mb-1">500MB</div>
              <div className="text-sm text-gray-600 mb-2">Valid for 24 hours</div>
              <div className="text-lg font-semibold text-[#0FA47A]">$1.50</div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:border-[#0FA47A] transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Weekly Plan</span>
                <span className="text-sm text-gray-500">Airtel</span>
              </div>
              <div className="text-2xl font-bold text-gray-700 mb-1">2GB</div>
              <div className="text-sm text-gray-600 mb-2">Valid for 7 days</div>
              <div className="text-lg font-semibold text-[#0FA47A]">$3.00</div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:border-[#0FA47A] transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Monthly Plan</span>
                <span className="text-sm text-gray-500">Glo</span>
              </div>
              <div className="text-2xl font-bold text-gray-700 mb-1">10GB</div>
              <div className="text-sm text-gray-600 mb-2">Valid for 30 days</div>
              <div className="text-lg font-semibold text-[#0FA47A]">$15.00</div>
            </div>
          </div>
        </div>

        {/* Purchase History */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Purchases</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">📱</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">MTN Airtime</p>
                  <p className="text-sm text-gray-500">08012345678 • $10</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">-$10 USDT</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600">🌐</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Airtel Data - 5GB</p>
                  <p className="text-sm text-gray-500">08098765432 • 30 days</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">-$10 USDT</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">📱</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Glo Airtime</p>
                  <p className="text-sm text-gray-500">07055556666 • $5</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">-$5 USDT</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Networks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Supported Networks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 border border-gray-200 rounded-lg">
              <span className="text-2xl mb-2 block">🟡</span>
              <p className="font-medium text-gray-900 text-sm">MTN</p>
              <p className="text-xs text-gray-500">Nigeria</p>
            </div>
            <div className="text-center p-3 border border-gray-200 rounded-lg">
              <span className="text-2xl mb-2 block">🔴</span>
              <p className="font-medium text-gray-900 text-sm">Airtel</p>
              <p className="text-xs text-gray-500">Nigeria</p>
            </div>
            <div className="text-center p-3 border border-gray-200 rounded-lg">
              <span className="text-2xl mb-2 block">🟢</span>
              <p className="font-medium text-gray-900 text-sm">Glo</p>
              <p className="text-xs text-gray-500">Nigeria</p>
            </div>
            <div className="text-center p-3 border border-gray-200 rounded-lg">
              <span className="text-2xl mb-2 block">🟣</span>
              <p className="font-medium text-gray-900 text-sm">9mobile</p>
              <p className="text-xs text-gray-500">Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AirtimePage;
