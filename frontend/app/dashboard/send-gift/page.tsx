import React from 'react';
import { DashboardLayout } from '@/ui/dashboard';

const SendGiftPage: React.FC = () => {
  const cardTemplates = [
    { id: 'birthday', name: 'Birthday', icon: '🎂', color: 'from-[#0FA47A] to-[#16BFA8]' },
    { id: 'congrats', name: 'Congratulations', icon: '🎉', color: 'from-emerald-400 to-emerald-500' },
    { id: 'thanks', name: 'Thank You', icon: '🙏', color: 'from-emerald-500 to-emerald-600' },
    { id: 'holiday', name: 'Holiday', icon: '🎄', color: 'from-emerald-600 to-emerald-700' },
    { id: 'graduation', name: 'Graduation', icon: '🎓', color: 'from-emerald-500 to-emerald-600' },
    { id: 'wedding', name: 'Wedding', icon: '💒', color: 'from-emerald-400 to-emerald-500' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Send Gift</h1>
          <p className="text-emerald-100">
            Create and send personalized on-chain gifts with beautiful card templates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gift Creation Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Create Gift</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Token
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white">
                  <option>USDT</option>
                  <option>USDC</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Add a personal message..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA47A] focus:border-transparent bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Template
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {cardTemplates.map((template) => (
                    <button
                      key={template.id}
                      type="button"
                      className="p-3 border border-gray-300 rounded-lg hover:border-[#0FA47A] transition-colors text-center bg-white"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${template.color} rounded-lg mx-auto mb-1 flex items-center justify-center`}>
                        <span className="text-white text-sm">{template.icon}</span>
                      </div>
                      <span className="text-xs text-gray-700">{template.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0FA47A] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#16BFA8] transition-colors"
              >
                Generate Gift
              </button>
            </form>
          </div>

          {/* Gift Preview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Gift Preview</h2>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0FA47A] to-[#16BFA8] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🎁</span>
              </div>
              <div className="text-emerald-800 font-bold text-2xl mb-1">$100.00</div>
              <div className="text-emerald-600 text-sm mb-2">USDT Gift Card</div>
              <div className="text-emerald-700 text-sm mb-4">Congratulations on your graduation! 🎓</div>

              <div className="bg-white rounded-lg p-4 text-left">
                <div className="text-sm text-gray-600 mb-1">Gift Code:</div>
                <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                  GIV3-ABC123-XYZ789
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                Copy Gift Link
              </button>
              <button className="w-full bg-[#0FA47A] text-white py-2 px-4 rounded-lg hover:bg-[#16BFA8] transition-colors">
                Send via Email
              </button>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-emerald-600">1️⃣</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Connect Wallet</h3>
              <p className="text-sm text-gray-600">Sign transaction to lock funds</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-emerald-600">2️⃣</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Generate Code</h3>
              <p className="text-sm text-gray-600">Get unique claim code & link</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-emerald-600">3️⃣</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Share & Claim</h3>
              <p className="text-sm text-gray-600">Recipient claims via multiple options</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SendGiftPage;
