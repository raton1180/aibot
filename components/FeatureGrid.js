"use client";
import { Home, BarChart3, Gift, Target, TrendingUp, User } from "lucide-react";

export default function FeatureGrid() {
  const features = [
    { icon: Home, label: "About", color: "emerald" },
    { icon: BarChart3, label: "Log Spin", color: "blue" },
    { icon: Gift, label: "Cekin", color: "purple" },
    { icon: Target, label: "Togel", color: "pink" },
    { icon: Gift, label: "Hadiah", color: "red" },
    { icon: BarChart3, label: "Spin Win", color: "cyan" },
    { icon: TrendingUp, label: "News", color: "orange" },
    { icon: User, label: "Service", color: "yellow" },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      emerald: "border-emerald-500/30 text-emerald-400",
      blue: "border-blue-500/30 text-blue-400",
      purple: "border-purple-500/30 text-purple-400",
      pink: "border-pink-500/30 text-pink-400",
      red: "border-red-500/30 text-red-400",
      cyan: "border-cyan-500/30 text-cyan-400",
      orange: "border-orange-500/30 text-orange-400",
      yellow: "border-yellow-500/30 text-yellow-400",
    };
    return colorMap[color] || "border-white/30 text-white";
  };

  return (
    <div className="grid grid-cols-4 gap-3 lg:gap-4">
      {features.map((feature, idx) => {
        const Icon = feature.icon;
        const colorClasses = getColorClasses(feature.color);

        return (
          <button
            key={idx}
            className="flex flex-col items-center gap-1.5 lg:gap-2 group"
          >
            <div
              className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl lg:rounded-2xl flex items-center justify-center border ${
                colorClasses.split(" ")[0]
              } shadow-lg group-hover:scale-110 transition-transform`}
            >
              <Icon
                className={`w-5 h-5 lg:w-6 lg:h-6 ${
                  colorClasses.split(" ")[1]
                }`}
              />
            </div>
            <span className="text-white text-[10px] lg:text-xs">
              {feature.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
