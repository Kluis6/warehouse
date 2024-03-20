"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsCheckLg, BsPlusLg } from "react-icons/bs";

export default function Cardproduct() {
  const [confirm, setConfirm] = useState(false);
  // const [tooltips, setTooltips] = useState(false);

  const addChart = () => {
    setConfirm(true);
  };
  return (
    <div className="relative flex flex-col overflow-hidden bg-white outline rounded outline-1 outline-slate-300 hover:shadow-xl transition-shadow duration-300 active:shadow">
      {/* <Image src={""} alt={""} width={100} className="w-full h-[15rem]" /> */}
      <button
        className="right-4 top-4 absolute bg-white rounded-full p-1.5 shadow-lg active:scale-90 transition-all duration-100  active:shadow z-30"
        onClick={addChart}
      >
        {confirm ? (
          <BsCheckLg size={20} className="text-green-700" />
        ) : (
          <BsPlusLg size={20} className="text-red-700" />
        )}
      </button>
      <Link href='/clientstore'>
        <div className="w-full h-[15rem] bg-slate-500"></div>

        <div className="lg:px-4 px-2 py-4 space-y-4">
          <h4 className="text-sm text-ellipsis  text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
          <div>
            <p className="text-lg font-bold text-slate-900">R$ 000,00</p>
            <p className="font-normal text-slate-500 text-xs">
              10x de R$ 00,00 sem juros
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
