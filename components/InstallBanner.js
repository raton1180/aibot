"use client";

export default function InstallBanner() {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-white font-bold text-xs lg:text-sm mb-0.5">
            Install Aplikasi
          </h2>
          <p className="text-white/90 text-[10px] lg:text-xs">
            Akses lebih cepat ke browser favorit
          </p>
        </div>
        <button className="bg-white text-emerald-600 px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-[10px] lg:text-xs font-bold shadow-lg hover:shadow-xl transition-all shrink-0">
          INSTALL
        </button>
      </div>
    </div>
  );
}
