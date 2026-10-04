import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function RulesAccordion() {
  const [generalRulesOpen, setGeneralRulesOpen] = useState(true);
  const [requirementsOpen, setRequirementsOpen] = useState(false);

  return (
    <section className="py-[50px] md:pt-[50px] md:pb-[80px] bg-[#090e18]" id="rules">
      <div className="container mx-auto px-5">
        <div className="text-center pt-12 pb-9">
          <h2 className="font-heading text-[28px] font-extrabold tracking-[1.5px] uppercase text-white inline-block">
            PERATURAN KOMPETISI
          </h2>
          <div className="relative flex items-center justify-center mt-3.5" aria-hidden="true">
            <div className="absolute w-36 h-[3px] bg-triv-cyan/25 blur-sm rounded-full pointer-events-none" />
            <div className="w-16 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent via-triv-cyan/40 to-triv-cyan" />
            <div className="mx-2 w-1.5 h-1.5 rotate-45 bg-triv-cyan shadow-[0_0_8px_#00e5ff] rounded-[0.5px]" />
            <div className="w-16 sm:w-20 h-[1.5px] bg-gradient-to-l from-transparent via-triv-cyan/40 to-triv-cyan" />
          </div>
        </div>

        <div className="max-w-[900px] mx-auto flex flex-col gap-5">
          <div className="bg-[#111a28] border border-white/8 rounded-[10px] overflow-hidden">
            <button
              className="w-full flex items-center justify-between py-[22px] px-5 sm:px-7 text-white text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
              onClick={() => setGeneralRulesOpen(!generalRulesOpen)}
              aria-expanded={generalRulesOpen}
              id="accordion-btn-general"
            >
              <span className="text-lg font-bold">General Rules</span>
              <span className="text-triv-dim">
                {generalRulesOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </span>
            </button>

            {generalRulesOpen && (
              <div className="px-5 sm:px-7 pb-7 pt-0 border-t border-white/[0.04]">
                <ol className="list-decimal pl-5 text-[#cbd5e1] text-[15px] leading-[1.8] pt-[18px]">
                  <li>Wajib memiliki Akun Triv</li>
                  <li>
                    Lakukan transaksi untuk mendapatkan persentase keuntungan sebesar-besarnya selama periode kompetisi.
                  </li>
                  <li>Periode kompetisi dimulai pada 20 Juni 2022 - 20 Juli 2022</li>
                  <li>Kompetisi ini diberlakukan untuk seluruh member Triv tanpa terkecuali.</li>
                  <li>
                    Pemenang Side Quest (Juara Harapan) bisa diraih dengan mengikuti aturan di halaman Triv Quest Reward
                  </li>
                  <li>
                    Gabung dengan komunitas member Triv lainnya di{' '}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-triv-blue underline font-semibold hover:text-triv-cyan transition-colors"
                    >
                      Telegram
                    </a>{' '}
                    untuk mendapatkan update seputar market untuk membantumu menganalisa pergerakan harga.
                  </li>
                  <li>
                    Follow social media Triv{' '}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-triv-blue underline font-semibold hover:text-triv-cyan transition-colors"
                    >
                      Instagram
                    </a>{' '}
                    dan{' '}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-triv-blue underline font-semibold hover:text-triv-cyan transition-colors"
                    >
                      Facebook
                    </a>{' '}
                    untuk mendapatkan update seputar pemenang Mingguan.
                  </li>
                </ol>
              </div>
            )}
          </div>

          <div className="bg-[#111a28] border border-white/8 rounded-[10px] overflow-hidden">
            <button
              className="w-full flex items-center justify-between py-[22px] px-5 sm:px-7 text-white text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
              onClick={() => setRequirementsOpen(!requirementsOpen)}
              aria-expanded={requirementsOpen}
              id="accordion-btn-requirement"
            >
              <span className="text-lg font-bold">Requirement</span>
              <span className="text-triv-dim">
                {requirementsOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </span>
            </button>

            {requirementsOpen && (
              <div className="px-5 sm:px-7 pb-7 pt-0 border-t border-white/[0.04]">
                <ul className="list-disc pl-5 text-[#cbd5e1] text-[15px] leading-[1.8] pt-[18px]">
                  <li>Peserta harus memiliki KTP</li>
                  <li>Peserta boleh perorangan maupun korporasi</li>
                  <li>Internal Triv tidak diikutkan dalam kompetisi</li>
                  <li>
                    Peserta hanya melakukan transaksi jual beli saja (staking dan gadai tidak termasuk)
                  </li>
                  <li>Hasil Likuidasi posisi di atas tanggal 20 Juli 2022 tidak dihitung</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
