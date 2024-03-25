import Link from "next/link";

import Cardproduct from "../home/cardProduct";
import { BsChevronRight } from "react-icons/bs";

export default function RelatedProducts() {
  return (
    <div className="grid grid-cols-12 py-4 gap-4 gap-y-8 ">
      <div className="col-span-12">
        <h3 className="text-slate-800 text-lg lg:text-2xl font-semibold">
          Produtos relacionados
        </h3>
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
      </div>
      <div className="xl:col-span-2 md:col-span-4 col-span-6">
        <Cardproduct />
      </div>
    </div>
  );
}
