"use client";
import { Carousel, Flowbite } from "flowbite-react";
import Link from "next/link";

import type { CustomFlowbiteTheme } from "flowbite-react";

const carouselTheme: CustomFlowbiteTheme = {
  carousel: {
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-blue-800 sm:h-6 sm:w-6",
    },
  },
};

export default function CarouselCategories() {
  return (
    <div className="py-4 scroll-smooth">
      <div className="grid grid-cols-12 gap-4 gap-y-8">
        <div className="col-span-12">
          <h3 className="text-slate-800 text-lg lg:text-2xl font-semibold">
            Navegue por categorias
          </h3>
        </div>
        <div className="col-span-12">
          <div className="h-36">
            <Flowbite theme={{ theme: carouselTheme }}>
              <Carousel slide={false} indicators={false}>
                <div className="flex h-full items-center justify-center">
                  <Link href={""}>
                    <div className="size-32 flex-none bg-lime-500 rounded-full border-2 border-red-700"></div>
                  </Link>
                </div>
                <div className="flex h-full items-center justify-center">
                  Slide 2
                </div>
                <div className="flex h-full items-center justify-center">
                  Slide 3
                </div>
              </Carousel>
            </Flowbite>
          </div>
          {/* <div className="flex items-center justify-start gap-9 overflow-x-auto overflow-y-hidden touch-pan-x px-14 mx-auto scrollbar scrollbar-none">
            <a
              href="#sobre"
              className="absolute left-0 bg-white shadow rounded-full p-2 flex items-center justify-center active:scale-90 transition-transform"
            >
              <BsChevronLeft className="text-red-700" size={22} />
            </a>
            <Link href="/category">
              <div className="size-32 flex-none bg-green-500 rounded-full border-2 border-red-700"></div>
            </Link>
            <Link href={""}>
              <div className="size-32 flex-none bg-yellow-500 rounded-full border-2 border-red-700"></div>
            </Link>
            <Link href={""}>
              <div className="size-32 flex-none bg-lime-500 rounded-full border-2 border-red-700"></div>
            </Link>
            <Link href={""}>
              <div className="size-32 flex-none bg-yellow-500 rounded-full border-2 border-red-700"></div>
            </Link>
            <Link href={""}>
              <div className="size-32 flex-none bg-purple-500 rounded-full border-2  border-red-700"></div>
            </Link>
            <Link href={""}>
              <div className="size-32 flex-none bg-yellow-500 rounded-full border-2 border-red-700"></div>
            </Link>
            <Link href={""}>
              <div className="size-32 flex-none bg-red-500 rounded-full border-2 border-red-700"></div>
            </Link>
            <Link href={""}>
              <div
                id="sobre"
                className="size-32 flex-none bg-yellow-500 rounded-full border-2 border-red-700"
              ></div>
            </Link>
            <Link href={""}>
              <div className="size-32 flex-none bg-yellow-500 rounded-full border-2 border-red-700"></div>
            </Link>
            <Link href={""}>
              <div className="size-32 flex-none bg-yellow-500 rounded-full border-2 border-red-700"></div>
            </Link>
            <Link href={""}>
              <div className="size-32 flex-none bg-yellow-500 rounded-full border-2 border-red-700"></div>
            </Link>
            <Link href={""}>
              <div className="size-32 flex-none bg-yellow-500 rounded-full border-2 border-red-700"></div>
            </Link>

            <button className="right-0 absolute p-2 bg-white rounded-full flex items-center justify-center transition-transform shadow active:scale-90">
              <BsChevronRight size={22} className="text-red-700" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
