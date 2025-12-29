"use client";
import { Home, BarChart3, CreditCard, User } from "lucide-react";

export default function BottomNavigation() {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: BarChart3, label: "Activity", active: false },
    { icon: CreditCard, label: "Payment", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-white/10 lg:hidden">
      <div className="max-w-md mx-auto flex justify-around items-center py-3 px-4">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              className="flex flex-col items-center gap-1 group"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  item.active
                    ? "bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg"
                    : "bg-slate-800 group-hover:bg-slate-700"
                } transition-colors`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    item.active
                      ? "text-white"
                      : "text-white/60 group-hover:text-white"
                  }`}
                />
              </div>
              <span
                className={`text-xs ${
                  item.active
                    ? "text-emerald-400 font-semibold"
                    : "text-white/60 group-hover:text-white"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
