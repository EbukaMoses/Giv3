import React from 'react';
import { DashboardLayout } from '@/ui/dashboard';

const BillsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Pay Bills</h1>
          <p className="text-emerald-100">
            Pay utility bills directly from your crypto balance using our partner services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bill Payment Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pay Utility Bill</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white">
                  <option>Electricity</option>
                  <option>TV/Cable</option>
                  <option>Internet</option>
                  <option>Water</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Provider
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white">
                  <option>IKEDC - Ikeja Electric</option>
                  <option>EKEDC - Eko Electric</option>
                  <option>PHEDC - Port Harcourt Electric</option>
                  <option>DStv</option>
                  <option>GOtv</option>
                  <option>Spectranet</option>
                  <option>Smile</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account/Meter Number
                </label>
                <input
                  type="text"
                  placeholder="Enter account or meter number..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount (USDT)
                </label>
                <input
                  type="number"
                  placeholder="50"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-800">Amount in USD:</span>
                  <span className="font-medium text-gray-900">$50.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-800">Processing Fee:</span>
                  <span className="font-medium text-gray-900">$0.50</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-gray-800">Total:</span>
                  <span className="text-gray-900">$50.50 USDT</span>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#0FA47A] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#16BFA8] transition-colors">
                Pay Bill
              </button>
            </form>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-[#0FA47A] hover:bg-emerald-50 transition-colors">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">⚡</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-[#0FA47A] mb-1">Electricity</p>
                  <p className="text-sm text-gray-500">Pay power bills</p>
                </div>
              </button>

              <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-[#0FA47A] hover:bg-emerald-50 transition-colors">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">📺</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-[#0FA47A] mb-1">TV/Cable</p>
                  <p className="text-sm text-gray-500">DStv, GOtv, Startimes</p>
                </div>
              </button>

              <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-[#0FA47A] hover:bg-emerald-50 transition-colors">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">🌐</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-[#0FA47A] mb-1">Internet</p>
                  <p className="text-sm text-gray-500">Data & broadband</p>
                </div>
              </button>

              <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-[#0FA47A] hover:bg-emerald-50 transition-colors">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600">💧</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-[#0FA47A] mb-1">Water</p>
                  <p className="text-sm text-gray-500">Water utility bills</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bill Payment History */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Bill Payments</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">⚡</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Electricity - IKEDC</p>
                  <p className="text-sm text-gray-500">Meter: 123456789 • $75 paid</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">-$75 USDT</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">📺</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">DStv Subscription</p>
                  <p className="text-sm text-gray-500">Account: DSTV12345 • Premium package</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">-$25 USDT</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">🌐</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Spectranet Internet</p>
                  <p className="text-sm text-gray-500">50GB data plan • 30 days</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">-$15 USDT</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Providers */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Supported Bill Providers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 border border-gray-200 rounded-lg">
              <span className="text-2xl mb-2 block">⚡</span>
              <p className="font-medium text-gray-900 text-sm">Electricity</p>
              <p className="text-xs text-gray-500">All DISCOs</p>
            </div>
            <div className="text-center p-3 border border-gray-200 rounded-lg">
              <span className="text-2xl mb-2 block">📺</span>
              <p className="font-medium text-gray-900 text-sm">TV/Cable</p>
              <p className="text-xs text-gray-500">DStv, GOtv</p>
            </div>
            <div className="text-center p-3 border border-gray-200 rounded-lg">
              <span className="text-2xl mb-2 block">🌐</span>
              <p className="font-medium text-gray-900 text-sm">Internet</p>
              <p className="text-xs text-gray-500">ISPs & Data</p>
            </div>
            <div className="text-center p-3 border border-gray-200 rounded-lg">
              <span className="text-2xl mb-2 block">💧</span>
              <p className="font-medium text-gray-900 text-sm">Water</p>
              <p className="text-xs text-gray-500">Utility bills</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BillsPage;
