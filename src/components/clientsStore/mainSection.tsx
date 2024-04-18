import React from "react";
import Cardproduct from "../home/cardProduct";
import { BsSliders } from "react-icons/bs";

export default function MainSection() {
  return (
    <main className="py-4">
      <div className="grid grid-cols-12 gap-4 gap-y-8 ">
        <div className="lg:col-span-3 hidden lg:flex">
          <div className="bg-white p-4 w-full shadow h-52">
            <h2 className="text-base lg:text-lg font-bold">Filtrar por:</h2>
            <section>
              <h3 className="font-medium">Departamento</h3>
              <ul>
                <li>Construção</li>
                <li>Pintura</li>
              </ul>
              <h3>Categoria</h3>
              <h3>Marca</h3>
            </section>
          </div>
        </div>
        <div className="lg:col-span-9 col-span-12 ">
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 flex justify-end items-center visible lg:hidden">
              <button
                type="button"
                className="flex items-center space-x-3 py-2.5 bg-slate-300 hover:bg-slate-400 active:bg-slate-500 text-sm px-5 text-slate-900  rounded font-medium"
              >
                <BsSliders /> <span>Filtros</span>
              </button>
            </div>
            <div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
              <Cardproduct />
            </div>
            <div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
              <Cardproduct />
            </div>
            <div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
              <Cardproduct />
            </div>
            <div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
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
