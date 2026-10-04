import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function RegistrationSection() {
  return (
    <section className="relative bg-[#141823] min-h-[640px] flex items-center overflow-hidden py-[60px]" id="registration">
      <div className="absolute inset-0 pointer-events-none z-[1] flex justify-end items-end" aria-hidden="true">
        <img
          src="/assets/tradingfest/bg-pendaftaran.png"
          alt=""
          className="h-full max-h-[698px] w-auto object-contain object-right-bottom block"
        />
      </div>

      <div className="relative z-[2] grid grid-cols-1 md:grid-cols-[1fr_1.25fr] items-center w-full max-w-full mr-0 ml-auto pl-0 md:pl-[max(20px,calc((100%-1200px)/2+20px))] pr-0 text-center md:text-left gap-[30px] md:gap-0">
        <div className="py-5 z-[3] relative px-5 md:px-0">
          <h2 className="font-heading text-[32px] md:text-[40px] font-extrabold text-white mb-6 tracking-[-0.5px] leading-[1.2]">
            Cara Pendaftaran
          </h2>
          <p className="text-[18px] md:text-[22px] font-semibold text-white mb-9 leading-[1.45] max-w-[520px] mx-auto md:mx-0">
            Cukup Memiliki Akun Triv dan Trading di Triv Selama Durasi Event
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-[#2575fc] text-white font-bold text-[17px] px-9 py-4 rounded-lg shadow-[0_8px_24px_rgba(37,117,252,0.4)] transition-all duration-250 hover:bg-[#1b63db] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(37,117,252,0.5)] cursor-pointer"
              id="btn-register-section"
              aria-disabled="true"
              tabIndex={-1}
            >
              <span>Daftar Sekarang</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex justify-end items-center relative m-0 p-0 leading-none z-[3] w-full">
          <div className="flex justify-end items-center w-full leading-none mt-4 mr-0 pr-0">
            <img
              src="/assets/tradingfest/laptop-trading.png"
              alt="Trading di Triv pada MacBook Air"
              className="w-full max-w-[480px] md:max-w-[660px] h-auto block object-contain object-right ml-auto mr-0 mb-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
