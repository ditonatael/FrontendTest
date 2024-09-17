import HeroSection from "~/components/heroSection";
import BrowseCategory from "~/components/browseCategorySection";
import BrowseTrending from "~/components/browseTrendingSection";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <HeroSection />
      <BrowseCategory />
      <BrowseTrending />
    </div>
  );
}
