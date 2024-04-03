import { Badge } from "flowbite-react";
import React from "react";
import { BsRecordCircle, BsWhatsapp } from "react-icons/bs";

export default function StoreInfo() {
  return (
    <div className="bg-white w-full shadow rounded-lg p-4 space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-medium text-slate-800">Nome Loja</h2>
        <Badge color="success" size="sm" icon={BsRecordCircle}>
          Aberto
        </Badge>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <h3 className="text-sm font-normal text-slate-700">
          Endereço da Loja completo
        </h3>
        <span>
          <p className="text-sm font-medium text-slate-800">
            09:00 as 20:00 de Segunda a Sexta
          </p>
          <p className="text-sm font-medium text-slate-800">
            09:00 as 17:00 de Sabado e feriados
          </p>
        </span>
      </div>
      <div className="flex items-center space-x-1">
        <BsWhatsapp className="text-green-700" />{" "}
        <span className="text-sm font-medium text-slate-800">
          (21) 99999-9999
        </span>
      </div>
    </div>
  );
}
