import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import HomeSections from "@/components/home/HomeSections";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TrustStrip />
      <HomeSections />
    </div>
  );
}
