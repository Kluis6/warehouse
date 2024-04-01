
import { Carousel, Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const caTheme: CustomFlowbiteTheme = {
  carousel: {
    indicators: {
      active: {
        off: "bg-red-500 hover:bg-white",
        on: "bg-white dark:bg-gray-800",
      },
      base: "h-3 w-3 rounded",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-300  sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
  },
};

export default function BannerHome() {
  return (
    <div className="my-8 w-full h-52 ">
      <Flowbite theme={{ theme: caTheme }}>
        <Carousel slide={false} indicators={true}>
          <div className="flex h-full items-center justify-center">
            <div className="size-32 flex-none bg-lime-500 rounded-full border-2 border-red-700"></div>
          </div>
          <div className="flex h-full items-center justify-center">Slide 2</div>
          <div className="flex h-full items-center justify-center">Slide 3</div>
        </Carousel>
      </Flowbite>
    </div>
  );
}
