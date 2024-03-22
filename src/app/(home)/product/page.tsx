import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function Product() {
  return (
    <main className="container mx-auto px-4 lg:px-0 my-8">
      <div className="bg-white w-full p-4 shadow rounded border border-slate-300">
        <div className="grid-cols-12 grid gap-4">
          <div className="col-span-12">
            <h3 className="text-slate-700 text-lg lg:text-xl font-semibold">
              Caixa d'água Polietileno 1.000L Azul Fortlev
            </h3>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="h-full w-full bg-teal-500 p-4"></div>
          </div>
          <div className="col-span-12 md:col-span-6 ">
            <div className="flex flex-col space-y-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                itaque ipsum provident quasi similique laboriosam ab, accusamus
                minus modi pariatur, impedit eum, suscipit magnam harum debitis
                adipisci incidunt odio cupiditate?
              </p>
              <section className=" flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-medium text-slate-900">
                    R$ 000,00
                  </h4>
                  <p className="text-slate-600">
                    em até <span>12x R$ 00,00</span> sem juros
                  </p>
                </div>
                <div>
                  <p>formas de pagamento</p>
                </div>
              </section>
              <div className="flex items-center justify-center w-full md:justify-end">
                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-md py-2.5 px-5 text-white font-bold flex items-center md:w-auto justify-center  space-x-2 w-full "
                >
                  <BsWhatsapp /> <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
