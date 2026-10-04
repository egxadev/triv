import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function SideQuests() {
  return (
    <section className="py-[50px] md:pt-[50px] md:pb-[70px]" id="quests">
      <div className="container mx-auto px-5 flex flex-col gap-[30px]">
        <div className="bg-[#2b88cc] bg-[url('/assets/tradingfest/card-wave-bg.png')] bg-no-repeat bg-center bg-cover rounded-[20px] grid grid-cols-1 md:grid-cols-[1.25fr_1fr] items-center p-[30px] md:py-[38px] md:px-[50px] relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.35)] border border-white/18 text-center md:text-left gap-6 md:gap-0">
          <div>
            <h3 className="font-heading text-[22px] sm:text-[26px] md:text-[32px] font-black tracking-[0.5px] text-white mb-1.5 uppercase">
              SIDE QUEST
            </h3>
            
            <a
              href="/#"
              className="inline-flex items-center justify-center md:justify-start gap-1.5 text-[#e0f2fe] text-[15px] font-medium mb-[18px] p-0 underline underline-offset-4 hover:text-white transition-colors duration-200"
              id="sidequest-info-btn"
              onClick={(e) => e.preventDefault()}
            >
              <span>Klik untuk lihat info detail</span>
              <ChevronRight size={16} />
            </a>

            <div className="mt-1">
              <span className="text-[17px] text-white block mb-1 font-normal">Juara favorit:</span>
              <h4 className="text-[20px] sm:text-[24px] font-extrabold text-white leading-[1.25]">
                Xiaomi Watch S1 Active
              </h4>
            </div>
          </div>

          <div>
            <img
              src="/assets/tradingfest/xiaomi-watch.png"
              alt="Xiaomi Watch S1 Active"
              className="w-full max-w-[320px] md:max-w-[400px] block mx-auto md:ml-auto md:mr-0 drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>

        <div className="bg-[#2b88cc] bg-[url('/assets/tradingfest/card-wave-bg.png')] bg-no-repeat bg-center bg-cover rounded-[20px] grid grid-cols-1 md:grid-cols-[1.25fr_1fr] items-center p-[30px] md:py-[38px] md:px-[50px] relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.35)] border border-white/18 text-center md:text-left gap-6 md:gap-0">
          <div>
            <h3 className="font-heading text-[22px] sm:text-[26px] md:text-[32px] font-black tracking-[0.5px] text-white mb-1.5 uppercase">
              WEEKLY QUEST JOURNEY
            </h3>
            <p className="text-lg font-medium text-white mb-[22px] leading-[1.3] tracking-[0.2px]">
              Updated every week!!
            </p>

            <div className="mt-1">
              <span className="text-[17px] text-white block mb-1 font-normal">Juara Mingguan</span>
              <h4 className="text-[20px] sm:text-[24px] font-extrabold text-white leading-[1.25]">
                Total Hadiah 10 juta + Triv Merch
              </h4>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end items-center">
            <img
              src="/assets/tradingfest/weekly-quest-reward.png"
              alt="Triv Merch Bearish vs Bullish Hoodie & Total Hadiah 10 juta By Percentage Return"
              className="w-full max-w-[320px] md:max-w-[440px] block mx-auto md:ml-auto md:mr-0 drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] md:translate-y-1.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
