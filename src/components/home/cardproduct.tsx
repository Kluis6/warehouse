import Link from "next/link";
import React from "react";

export default function Cardproduct() {
  return (
    <Link href={""}>
      <div className="relative flex flex-col overflow-hidden bg-white outline rounded outline-1 outline-slate-300 hover:shadow-xl transition-shadow duration-300">
        {/* <Image src={""} alt={""} width={100} className="w-full h-[15rem]" /> */}
        <div className="w-full h-[15rem] bg-slate-500"></div>
        <div className="p-4 space-y-4">
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
