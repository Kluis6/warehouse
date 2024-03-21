import React from "react";

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
            {" "}
            <div className="h-full w-full bg-teal-500 p-4"></div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                itaque ipsum provident quasi similique laboriosam ab, accusamus
                minus modi pariatur, impedit eum, suscipit magnam harum debitis
                adipisci incidunt odio cupiditate?
              </p>
              <div>sdsds</div>
              <div className="text-end">
                <button type="button" className="bg-green-500 rounded-md p-2">
                  whatapp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
