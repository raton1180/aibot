"use client";
import Header from "@/components/Header";
import InstallBanner from "@/components/InstallBanner";
import BalanceCards from "@/components/BalanceCards";
import FeatureGrid from "@/components/FeatureGrid";
import MiningBanner from "@/components/MiningBanner";
import ActivitiesSection from "@/components/ActivitiesSection";
import BottomNavigation from "@/components/BottomNavigation";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-md lg:max-w-7xl mx-auto min-h-screen">
        <Header />

        <main className="px-4 lg:px-8 py-6 pb-24 lg:pb-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-2 space-y-6">
              <InstallBanner />
              <BalanceCards />
              <div className="lg:hidden mt-6">
                <MiningBanner isMobile={true} />
              </div>
              <FeatureGrid />

              <div className="lg:hidden">
                <ActivitiesSection isMobile={true} />
              </div>
            </div>

            <div className="hidden lg:block space-y-6">
              <MiningBanner isMobile={false} />
              <ActivitiesSection isMobile={false} />
            </div>
          </div>
        </main>

        <BottomNavigation />
      </div>
    </div>
  );
}
