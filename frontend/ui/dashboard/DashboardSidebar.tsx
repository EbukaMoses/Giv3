'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Send,
  Users,
  Gift,
  Heart,
  FolderOpen,
  Receipt,
  Coins,
  Settings,
  HelpCircle,
  LogOut,
  CreditCard,
  Banknote,
  Phone,
  Zap
} from 'lucide-react';

interface MenuItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const menuItems: MenuItem[] = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Send Gift', href: '/dashboard/send-gift', icon: Send },
  { name: 'Employee / Event Gifting', href: '/dashboard/event-gifting', icon: Users },
  { name: 'Giveaway', href: '/dashboard/giveaway', icon: Gift },
  { name: 'Charity / Crowdfunding', href: '/dashboard/charity', icon: Heart },
  { name: 'My Projects', href: '/dashboard/projects', icon: FolderOpen },
  { name: 'Transactions', href: '/dashboard/transactions', icon: Receipt },
  {
    name: 'Claim & Convert',
    href: '/dashboard/claim-convert',
    icon: Coins,
    badge: 'NEW'
  },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

const claimConvertItems: MenuItem[] = [
  { name: 'Claim Gift', href: '/dashboard/claim-convert/claim', icon: CreditCard },
  { name: 'Convert to Fiat', href: '/dashboard/claim-convert/convert', icon: Banknote },
  { name: 'Pay Bills', href: '/dashboard/claim-convert/bills', icon: Zap },
  { name: 'Buy Airtime/Data', href: '/dashboard/claim-convert/airtime', icon: Phone },
];

const DashboardSidebar: React.FC = () => {
  const pathname = usePathname();

  const isClaimConvertSection = pathname.startsWith('/dashboard/claim-convert');
  const isActiveClaimConvertItem = (href: string) => pathname === href;

  return (
    <div className="fixed left-0 top-0 w-64 bg-[#111827] shadow-lg border-r border-gray-800 flex flex-col h-screen z-50">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-gray-800">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-bold text-white">Giv3</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${
                  pathname === item.href
                    ? 'bg-[#0FA47A] text-white border-r-2 border-[#16BFA8]'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
                {item.badge && (
                  <span className="bg-[#F59E0B] text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>

              {/* Claim & Convert Sub-menu */}
              {item.name === 'Claim & Convert' && isClaimConvertSection && (
                <ul className="ml-8 mt-2 space-y-1">
                  {claimConvertItems.map((subItem) => (
                    <li key={subItem.href}>
                      <Link
                        href={subItem.href}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                          isActiveClaimConvertItem(subItem.href)
                            ? 'bg-[#0FA47A] text-white border-r-2 border-[#16BFA8]'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                        }`}
                      >
                        <subItem.icon className="w-4 h-4" />
                        <span className="font-medium text-xs">{subItem.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <Link
          href="/dashboard/support"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="font-medium text-sm">Help & Support</span>
        </Link>

        <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 w-full">
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
