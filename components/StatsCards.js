"use client";

export default function StatsCards() {
  const stats = [
    { label: "Total Deposit", value: "Rp 10,000" },
    { label: "Total WD", value: "Rp 0" },
    { label: "Total Profit", value: "Rp 0" },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 lg:gap-3">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg lg:rounded-xl p-2 lg:p-3 text-center border border-white/10 shadow-lg"
        >
          <p className="text-white/60 text-[10px] lg:text-xs mb-0.5 lg:mb-1">
            {stat.value}
          </p>
          <p className="text-emerald-400 text-[10px] lg:text-xs font-semibold">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
