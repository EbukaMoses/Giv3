import React from 'react';
import { DashboardLayout } from '@/ui/dashboard';

const SupportPage: React.FC = () => {
  const faqs = [
    {
      question: 'How do I connect my wallet?',
      answer: 'Click the "Connect Wallet" button in the top right corner and select your preferred wallet (MetaMask, WalletConnect, etc.). Follow the prompts to connect your wallet to Giv3.'
    },
    {
      question: 'What cryptocurrencies are supported?',
      answer: 'Giv3 currently supports USDT and USDC on the Polygon network. More currencies and networks will be added in future updates.'
    },
    {
      question: 'How do I create a gift?',
      answer: 'Navigate to the "Send Gift" page, enter the recipient address, amount, currency, and optional message. Click "Generate Gift Code" and share it with the recipient.'
    },
    {
      question: 'Can I track my transactions?',
      answer: 'Yes! Visit the "Transactions" page to view all your activity. You can also click on transaction hashes to view them on PolygonScan.'
    },
    {
      question: 'How do I withdraw funds from a campaign?',
      answer: 'Go to your campaign dashboard, click "Withdraw Funds", and confirm the transaction in your wallet. Funds will be sent to your connected wallet address.'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Help & Support</h1>
          <p className="text-emerald-100">
            Find answers to common questions and get help with Giv3.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Support */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600">📧</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email Support</p>
                  <p className="text-sm text-gray-500">support@giv3.app</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600">💬</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Discord</p>
                  <p className="text-sm text-gray-500">Join our community</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600">📖</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Documentation</p>
                  <p className="text-sm text-gray-500">Read our guides</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-[#0FA47A] text-white py-2 px-4 rounded-lg hover:bg-[#16BFA8] transition-colors">
                Start Live Chat
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Getting Started Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#0FA47A] text-2xl">1️⃣</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Connect Wallet</h3>
              <p className="text-sm text-gray-600">
                Connect your Web3 wallet to start using Giv3
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#0FA47A] text-2xl">2️⃣</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Create Campaign</h3>
              <p className="text-sm text-gray-600">
                Set up your gift or fundraising campaign
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#0FA47A] text-2xl">3️⃣</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Share & Track</h3>
              <p className="text-sm text-gray-600">
                Share your campaign and monitor progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SupportPage;
