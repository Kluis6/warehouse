import BannerAdsVideo from "@/components/home/bannerAdsVideo";
import BannerHome from "@/components/home/bannerHome";
import BannerMarks from "@/components/home/bannerMarks";
import CarouselCategories from "@/components/home/carouselCategories";
import SectionProducts from "@/components/home/sectionProducts";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 xl:px-0">
        <BannerHome />
        <SectionProducts />
        <CarouselCategories />
        <SectionProducts />
        <BannerAdsVideo />
        <SectionProducts />
        <SectionProducts />
        <BannerMarks />
        <SectionProducts />
      </main>
    </>
  );
}
