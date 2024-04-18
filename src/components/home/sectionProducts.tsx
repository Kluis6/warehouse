import Link from "next/link";
import Cardproduct from "./cardProduct";
import { BsChevronRight } from "react-icons/bs";

export default function sectionProducts() {
  return (
    <div className="grid grid-cols-12 py-4 gap-4 gap-y-8 ">
      <div className="col-span-12">
        <h3 className="text-slate-800 text-lg lg:text-2xl font-semibold">
          Seção de produtos{" "}
        </h3>
      </div>
      <div className="xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12">
        <Cardproduct />
      </div>
      <div className="xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12">
        <Cardproduct />
      </div>
      <div className="xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12">
        <Cardproduct />
      </div>
      <div className="xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12">
        <Cardproduct />
      </div>
      <div className="xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12">
        <Cardproduct />
      </div>
      <div className="xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12">
        <Cardproduct />
      </div>
      <div className="col-span-12 flex justify-end ">
        <Link href={""} className="flex items-center space-x-2">
          <h3 className="text-blue-600 text-sm font-semibold">
            Ver mais produtos{" "}
          </h3>
          <BsChevronRight className="text-blue-600" />
        </Link>
      </div>
    </div>
  );
}
