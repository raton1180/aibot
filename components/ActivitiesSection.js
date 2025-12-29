"use client";
import { TrendingUp, Gift, Zap, Target } from "lucide-react";

export default function ActivitiesSection({ isMobile = false }) {
  const activities = [
    {
      amount: "1.073.604",
      account: "Demat",
      detail: "demat_ID7834",
      status: "Selesai Pesanan",
      color: "emerald",
      icon: TrendingUp,
    },
    {
      amount: "508.800",
      account: "Liburan",
      detail: "9600 chip",
      status: "Kirim Pesanan",
      color: "blue",
      icon: Gift,
    },
    {
      amount: "1.101.469",
      account: "Dibuat",
      detail: "380900 chip",
      status: "BEST CHOICE",
      color: "yellow",
      icon: Zap,
    },
    {
      amount: "1.441.916",
      account: "Vinikas",
      detail: "380900 chip",
      status: "Menunggu Bank",
      color: "pink",
      icon: Target,
    },
  ];

  const getGradientClasses = (color) => {
    const gradientMap = {
      emerald: "from-emerald-500 to-emerald-600",
      blue: "from-blue-500 to-cyan-600",
      yellow: "from-yellow-500 to-orange-600",
      pink: "from-pink-500 to-purple-600",
    };
    return gradientMap[color] || "from-gray-500 to-gray-600";
  };

  if (isMobile) {
    return (
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-3 lg:p-4 border border-white/10 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-bold text-sm">Aktivitas Terbaru</h3>
          <button className="text-emerald-400 text-xs font-semibold">
            Live Feed
          </button>
        </div>

        <div className="space-y-2">
          {activities.map((activity, idx) => {
            const Icon = activity.icon;
            const gradientClass = getGradientClasses(activity.color);

            return (
              <div
                key={idx}
                className="flex items-center justify-between bg-slate-900/50 rounded-lg p-2.5"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div
                    className={`w-8 h-8 bg-gradient-to-br ${gradientClass} rounded-full flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-xs font-semibold truncate">
                      Rp {activity.amount}
                    </p>
                    <p className="text-white/60 text-[10px] truncate">
                      Akun {activity.account}
                    </p>
                  </div>
                </div>
                <button
                  className={`bg-gradient-to-r ${gradientClass} text-white px-2.5 py-1 rounded-full text-[10px] font-bold shadow-lg shrink-0`}
                >
                  {activity.status}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 border border-white/10 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold">Aktivitas Terbaru</h3>
        <button className="text-emerald-400 text-sm font-semibold">
          Live Feed
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((activity, idx) => {
          const Icon = activity.icon;
          const gradientClass = getGradientClasses(activity.color);

          return (
            <div
              key={idx}
              className="flex items-start justify-between bg-slate-900/50 rounded-lg p-3 gap-3"
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${gradientClass} rounded-full flex items-center justify-center shrink-0`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-white text-sm font-semibold">
                    Jumlah: Rp {activity.amount}
                  </p>
                  <p className="text-white/60 text-xs truncate">
                    Akun {activity.account} • {activity.detail}
                  </p>
                </div>
              </div>
              <button
                className={`bg-gradient-to-r ${gradientClass} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg shrink-0`}
              >
                {activity.status}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
