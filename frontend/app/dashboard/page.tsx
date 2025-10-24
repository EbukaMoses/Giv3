import React from 'react';
import { DashboardLayout, DashboardStats, DashboardChart, DashboardTable } from '@/ui/dashboard';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Welcome back, John! 👋</h1>
              <p className="text-orange-100">
                Here&apos;s what&apos;s happening with your gifts and campaigns today.
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                Quick Actions
              </button>
              <button className="bg-white text-orange-500 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                View Reports
              </button>
            </div>
          </div>
        </div>



        {/* Stats Cards */}
        <DashboardStats />

       
        <DashboardChart />

       
        <DashboardTable />

        {/* Quick Actions Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Create New Gift */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Send a Gift</h3>
                <p className="text-sm text-gray-500">Create and send a personalized gift</p>
              </div>
            </div>
          </div>

          {/* Start Campaign */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Start Fundraising</h3>
                <p className="text-sm text-gray-500">Create a campaign to raise funds</p>
              </div>
            </div>
          </div>

          {/* Find Recipients */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Find Recipients</h3>
                <p className="text-sm text-gray-500">Discover people who need help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;