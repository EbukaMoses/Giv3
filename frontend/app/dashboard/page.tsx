import React from 'react';
import Link from 'next/link';
import { DashboardLayout, DashboardStats, DashboardChart, DashboardTable } from '@/ui/dashboard';
import { Send, CreditCard, Gift, Coins } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const quickActions = [
    {
      title: 'Send Gift',
      description: 'Create and send a personalized gift',
      href: '/dashboard/send-gift',
      icon: Send,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      title: 'Claim Gift',
      description: 'Redeem your gift codes',
      href: '/dashboard/claim-convert/claim',
      icon: CreditCard,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      title: 'Create Giveaway',
      description: 'Host a public giveaway',
      href: '/dashboard/giveaway',
      icon: Gift,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      title: 'Convert Funds',
      description: 'Convert crypto to fiat',
      href: '/dashboard/claim-convert/convert',
      icon: Coins,
      color: 'bg-emerald-100 text-emerald-600'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Welcome back, John! 👋</h1>
              <p className="text-emerald-100">
                Here&apos;s what&apos;s happening with your gifts and campaigns today.
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                Quick Actions
              </button>
              <button className="bg-white text-[#0FA47A] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                View Reports
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <DashboardStats />

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="group flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-[#0FA47A] hover:shadow-md transition-all duration-200 bg-white"
              >
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-[#0FA47A] transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {action.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity & Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DashboardTable />
          <DashboardChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;