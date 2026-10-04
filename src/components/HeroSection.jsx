import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeroSection({ onRegisterClick }) {
  return (
    <section
      className="relative pt-[60px] pb-[70px] bg-[#09101b] bg-[url('/assets/tradingfest/bg-jumbotron.png')] bg-no-repeat bg-[center_-70px] bg-cover overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
        <img
          src="/assets/tradingfest/bg-jumbotron.png"
          alt=""
          className="w-full h-full object-cover object-[center_-70px] block"
        />
      </div>
      <div className="container mx-auto px-5 relative z-[2] grid grid-cols-1 md:grid-cols-2 items-center gap-[30px] md:gap-10 text-center md:text-left">
        <div>
          <h1 className="font-heading text-[32px] sm:text-[38px] md:text-[48px] font-extrabold leading-[1.15] text-white mb-5 tracking-[-0.5px]">
            Triv Trading <br />
            Competition
          </h1>

          <div className="text-[17px] sm:text-[20px] font-medium text-[#e2e8f0] mb-7 leading-[1.4]">
            <span>
              Calling all Investor and Trader Karena{' '}
            </span>
            <span className="font-extrabold text-triv-cyan drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">#SemuaBisaMenang</span>
          </div>

          <div className="mb-5 flex justify-center md:justify-start">
            <a
              href="https://triv.co.id/id/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#0080ff] to-[#0059b3] text-white font-bold text-base px-7 py-3.5 rounded-[6px] shadow-[0_10px_25px_rgba(0,128,255,0.4)] transition-all duration-200 hover:from-[#0091ff] hover:to-[#0066d6] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,128,255,0.55)] cursor-pointer"
              onClick={onRegisterClick}
              id="hero-register-btn"
            >
              <span>Daftar Sekarang</span>
              <ChevronRight size={18} />
            </a>
          </div>

          <p className="text-[13px] italic text-triv-dim">
            *Periode kompetisi 20 Juni 2022 - 20 Juli 2022
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/assets/tradingfest/hero-trophy.png"
            alt="Triv Trading Competition Trophy and Crypto Coins"
            className="w-full max-w-[520px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] animate-[float-gentle_4s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  );
}
