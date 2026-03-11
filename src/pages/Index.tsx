import Snowfall from "@/components/Snowfall";
import HeroSection from "@/components/HeroSection";
import PhotoTimeline from "@/components/PhotoTimeline";
import AskOutSection from "@/components/AskOutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Snowfall />
      <HeroSection />
      <PhotoTimeline />
      <AskOutSection />
    </div>
  );
};

export default Index;
