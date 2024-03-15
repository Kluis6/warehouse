import BannerHome from "@/components/home/bannerHome";
import BannerMarks from "@/components/home/bannerMarks";
import SectionProducts from "@/components/home/sectionProducts";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 xl:px-0">
        <BannerHome />
        <SectionProducts />
        <BannerMarks />
        <SectionProducts />
      </main>
    </>
  );
}
