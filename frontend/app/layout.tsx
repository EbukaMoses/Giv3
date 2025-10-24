import type { Metadata } from "next";
import "./globals.css";
import { ConditionalLayout } from "@/ui/ConditionalLayout";

export const metadata: Metadata = {
  title: "Giv3 - Send Love, Rewards, and Support On-Chain",
  description: "Giv3 lets you send crypto gifts, host giveaways, and fund causes with ease — fast, secure, and transparent. Send personalized gift cards using stablecoins (USDT & USDC).",
  keywords: "crypto gifting, web3 donations, blockchain giving, USDC gift cards, on-chain gifts, cryptocurrency donations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
