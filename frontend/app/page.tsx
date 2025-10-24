'use client'
import Hero from "@/ui/Hero";
import HeadingOne from "@/ui/HeadingOne";
import Container from "@/ui/Container";
import { useState } from "react";
import Button from "@/ui/Button";
import HeadingTwo from "@/ui/HeadingTwo";
import Card from "@/ui/Card";

interface GiftCategory {
  title: string;
  icon: string;
}
interface forGift {
  img: string;
  title: string;
  desc: string;
  btnTitle: string;
  path: string;
}
interface forFund {
  img: string;
  title: string;
  desc: string;
  btnTitle: string;
  path: string;
}

export default function Home() {
  const [toggleBtn, setToggleBtn] = useState(true)

  const giftCat: GiftCategory[] = [
    { title: "Gift Love One", icon: "🎁" },
    { title: "Gift Employee", icon: "🎁" },
    { title: "Gift Event Attendees", icon: "🎁" },
    { title: "Do Giveaway", icon: "🎁" },
    { title: "Gift Charity", icon: "🎁" },
    { title: "Give Anonymously", icon: "🎁" },
    { title: "Crowdfund Someone", icon: "🎁" },
    { title: "Fund Project", icon: "🎁" },
    { title: "Fund Startup", icon: "🎁" },
    { title: "Fund Non Profit", icon: "🎁" },
  ];

  const howItWorksForGift: forGift[] = [
    { img: "/hero.jpg", title: "Find clients and remote jobs", desc: "Create your profile to highlight your best work and attract top clients.", btnTitle: "Create gift", path: "/" },
    { img: "/hero2.jpg", title: "Submit proposals for work", desc: "Negotiate rates for the projects you want or reply to invites from clients.", btnTitle: "Search for gift", path: "/" },
    { img: "/hero3.jpg", title: "Get paid as you deliver work", desc: "Get paid as you deliver work and get paid as you deliver work.", btnTitle: "Redeem gift", path: "/" },
  ]
  const howItWorksForFund: forFund[] = [
    { img: "/hero3.jpg", title: "Find clients and remote jobs", desc: "Create your profile to highlight your best work and attract top clients.", btnTitle: "Create gift", path: "/" },
    { img: "/hero.jpg", title: "Submit proposals for work", desc: "Negotiate rates for the projects you want or reply to invites from clients.", btnTitle: "Search for gift", path: "/" },
    { img: "/hero2.jpg", title: "Get paid as you deliver work", desc: "Get paid as you deliver work and get paid as you deliver work.", btnTitle: "Redeem gift", path: "/" },
  ]

  const cardData = [
    {
      title: "MARKETPLACE",
      fee: "5% fee after hiring",
      description: "For starting out on our global freelancer marketplace",
      list: [
        "Free to post jobs on our global freelance marketplace",
        "AI-powered features",
        "Collaboration and project tracking tools",
      ],
      btnTitle: "Get Started",
      path: "/"
    },
    {
      title: "Business Plus",
      label: "Popular",
      fee: "10% fee after hiring",
      description: "For growing businesses with premium features and support",
      list: [
        "Access to pre-screened top 1% of talent",
        "Premium customer support 24/7",
        "60 invites per job post",
      ],
      btnTitle: "Get Started",
      path: "/"
    },
    {
      title: "ENTERPRISE",
      fee: "Contact sales",
      description: "For scaling comprehensive solutions to the entire organization",
      list: [
        "Dedicated account and program management",
        "SSO and integrations",
        "Unlimited invites per job",
      ],
      btnTitle: "Get Started",
      path: "/"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Hero />
      <Container className="py-16">
        <HeadingOne title="Gifting millions all over the world" className="mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent" />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 grid-rows-2 gap-6">
          {giftCat.map((item: GiftCategory, index: number) => (
            <div key={index} className="group">
              <div className="flex flex-col rounded-xl shadow-sm cursor-pointer border border-gray-200 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-300 bg-white p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-gray-800 group-hover:text-orange-600 text-lg font-semibold transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-24 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 p-8 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                    10M+
                  </div>
                  <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">
                    Gifts Sent
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 p-8 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                    $50M+
                  </div>
                  <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">
                    Raised
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 p-8 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                    500K+
                  </div>
                  <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">
                    Recipients
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 p-8 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">
                    Uptime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-16">
        <div className="flex justify-between items-center mt-24 mb-12">
          <HeadingTwo title="How it works" className="" />
          <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full p-1 shadow-sm">
            <button
              className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                toggleBtn
                  ? 'bg-white text-gray-800 shadow-md border border-gray-200'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setToggleBtn(true)}
            >
              For Gift
            </button>
            <button
              className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                !toggleBtn
                  ? 'bg-white text-gray-800 shadow-md border border-gray-200'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setToggleBtn(false)}
            >
              For Fund
            </button>
          </div>
        </div>

        {/* how it works card display  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toggleBtn ? howItWorksForGift.map((item: forGift, index: number) => (
            <div key={index} className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-orange-200 transition-all duration-300 overflow-hidden">
              <div className="cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <Button
                    title={item.btnTitle}
                    path={item.path}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  />
                </div>
              </div>
            </div>
          )) : howItWorksForFund.map((item: forFund, index: number) => (
            <div key={index} className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-green-200 transition-all duration-300 overflow-hidden">
              <div className="cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 text-xl font-bold mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <Button
                    title={item.btnTitle}
                    path={item.path}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Features Section */}
      <Container className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Why Choose Giv3?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the future of gifting and fundraising with our cutting-edge platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
              Lightning Fast
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Send gifts and receive funds instantly with our blockchain-powered platform
            </p>
          </div>

          <div className="group text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
              Secure & Safe
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bank-level security with 99.9% uptime ensures your transactions are always protected
            </p>
          </div>

          <div className="group text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              Global Community
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with millions of users worldwide in our thriving gifting ecosystem
            </p>
          </div>

          <div className="group text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
              Smart Matching
            </h3>
            <p className="text-gray-600 leading-relaxed">
              AI-powered algorithms connect you with the perfect recipients and opportunities
            </p>
          </div>

          <div className="group text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-pink-200 group-hover:to-pink-300 transition-all duration-300">
                <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
              Real-time Updates
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Track your gifts and campaigns with live notifications and progress updates
            </p>
          </div>

          <div className="group text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-indigo-200 group-hover:to-indigo-300 transition-all duration-300">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
              Privacy First
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced encryption and privacy controls keep your information secure
            </p>
          </div>
        </div>
      </Container>

      {/* Testimonials Section */}
      <Container className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied users who trust Giv3 for their gifting and fundraising needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "Giv3 has completely transformed how I give back to my community. The platform is intuitive and the blockchain technology makes everything transparent and fast."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                SJ
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Community Organizer</div>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "As a small business owner, Giv3 has been incredible for organizing employee gifts and charity drives. The automation features save me hours every week."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                MR
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                <div className="text-sm text-gray-500">Business Owner</div>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "I raised funds for my medical treatment through Giv3. The community support was overwhelming, and the platform made the process seamless and transparent."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                AL
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">Anna Lee</div>
                <div className="text-sm text-gray-500">Fundraiser</div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-16">
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
          <div className="relative flex flex-col lg:flex-row justify-between items-center p-12 lg:p-16">
            <div className="w-full lg:w-[55%] mb-8 lg:mb-0">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                  Get insights into{' '}
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    freelancer pricing
                  </span>
                </h1>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Find out how much freelancers charge for their services and what factors affect their rates.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-2xl">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      name="email"
                      aria-label="Email address"
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl outline-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <Button
                    title="Get insights"
                    path="/"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[40%] flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl transform rotate-12"></div>
                <img
                  src="/gift.png"
                  alt="Gift illustration"
                  className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* FAQ Section */}
      <Container className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about using Giv3 for your gifting and fundraising needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    How does Giv3 ensure the security of my transactions?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Giv3 uses bank-level encryption and blockchain technology to ensure all transactions are secure, transparent, and immutable. We also maintain 99.9% uptime and regular security audits.
                  </p>
                </div>
                <div className="ml-6 group-hover:text-orange-600 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    What are the fees for using Giv3?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We offer competitive pricing starting from just 5% for marketplace transactions, with premium plans offering additional features and lower fees for high-volume users.
                  </p>
                </div>
                <div className="ml-6 group-hover:text-green-600 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    Can I track my gifts and fundraising campaigns?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes! Our real-time dashboard provides comprehensive tracking of all your gifts and campaigns, with live notifications and detailed analytics to monitor progress.
                  </p>
                </div>
                <div className="ml-6 group-hover:text-blue-600 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    How quickly are funds transferred?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Thanks to our blockchain infrastructure, funds are typically transferred within minutes. Traditional bank transfers may take 1-3 business days depending on your bank.
                  </p>
                </div>
                <div className="ml-6 group-hover:text-purple-600 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-inner overflow-hidden">
        <div className="absolute inset-0 bg-[url('/graphic-lg.png')] bg-cover bg-center opacity-30"></div>
        <Container className="relative py-24">
          <div className="text-center mb-16">
            <HeadingOne
              title="Clients only pay after hiring"
              className="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your gifting and fundraising needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  card.label === 'Popular'
                    ? 'border-orange-300 ring-2 ring-orange-100 scale-105'
                    : 'border-gray-200 hover:border-orange-200'
                }`}
              >
                {card.label === 'Popular' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {card.fee}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {card.list.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    title={card.btnTitle}
                    path={card.path}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      card.label === 'Popular'
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        : 'bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </main>
  );
}
