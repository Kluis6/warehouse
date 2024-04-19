"use client";
import Image from "next/image";
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
        className=" left-2 top-2 absolute bg-white rounded-full p-1.5 shadow-lg active:scale-90 transition-all duration-100  active:shadow z-30"
        onClick={addChart}
      >
        {confirm ? (
          <BsCheckLg size={20} className="text-green-700" />
        ) : (
          <BsPlusLg size={20} className="text-blue-700" />
        )}
      </button>
      <Link href="/product" className="flex sm:flex-col">
        {/* <div className="md:w-full sm:h-[14rem] bg-slate-500 w-[40rem] p-10"></div> */}
        <Image
          src="https://images.pexels.com/photos/6585741/pexels-photo-6585741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={130}
          height={150}
          alt={""}
          className="sm:w-full"
        />

        <div className="lg:px-4 px-2 py-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <h4 className="text-sm line-clamp-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
              quas blanditiis maiores consequuntur nesciunt esse, officia,
              voluptates porro aspernatur fuga neque dolores impedit ea atque
              cumque, laboriosam nisi. Minima, ratione?
            </h4>
            <Link href={""}>
              <div className="bg-yellow-200 py-1 px-2.5 text-xs rounded-full  space-x-1 text-ellipsis flex items-center w-fit">
                <span className="font-normal">Vendido por:</span>
                <p className="font-medium text-ellipsis ">Nome da Loja</p>
              </div>
            </Link>
          </div>

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
