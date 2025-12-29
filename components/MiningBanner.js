"use client";
import { Zap, Bot } from "lucide-react";

export default function MiningBanner({ isMobile = false }) {
  if (isMobile) {
    return (
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-xl p-5 relative overflow-hidden shadow-2xl">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-yellow-400 opacity-30 rounded"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-cyan-400 opacity-20 rounded-full"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-yellow-300" />
            <h3 className="text-white font-bold text-sm">AI SUPER MINING</h3>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <div className="flex-1">
              <h4 className="text-white text-2xl font-bold leading-tight mb-4">
                HASILKAN UANG
                <br />
                SETIAP HARI
              </h4>

              <div className="space-y-3">
                <div className="bg-blue-900/40 backdrop-blur-sm rounded-lg p-3 border border-blue-400/20">
                  <p className="text-white text-xs font-semibold mb-1.5">
                    Program Berjalan
                  </p>
                  <p className="text-white/70 text-[10px] leading-relaxed">
                    Selamat AI Yang Untuk Dapat akses mengisi menulang curug
                    saat yang jalum mencantik ini kaza using Bussih, Dan ondo,
                    Dikases
                  </p>
                </div>

                <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-white/80 text-xs leading-relaxed">
                    <span className="font-semibold">Opsinya :</span>
                    <br />
                    Invest AI Yang Anda Sewa Kami
                    <br />
                    Dengan Menghasilkan Uang Digital
                    <br />
                    yang akan di convert ke karta uang
                    <br />
                    Induk, Dan ondo Catatan
                  </p>
                </div>
              </div>
            </div>

            {/* Robot Icon */}
            <div className="relative w-20 h-32 flex items-end">
              <Bot className="w-20 h-20 text-cyan-300/40 absolute bottom-0 right-0" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"></div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-emerald-400 to-green-500 text-slate-900 py-2.5 rounded-xl font-bold text-xs shadow-xl hover:shadow-2xl transition-all">
            Selamat Datang Di AI Robot Mining, Mulai Sekarang
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-5 relative overflow-hidden shadow-2xl">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-6 h-6 border-2 border-yellow-400 opacity-30 rounded"></div>
        <div className="absolute bottom-4 left-8 w-4 h-4 border-2 border-cyan-400 opacity-20 rounded-full"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-yellow-300" />
          <h3 className="text-white font-bold text-sm">AI SUPER MINING</h3>
        </div>

        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <h4 className="text-white text-xl font-bold leading-tight mb-3">
              HASILKAN UANG
              <br />
              SETIAP HARI
            </h4>

            <div className="space-y-2">
              <div className="bg-blue-900/40 backdrop-blur-sm rounded-lg p-2.5 border border-blue-400/20">
                <p className="text-white text-[11px] font-semibold mb-1">
                  Program Berjalan
                </p>
                <p className="text-white/70 text-[9px] leading-relaxed">
                  Selamat AI Yang Untuk Dapat akses mengisi menulang curug saat
                  yang jalum mencantik ini kaza using Bussih, Dan ondo, Dikases
                </p>
              </div>

              <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-2.5">
                <p className="text-white/90 text-[9px] leading-relaxed">
                  <span className="font-semibold text-[11px]">Opsinya :</span>
                  <br />
                  Invest AI Yang Anda Sewa Kami Dengan Menghasilkan Uang Digital
                  yang akan di convert ke karta uang Induk, Dan ondo Catatan
                </p>
              </div>
            </div>
          </div>

          {/* Robot Icon */}
          <div className="relative w-24 h-32 flex items-end flex-shrink-0">
            <Bot className="w-24 h-24 text-cyan-300/50 absolute bottom-2 right-0" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-emerald-400 to-green-500 text-slate-900 py-2.5 rounded-xl font-bold text-[11px] shadow-xl hover:shadow-2xl transition-all">
          Selamat Datang Di AI Robot Mining, Mulai Sekarang
        </button>
      </div>
    </div>
  );
}
