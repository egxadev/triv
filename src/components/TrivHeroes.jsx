import React from 'react';

const HEROES = [
  {
    id: 'hero-1',
    rank: 'Harapan 1',
    title: 'Samsung S22 5G',
    image: '/assets/tradingfest/harapan1.png',
  },
  {
    id: 'hero-2',
    rank: 'Harapan 2',
    title: 'Samsung S21 FE 5G',
    image: '/assets/tradingfest/harapan2.png',
  },
  {
    id: 'hero-3',
    rank: 'Harapan 3',
    title: 'Samsung S20 FE',
    image: '/assets/tradingfest/harapan3.png',
  },
];

export default function TrivHeroes() {
  return (
    <section className="py-10 md:pt-10 md:pb-[60px]" id="heroes">
      <div className="container mx-auto px-5">
        <div className="text-center pt-12 pb-9">
          <h2 className="font-heading text-[28px] font-extrabold tracking-[1.5px] uppercase text-white inline-block">
            TRIV HEROES
          </h2>
          <div className="relative flex items-center justify-center mt-3.5" aria-hidden="true">
            <div className="absolute w-36 h-[3px] bg-triv-cyan/25 blur-sm rounded-full pointer-events-none" />
            <div className="w-16 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent via-triv-cyan/40 to-triv-cyan" />
            <div className="mx-2 w-1.5 h-1.5 rotate-45 bg-triv-cyan shadow-[0_0_8px_#00e5ff] rounded-[0.5px]" />
            <div className="w-16 sm:w-20 h-[1.5px] bg-gradient-to-l from-transparent via-triv-cyan/40 to-triv-cyan" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[30px] items-start mt-5">
          {HEROES.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center transition-transform duration-250 ease-in-out hover:-translate-y-2 group cursor-pointer"
              id={item.id}
            >
              <div className="w-full h-[320px] sm:h-[360px] md:h-[390px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={`${item.rank} - ${item.title}`}
                  className="h-full w-auto max-w-full object-contain transition-all duration-250 ease-in-out group-hover:brightness-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white min-h-[28px] flex items-center justify-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
