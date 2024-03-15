import Link from "next/link";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function BannerMarks() {
  return (
    <div className="py-4">
      <div className="grid grid-cols-12 gap-4 gap-y-8">
        <div className="col-span-12">
          <h3 className="text-slate-800 text-lg lg:text-2xl font-semibold">
            As Marcas que você conhece e confia
          </h3>
        </div>
        <div className="col-span-12 relative">
          <div className="flex  items-center justify-start gap-8 overflow-auto  scroll-smooth px-12 mx-auto">
            <button className="absolute left-0 bg-white shadow rounded-full p-2 flex items-center justify-center ">
              <BsChevronLeft className="text-red-700" size={22} />
            </button>
            <Link href={""}>
              <div className="size-32 flex-none bg-yellow-500 rounded-full"></div>
            </Link>

            <div className="size-32 flex-none bg-green-500 rounded-full"></div>
            <div className="size-32 flex-none bg-red-500 rounded-full"></div>
            <div className="size-32 flex-none bg-rose-500 rounded-full"></div>
            <div className="size-32 flex-none bg-pink-500 rounded-full"></div>
            <div className="size-32 flex-none bg-green-500 rounded-full"></div>
            <div className="size-32 flex-none bg-green-500 rounded-full"></div>
            <div className="size-32 flex-none bg-green-500 rounded-full"></div>
            <div className="size-32 flex-none bg-green-500 rounded-full"></div>
            <div className="size-32 flex-none bg-green-500 rounded-full"></div>
            <div className="size-32 flex-none bg-green-500 rounded-full"></div>
            <div className="size-32 flex-none bg-green-500 rounded-full"></div>
            <button className="right-0 absolute p-2 bg-white rounded-full flex items-center justify-center shadow">
              <BsChevronRight size={22} className="text-red-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
