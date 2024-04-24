import BannerAdsVideo from "@/components/home/bannerAdsVideo";
import Productview from "@/components/products/productview";
import RelatedProducts from "@/components/products/relatedProducts";

export default function Product({ params }: { params: any }) {
  return (
    <>
      <main className="container mx-auto px-4 md:px-0 lg:px-4 my-8">
        <Productview />
        <RelatedProducts />
        <BannerAdsVideo />
      </main>
    </>
  );
}

// metadata para ceo
// export async function generateMetadata({ params }) {
//   return {
//     title: `${params.slug}`,
//     description: ` ${params.slug}`,
//   };
// }
