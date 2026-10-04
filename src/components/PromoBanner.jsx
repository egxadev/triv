import React from 'react';

export default function PromoBanner() {
  return (
    <section className="py-[50px] bg-[#0d1420] border-y border-white/8" id="promo">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-center gap-[30px] md:gap-[50px] text-center md:text-left">
        <div>
          <h2 className="text-[22px] sm:text-[26px] font-bold leading-[1.35] text-white mb-4">
            <span className="text-triv-cyan">#SemuaBisaMenang</span> karena semakin banyak kamu trading semakin banyak hadiah yang bisa kamu dapatkan !
          </h2>
          <p className="text-base text-triv-muted">
            Mulai trading hanya dengan 50rb rupiah di Triv dan dapatkan hadiahnya.
          </p>
        </div>

        <div>
          <img
            src="/assets/tradingfest/prize-collage.png"
            alt="Hadiah Triv Tradingfest: Motor Vario, Laptop, Smartphone"
            className="w-full max-w-[500px] mx-auto block"
          />
        </div>
      </div>
    </section>
  );
}
