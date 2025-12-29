"use client";
import { Wallet, CreditCard } from "lucide-react";

export default function BalanceCards() {
  const stats = [
    { label: "Total Deposit", value: "Rp 10,000" },
    { label: "Total WD", value: "Rp 0" },
    { label: "Total Profit", value: "Rp 0" },
  ];

  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-2xl">
      {/* Balance Cards */}
      <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4">
        <div className="bg-gradient-to-r">
          <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-4 lg:p-5 h-full">
            <div className="flex items-center gap-2 mb-1">
              <Wallet className="w-4 h-4 text-cyan-400" />
              <p className="text-cyan-400 text-xs font-medium">Saldo Deposit</p>
            </div>
            <p className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Rp 10,000
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mb-4"></div>
            <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
              <Wallet className="w-4 h-4" />
              Deposit
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r ">
          <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-4 lg:p-5 h-full">
            <div className="flex items-center gap-2 mb-1">
              <CreditCard className="w-4 h-4 text-blue-400" />
              <p className="text-blue-400 text-xs font-medium">
                Saldo Pencairan
              </p>
            </div>
            <p className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Rp 500
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-4"></div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
              <CreditCard className="w-4 h-4" />
              Tarik Dana
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-2 lg:gap-3">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg lg:rounded-xl p-2.5 lg:p-3 text-center border border-white/10"
          >
            <p className="text-white font-semibold text-sm lg:text-base mb-0.5">
              {stat.value}
            </p>
            <p className="text-white/60 text-[10px] lg:text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
