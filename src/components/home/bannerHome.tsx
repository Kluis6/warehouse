import { Carousel } from "flowbite-react";

export default function BannerHome() {
  return (
    <div className="my-8 w-full lg:h-80 h-72">
      <Carousel indicators={true}>
        <div className="flex h-full items-center justify-center p-4 bg-orange-800"></div>
        <div className="flex h-full items-center justify-center bg-lime-400">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-teal-600">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}
