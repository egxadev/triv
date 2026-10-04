import React, { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import CartButton from './CartButton';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [lang, setLang] = useState('ID');

  return (
    <header className="sticky top-0 z-[1000] bg-[#0b111a]/95 backdrop-blur-md border-b border-white/8" id="nav">
      <div className="bg-[#070b12] text-[13px] py-2 border-b border-white/[0.04]">
        <div className="container mx-auto px-5 flex justify-end">
          <div className="flex items-center gap-5">
            <div>
              <span className="inline-flex items-center gap-1.5 font-medium text-[#e2e8f0] cursor-pointer hover:text-triv-blue transition-colors">
                <User size={15} />
                <span>Ega</span>
                <ChevronDown size={14} />
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-triv-dim">
              <button
                type="button"
                className={`font-semibold transition-colors cursor-pointer ${lang === 'ID' ? 'text-white' : 'text-triv-dim hover:text-white'}`}
                onClick={() => setLang('ID')}
              >
                ID
              </button>
              <span className="opacity-40">|</span>
              <button
                type="button"
                className={`font-semibold transition-colors cursor-pointer ${lang === 'EN' ? 'text-white' : 'text-triv-dim hover:text-white'}`}
                onClick={() => setLang('EN')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3.5">
        <div className="container mx-auto px-5 flex items-center justify-between">
          <a href="#hero" className="block" onClick={() => setActiveTab('competition')}>
            <img
              src="/assets/logo.png"
              alt="Triv Logo"
              className="h-[38px] w-auto block"
            />
          </a>

          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center list-none gap-5">
              <li>
                <a
                  href="#hero"
                  className={`text-sm font-medium py-1.5 relative transition-colors ${activeTab === 'competition' ? 'text-white font-semibold' : 'text-[#cbd5e1] hover:text-white'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('competition');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Harga (Jual Beli)
                </a>
              </li>

              <li
                className="relative"
                onMouseEnter={() => setServiceDropdownOpen(true)}
                onMouseLeave={() => setServiceDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium text-[#cbd5e1] py-1.5 hover:text-white transition-colors cursor-pointer"
                  onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                >
                  <span>Service</span>
                  <ChevronDown size={14} />
                </button>

                {serviceDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2.5 bg-[#111b29] border border-white/8 rounded-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] p-4 flex gap-6 min-w-[280px] z-[100]">
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] uppercase tracking-wider text-triv-cyan font-bold mb-1">E-Currency</span>
                      <a href="#rewards" className="text-[13px] text-[#94a3b8] py-1 hover:text-white transition-colors">Bitcoin (BTC)</a>
                      <a href="#rewards" className="text-[13px] text-[#94a3b8] py-1 hover:text-white transition-colors">Ethereum (ETH)</a>
                      <a href="#rewards" className="text-[13px] text-[#94a3b8] py-1 hover:text-white transition-colors">Tether (USDT)</a>
                      <a href="#rewards" className="text-[13px] text-[#94a3b8] py-1 hover:text-white transition-colors">Solana (SOL)</a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] uppercase tracking-wider text-triv-cyan font-bold mb-1">Product</span>
                      <a href="#rewards" className="text-[13px] text-[#94a3b8] py-1 hover:text-white transition-colors">Pulsa & Token</a>
                      <a href="#rewards" className="text-[13px] text-[#94a3b8] py-1 hover:text-white transition-colors">Tagihan Listrik</a>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <a href="#rewards" className="text-sm font-medium text-[#cbd5e1] py-1.5 hover:text-white transition-colors">
                  Staking
                </a>
              </li>

              <li>
                <a href="#leaderboard" className="text-sm font-medium text-[#cbd5e1] py-1.5 hover:text-white transition-colors">
                  Market
                </a>
              </li>

              <li>
                <a href="#leaderboard" className="text-sm font-medium text-[#cbd5e1] py-1.5 hover:text-white transition-colors">
                  Saham AS
                </a>
              </li>

              <li>
                <a href="https://triv.co.id/id/register" target='_blank' rel="noopener noreferrer" className="text-sm font-medium text-[#cbd5e1] py-1.5 hover:text-white transition-colors">
                  Affiliate
                </a>
              </li>

              <li>
                <a href="#rules" className="text-sm font-medium text-[#cbd5e1] py-1.5 hover:text-white transition-colors">
                  About Us
                </a>
              </li>

              <li>
                <a href="#rules" className="text-sm font-medium text-[#cbd5e1] py-1.5 hover:text-white transition-colors">
                  Blog
                </a>
              </li>

              <li>
                <a href="#footer" className="text-sm font-medium text-[#cbd5e1] py-1.5 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>

              <li>
                <button
                  type="button"
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    activeTab === 'store'
                      ? 'bg-triv-blue text-white shadow-[0_0_15px_rgba(0,128,255,0.4)]'
                      : 'bg-[#0080ff]/15 border border-[#0080ff]/40 text-[#60a5fa] hover:bg-triv-blue hover:text-white hover:shadow-[0_0_15px_rgba(0,128,255,0.4)]'
                  }`}
                  onClick={() => {
                    setActiveTab(activeTab === 'store' ? 'competition' : 'store');
                  }}
                  id="tab-toggle-merch"
                >
                  {activeTab === 'store' ? '← Trading Fest' : 'Merch Store'}
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3.5">
            <CartButton />

            <button
              type="button"
              className="block lg:hidden text-white cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-black/70 backdrop-blur-md z-[1500] flex" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-4/5 max-w-[320px] h-full bg-[#0b111c] border-r border-white/8 flex flex-col p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <img src="/assets/logo.png" alt="Triv" className="h-8 w-auto" />
              <button
                type="button"
                className="text-triv-dim hover:text-white transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Tutup menu"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="list-none flex flex-col gap-4 grow">
              <li>
                <button
                  type="button"
                  className={`w-full text-left py-2.5 px-3.5 rounded-[6px] font-semibold text-sm transition-colors cursor-pointer ${
                    activeTab === 'competition' ? 'bg-triv-blue text-white' : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                  onClick={() => {
                    setActiveTab('competition');
                    setMobileMenuOpen(false);
                  }}
                >
                  🏆 Triv Trading Competition
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`w-full text-left py-2.5 px-3.5 rounded-[6px] font-semibold text-sm transition-colors cursor-pointer ${
                    activeTab === 'store' ? 'bg-triv-blue text-white' : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                  onClick={() => {
                    setActiveTab('store');
                    setMobileMenuOpen(false);
                  }}
                >
                  🛍️ Triv Official Merch Store
                </button>
              </li>
              <li className="h-px bg-white/8 my-2"></li>
              <li>
                <a href="#rewards" className="text-[15px] text-[#cbd5e1] block py-1.5 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Quest Reward
                </a>
              </li>
              <li>
                <a href="#heroes" className="text-[15px] text-[#cbd5e1] block py-1.5 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Triv Heroes
                </a>
              </li>
              <li>
                <a href="#quests" className="text-[15px] text-[#cbd5e1] block py-1.5 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Side Quest & Weekly
                </a>
              </li>
              <li>
                <a href="#leaderboard" className="text-[15px] text-[#cbd5e1] block py-1.5 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#rules" className="text-[15px] text-[#cbd5e1] block py-1.5 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Peraturan Kompetisi
                </a>
              </li>
            </ul>

            <div className="mt-auto pt-5">
              <a
                href="https://triv.co.id/id/register"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-triv-blue text-white py-3 rounded-[6px] font-bold hover:bg-triv-blue-hover transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
