import Cardproduct from "@/components/home/cardProduct";

import React from "react";

export default function Category({ params }: { params: any }) {
  return (
    <main className="container mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-12 py-4 gap-4 gap-y-8 ">
        <div className="col-span-12 flex justify-between items-center">
          <h3 className="text-slate-800 text-lg lg:text-2xl font-semibold">
            Categoria x
          </h3>
          <button type="button" className="visible lg:hidden">
            filtros
          </button>
        </div>
        <div className="lg:col-span-3 hidden lg:flex">
          <div className="bg-white p-4 w-full shadow h-52">
            <h2 className="text-base font-medium">Filtrar por:</h2>
          </div>
        </div>
        <div className="lg:col-span-9 col-span-12 ">
          <div className="grid grid-cols-12 gap-4 ">
            <div className="xl:col-span-3 md:col-span-4 col-span-6">
              <Cardproduct />
            </div>
            <div className="xl:col-span-3 md:col-span-4 col-span-6">
              <Cardproduct />
            </div>
            <div className="xl:col-span-3 md:col-span-4 col-span-6">
              <Cardproduct />
            </div>
            <div className="xl:col-span-3 md:col-span-4 col-span-6">
              <Cardproduct />
            </div>
            <div className="col-span-12 text-center bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-yellow-400 xl:bg-lime-400">
              paginção
            </div>
          </div>
        </div>

        {/* <div className="xl:col-span-2 md:col-span-4 col-span-6">
          <Cardproduct />
        </div>
        <div className="xl:col-span-2 md:col-span-4 col-span-6">
          <Cardproduct />
        </div>
        <div className="xl:col-span-2 md:col-span-4 col-span-6">
          <Cardproduct />
        </div>
        <div className="xl:col-span-2 md:col-span-4 col-span-6">
          <Cardproduct />
        </div>
        <div className="xl:col-span-2 md:col-span-4 col-span-6">
          <Cardproduct />
        </div>
        <div className="xl:col-span-2 md:col-span-4 col-span-6">
          <Cardproduct />
        </div> */}
      </div>
    </main>
  );
}
