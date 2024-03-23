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

// export async function generateStaticParams() {
//   const request = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await request.json();
//   return posts.map((post: { id: any; }) => ({
//     postId: String(post.id)
//   }));
// }
