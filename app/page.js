"use client";
import {
  Bot,
  Wallet,
  TrendingUp,
  Gift,
  Zap,
  Home,
  BarChart3,
  CreditCard,
  Target,
  User,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-md lg:max-w-7xl mx-auto min-h-screen">
        {/* Header */}
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

        {/* Main Content */}
        <main className="px-4 lg:px-8 py-6 pb-24 lg:pb-8">
          {/* Desktop Two Column Layout */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-6">
            {/* Left Column - Main Content (Mobile: Full Width, Desktop: 2/3) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Install Banner */}
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

              {/* Balance Cards */}
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-emerald-500/30 shadow-xl">
                  <div className="flex items-center gap-1.5 lg:gap-2 mb-2">
                    <Wallet className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-emerald-400" />
                    <p className="text-white/70 text-[10px] lg:text-xs">
                      Saldo Deposit
                    </p>
                  </div>
                  <p className="text-lg lg:text-2xl font-bold text-white mb-2 lg:mb-3">
                    Rp 10,000
                  </p>
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-1.5 lg:py-2 rounded-lg lg:rounded-xl text-[10px] lg:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-lg hover:shadow-xl transition-all">
                    <Wallet className="w-3 h-3 lg:w-4 lg:h-4" />
                    Deposit
                  </button>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-blue-500/30 shadow-xl">
                  <div className="flex items-center gap-1.5 lg:gap-2 mb-2">
                    <CreditCard className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-400" />
                    <p className="text-white/70 text-[10px] lg:text-xs">
                      Saldo Pencairan
                    </p>
                  </div>
                  <p className="text-lg lg:text-2xl font-bold text-white mb-2 lg:mb-3">
                    Rp 500
                  </p>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-1.5 lg:py-2 rounded-lg lg:rounded-xl text-[10px] lg:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-lg hover:shadow-xl transition-all">
                    <CreditCard className="w-3 h-3 lg:w-4 lg:h-4" />
                    Tarik Dana
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-2 lg:gap-3">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg lg:rounded-xl p-2 lg:p-3 text-center border border-white/10 shadow-lg">
                  <p className="text-white/60 text-[10px] lg:text-xs mb-0.5 lg:mb-1">
                    Rp 10,000
                  </p>
                  <p className="text-emerald-400 text-[10px] lg:text-xs font-semibold">
                    Turnover
                  </p>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg lg:rounded-xl p-2 lg:p-3 text-center border border-white/10 shadow-lg">
                  <p className="text-white/60 text-[10px] lg:text-xs mb-0.5 lg:mb-1">
                    Rp 0
                  </p>
                  <p className="text-emerald-400 text-[10px] lg:text-xs font-semibold">
                    Profit
                  </p>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg lg:rounded-xl p-2 lg:p-3 text-center border border-white/10 shadow-lg">
                  <p className="text-white/60 text-[10px] lg:text-xs mb-0.5 lg:mb-1">
                    Rp 0
                  </p>
                  <p className="text-emerald-400 text-[10px] lg:text-xs font-semibold">
                    Bonus
                  </p>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-4 gap-3 lg:gap-4">
                {[
                  { icon: Home, label: "About", color: "emerald" },
                  { icon: BarChart3, label: "Log Spin", color: "blue" },
                  { icon: Gift, label: "Cekin", color: "purple" },
                  { icon: Target, label: "Togel", color: "pink" },
                  { icon: Gift, label: "Hadiah", color: "red" },
                  { icon: BarChart3, label: "Spin Win", color: "cyan" },
                  { icon: TrendingUp, label: "News", color: "orange" },
                  { icon: User, label: "Service", color: "yellow" },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className="flex flex-col items-center gap-1.5 lg:gap-2 group"
                  >
                    <div
                      className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl lg:rounded-2xl flex items-center justify-center border border-${item.color}-500/30 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <item.icon
                        className={`w-5 h-5 lg:w-6 lg:h-6 text-${item.color}-400`}
                      />
                    </div>
                    <span className="text-white text-[10px] lg:text-xs">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Activities Section - Mobile Only */}
              <div className="lg:hidden bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-3 lg:p-4 border border-white/10 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-sm">
                    Aktivitas Terbaru
                  </h3>
                  <button className="text-emerald-400 text-xs font-semibold">
                    Live Feed
                  </button>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      amount: "1.073.604",
                      account: "Demat",
                      status: "Selesai Pesanan",
                      color: "emerald",
                      icon: TrendingUp,
                    },
                    {
                      amount: "508.800",
                      account: "Liburan",
                      status: "Kirim Pesanan",
                      color: "blue",
                      icon: Gift,
                    },
                    {
                      amount: "1.101.469",
                      account: "Dibuat",
                      status: "BEST CHOICE",
                      color: "yellow",
                      icon: Zap,
                    },
                    {
                      amount: "1.441.916",
                      account: "Vinikas",
                      status: "Menunggu Bank",
                      color: "pink",
                      icon: Target,
                    },
                  ].map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-slate-900/50 rounded-lg p-2.5"
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br from-${activity.color}-500 to-${activity.color}-600 rounded-full flex items-center justify-center shrink-0`}
                        >
                          <activity.icon className="w-4 h-4 text-white" />
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
                        className={`bg-gradient-to-r from-${activity.color}-500 to-${activity.color}-600 text-white px-2.5 py-1 rounded-full text-[10px] font-bold shadow-lg shrink-0`}
                      >
                        {activity.status}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - AI Mining & Activities (Desktop Only) */}
            <div className="hidden lg:block space-y-6">
              {/* AI Super Mining Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-5 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <h3 className="text-white font-bold text-base">
                      AI SUPER MINING
                    </h3>
                  </div>
                  <h4 className="text-white text-xl font-bold leading-tight mb-3">
                    HASILKAN UANG
                    <br />
                    SETIAP HARI
                  </h4>

                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-3 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 text-xs">
                        Kecepatan Mining:
                      </span>
                      <span className="text-emerald-300 font-bold text-sm">
                        1,000 H/s
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 text-xs">Hash Rate:</span>
                      <span className="text-yellow-300 font-bold text-sm">
                        HIGH
                      </span>
                    </div>
                  </div>

                  <p className="text-white/90 text-xs leading-relaxed mb-4">
                    Dengan teknologi AI terbaru, sistem mining otomatis kami
                    akan menghasilkan profit konsisten setiap harinya.
                  </p>

                  <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-2.5 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    Mulai Mining Sekarang
                  </button>
                </div>
              </div>

              {/* Activities Section - Desktop */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 border border-white/10 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold">Aktivitas Terbaru</h3>
                  <button className="text-emerald-400 text-sm font-semibold">
                    Live Feed
                  </button>
                </div>

                <div className="space-y-3">
                  {[
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
                  ].map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-between bg-slate-900/50 rounded-lg p-3 gap-3"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br from-${activity.color}-500 to-${activity.color}-600 rounded-full flex items-center justify-center shrink-0`}
                        >
                          <activity.icon className="w-5 h-5 text-white" />
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
                        className={`bg-gradient-to-r from-${activity.color}-500 to-${activity.color}-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg shrink-0`}
                      >
                        {activity.status}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile AI Mining Banner */}
          <div className="lg:hidden mt-6">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl p-5 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-yellow-300" />
                  <h3 className="text-white font-bold text-base">
                    AI SUPER MINING
                  </h3>
                </div>
                <h4 className="text-white text-xl font-bold leading-tight mb-3">
                  HASILKAN UANG
                  <br />
                  SETIAP HARI
                </h4>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90 text-xs">
                      Kecepatan Mining:
                    </span>
                    <span className="text-emerald-300 font-bold text-sm">
                      1,000 H/s
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90 text-xs">Hash Rate:</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      HIGH
                    </span>
                  </div>
                </div>

                <p className="text-white/90 text-xs leading-relaxed mb-4">
                  Dengan teknologi AI terbaru, sistem mining otomatis kami akan
                  menghasilkan profit konsisten setiap harinya.
                </p>

                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Selamat Datang Di AI Robot Mining
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Navigation - Mobile Only */}
        <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-white/10 lg:hidden">
          <div className="max-w-md mx-auto flex justify-around items-center py-3 px-4">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: BarChart3, label: "Activity" },
              { icon: CreditCard, label: "Payment" },
              { icon: User, label: "Profile" },
            ].map((item, idx) => (
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
                  <item.icon
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
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
