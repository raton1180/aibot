"use client";
import { Bot } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 lg:px-8 py-4 flex items-center justify-between sticky top-0 bg-slate-900/90 backdrop-blur-md z-50 border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <Bot className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </div>
        <div>
          <h1 className="text-white font-bold text-base lg:text-xl">
            AI ROBOT
          </h1>
          <p className="text-emerald-400 text-xs font-medium">
            Intelligent Trading
          </p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        <a
          href="#"
          className="text-white/70 hover:text-white transition-colors text-sm"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white/70 hover:text-white transition-colors text-sm"
        >
          Activity
        </a>
        <a
          href="#"
          className="text-white/70 hover:text-white transition-colors text-sm"
        >
          Payment
        </a>
        <a
          href="#"
          className="text-white/70 hover:text-white transition-colors text-sm"
        >
          Profile
        </a>
      </nav>

      <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-3 lg:px-5 py-1.5 lg:py-2 rounded-full text-xs font-bold shadow-lg hover:shadow-xl transition-all">
        VIP
      </button>
    </header>
  );
}
