import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Leaderboard() {
  return (
    <section className="py-[50px] md:pt-[50px] md:pb-[70px]" id="leaderboard">
      <div className="container mx-auto px-5">
        <div className="text-center pt-12 pb-9">
          <h2 className="font-heading text-[28px] font-extrabold tracking-[1.5px] uppercase text-white inline-block">
            LEADERBOARD SAAT INI
          </h2>
          <div className="relative flex items-center justify-center mt-3.5" aria-hidden="true">
            <div className="absolute w-36 h-[3px] bg-triv-cyan/25 blur-sm rounded-full pointer-events-none" />
            <div className="w-16 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent via-triv-cyan/40 to-triv-cyan" />
            <div className="mx-2 w-1.5 h-1.5 rotate-45 bg-triv-cyan shadow-[0_0_8px_#00e5ff] rounded-[0.5px]" />
            <div className="w-16 sm:w-20 h-[1.5px] bg-gradient-to-l from-transparent via-triv-cyan/40 to-triv-cyan" />
          </div>
        </div>

        <div className="max-w-[760px] mx-auto">
          <div className="grid grid-cols-[1fr_1.15fr_1fr] items-end gap-2 sm:gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-[#162030] border border-white/8 rounded-[10px] p-2 sm:px-4 sm:pt-6 sm:pb-5 w-full text-center mb-2 shadow-[0_10px_25px_rgba(0,0,0,0.4)] relative">
                <div className="flex justify-center mb-3">
                  <img
                    src="/assets/tradingfest/rank2-medal.png"
                    alt="Peringkat 2 Medal"
                    className="w-[42px] sm:w-[56px] h-auto block"
                  />
                </div>
                <div className="text-[13px] sm:text-base font-bold text-[#f1f5f9] mb-1.5 truncate">Irna****</div>
                <div className="font-heading text-base sm:text-xl font-extrabold text-[#10b981]">Rp21m</div>
              </div>
              <div className="w-full flex items-center justify-center font-heading font-black text-white rounded-[6px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] h-[50px] sm:h-[60px] bg-gradient-to-b from-[#f59e0b] to-[#d97706]">
                <span className="text-2xl sm:text-[32px]">2</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#192538] border border-amber-500/35 rounded-[10px] p-2 sm:px-4 sm:pt-8 sm:pb-6 w-full text-center mb-2 shadow-[0_12px_30px_rgba(255,184,0,0.15)] relative">
                <div className="flex justify-center mb-3">
                  <img
                    src="/assets/tradingfest/rank1-medal.png"
                    alt="Peringkat 1 Medal"
                    className="w-[42px] sm:w-[56px] h-auto block"
                  />
                </div>
                <div className="text-[13px] sm:text-base font-bold text-[#f1f5f9] mb-1.5 truncate">Moch****</div>
                <div className="font-heading text-[18px] sm:text-2xl font-extrabold text-[#34d399]">Rp27,6m</div>
              </div>
              <div className="w-full flex items-center justify-center font-heading font-black text-white rounded-[6px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] h-[75px] sm:h-[90px] bg-gradient-to-b from-[#fbbf24] to-[#f59e0b]">
                <span className="text-2xl sm:text-[32px]">1</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#162030] border border-white/8 rounded-[10px] p-2 sm:px-4 sm:pt-6 sm:pb-5 w-full text-center mb-2 shadow-[0_10px_25px_rgba(0,0,0,0.4)] relative">
                <div className="flex justify-center mb-3">
                  <img
                    src="/assets/tradingfest/rank3-medal.png"
                    alt="Peringkat 3 Medal"
                    className="w-[42px] sm:w-[56px] h-auto block"
                  />
                </div>
                <div className="text-[13px] sm:text-base font-bold text-[#f1f5f9] mb-1.5 truncate">linatul********</div>
                <div className="font-heading text-base sm:text-xl font-extrabold text-[#10b981]">Rp5,82m</div>
              </div>
              <div className="w-full flex items-center justify-center font-heading font-black text-white rounded-[6px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] h-[35px] sm:h-[45px] bg-gradient-to-b from-[#d97706] to-[#b45309]">
                <span className="text-2xl sm:text-[32px]">3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#0080ff] to-[#0059b3] text-white font-bold text-[15px] px-8 py-3 rounded-[6px] shadow-[0_8px_20px_rgba(0,128,255,0.35)] transition-all duration-200 hover:from-[#0091ff] hover:to-[#0066d6] hover:-translate-y-0.5 cursor-pointer"
            id="btn-lihat-semua-leaderboard"
            aria-disabled="true"
            tabIndex={-1}
          >
            <span>Lihat Semua</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
