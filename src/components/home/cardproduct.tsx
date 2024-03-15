import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";

export default function Cardproduct() {
  return (
    <Link href={""} className="hover:shadow-2xl">
      <div className="relative flex flex-col overflow-hidden bg-white outline rounded outline-1 outline-slate-300 hover:shadow-xl transition-shadow duration-300 active:shadow">
        {/* <Image src={""} alt={""} width={100} className="w-full h-[15rem]" /> */}
        <div className="w-full h-[15rem] bg-slate-500"></div>
        <button className="right-4 top-4 absolute bg-white rounded-full p-1 shadow-lg">
          <BsPlus size={20} className="text-green-700" />
        </button>
        <div className="lg:px-4 px-2 py-4 space-y-4">
          <h4 className="text-sm truncate text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
          <div>
            <p className="text-lg font-bold text-slate-900">R$ 000,00</p>
            <p className="font-normal text-slate-500 text-xs">
              10x de R$ 00,00 sem juros
            </p>
          </div>
        </div>
      </div>
   </Link>
  );
}
