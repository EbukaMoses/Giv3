import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FaApple, FaAndroid } from "react-icons/fa";
import Container from '@/ui/Container';

const Footer = () => {
  return (
    <Container>
        <footer className="bg-[#0d0d0d] text-gray-300 text-sm px-8 py-12 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Top Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          {/* For Clients */}
          <div>
            <h3 className="font-semibold text-gray-400 mb-3">For Clients</h3>
            <ul className="space-y-2">
              <li>How to hire</li>
              <li>Talent Marketplace</li>
              <li>Project Catalog</li>
              <li>Hire an agency</li>
              <li>Enterprise</li>
              <li>Business Plus</li>
              <li>Any Hire</li>
              <li>Contract-to-hire</li>
              <li>Direct Contracts</li>
              <li>Hire worldwide</li>
              <li>Hire in the USA</li>
            </ul>
          </div>

          {/* For Talent */}
          <div>
            <h3 className="font-semibold text-gray-400 mb-3">For Talent</h3>
            <ul className="space-y-2">
              <li>How to find work</li>
              <li>Direct Contracts</li>
              <li>Find freelance jobs worldwide</li>
              <li>Find freelance jobs in the USA</li>
              <li>Win work with ads</li>
              <li>
                <a href="#" className="underline text-gray-200 hover:text-white">
                  Exclusive resources with Freelancer Plus
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-400 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>Help & support</li>
              <li>Success stories</li>
              <li>Upwork reviews</li>
              <li>Resources</li>
              <li>Blog</li>
              <li>Affiliate programme</li>
              <li>Free Business Tools</li>
              <li>Release notes</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-400 mb-3">Company</h3>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Leadership</li>
              <li>Investor relations</li>
              <li>Careers</li>
              <li>Our impact</li>
              <li>Press</li>
              <li>Contact us</li>
              <li>Partners</li>
              <li>Trust, safety & security</li>
              <li>Modern slavery statement</li>
            </ul>
          </div>
        </div>

        {/* Social Icons + App Links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 gap-6">
          <div className="flex items-center space-x-5">
            <span className="text-gray-400">Follow us</span>
            <div className="flex space-x-4 text-lg">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
              <FaXTwitter className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-gray-400">Mobile app</span>
            <FaApple className="text-xl hover:text-white cursor-pointer" />
            <FaAndroid className="text-xl hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs space-y-3 md:space-y-0">
          <p>© 2015 - 2025 Upwork® Global LLC</p>
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">CA Notice at Collection</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
    </Container>
  );
}

export default Footer

