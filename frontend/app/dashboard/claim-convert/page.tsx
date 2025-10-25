import React from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/ui/dashboard';
import { CreditCard, Banknote, Zap, Phone } from 'lucide-react';

const ClaimConvertPage: React.FC = () => {
  const convertOptions = [
    {
      title: 'Claim Gift',
      description: 'Redeem gift codes and choose how to use your funds',
      href: '/dashboard/claim-convert/claim',
      icon: CreditCard,
      color: 'bg-[#0FA47A]',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600'
    },
    {
      title: 'Convert to Fiat',
      description: 'Convert USDT/USDC to local currency',
      href: '/dashboard/claim-convert/convert',
      icon: Banknote,
      color: 'bg-[#0FA47A]',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600'
    },
    {
      title: 'Pay Bills',
      description: 'Pay utility bills directly from crypto balance',
      href: '/dashboard/claim-convert/bills',
      icon: Zap,
      color: 'bg-[#0FA47A]',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600'
    },
    {
      title: 'Buy Airtime/Data',
      description: 'Purchase mobile airtime and data bundles',
      href: '/dashboard/claim-convert/airtime',
      icon: Phone,
      color: 'bg-[#0FA47A]',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Claim & Convert</h1>
          <p className="text-emerald-100">
            Redeem gifts, convert crypto to fiat, and pay bills with your digital assets.
          </p>
        </div>

        {/* Convert Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {convertOptions.map((option) => (
            <Link
              key={option.href}
              href={option.href}
              className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-[#0FA47A] transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${option.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <option.icon className={`w-6 h-6 ${option.textColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0FA47A] transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {option.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Conversions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Gift Claimed</p>
                  <p className="text-sm text-gray-500">100 USDT from John Doe</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">+100 USDT</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Banknote className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Converted to Fiat</p>
                  <p className="text-sm text-gray-500">200 USDT → $200 USD</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">-$200 USDT</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Bill Payment</p>
                  <p className="text-sm text-gray-500">Electricity bill - $50</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">-$50 USDT</p>
                <p className="text-sm text-gray-500">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClaimConvertPage;
