'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  name: string;
  href: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { name: 'Overview', href: '/dashboard', icon: '📊' },
  { name: 'My Gifts', href: '/dashboard/gifts', icon: '🎁' },
  { name: 'My Campaigns', href: '/dashboard/campaigns', icon: '💰' },
  { name: 'Fundraising', href: '/dashboard/fundraising', icon: '📈' },
  { name: 'Transactions', href: '/dashboard/transactions', icon: '💳' },
  { name: 'Analytics', href: '/dashboard/analytics', icon: '📉' },
  { name: 'Recipients', href: '/dashboard/recipients', icon: '👥' },
  { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
  { name: 'Help & Support', href: '/dashboard/support', icon: '❓' },
];

const DashboardSidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Giv3</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  pathname === item.href
                    ? 'bg-orange-100 text-orange-700 border-r-2 border-orange-500'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-gray-200">
        <Link href="/dashboard/profile" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gray-50">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">JD</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
