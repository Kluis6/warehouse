"use client";

import Link from "next/link";
import React, { useReducer, useState } from "react";
import { BsCheckLg, BsPlusLg } from "react-icons/bs";

export default function Cardproduct() {
  const [confirm, setConfirm] = useState(false);
  // const [tooltips, setTooltips] = useState(false);

  const tooltips: boolean = false;

  function reducer(state: any, action: { type: any }) {
    switch (action.type) {
      case "show":
        return { ...state, tooltips: true };
      case "hide":
        return { ...state, tooltips: false };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, tooltips);

  const showTips = () => {
    dispatch({ type: "show" });
  };

  const hideTips = () => {
    dispatch({ type: "hide" });
  };

  const addChart = () => {
    setConfirm(true);
  };
  return (
    <div className="relative flex flex-col overflow-hidden bg-white outline rounded outline-1 outline-slate-300 hover:shadow-xl transition-shadow duration-300 active:shadow">
      {/* <Image src={""} alt={""} width={100} className="w-full h-[15rem]" /> */}
      <div className="relative flex items-center">
        {state.tooltips && (
          <span className="absolute text-xs lg:text-sm right-14 top-[1.11rem] bg-slate-900/80 text-slate-100 shadow-md px-2.5 py-1.5 rounded transition-all duration-150 ">
            Adicione a sua lista
          </span>
        )}

        <button
          className="right-4 top-4 absolute bg-white rounded-full p-1.5 shadow-lg active:scale-90 transition-all duration-100  active:shadow z-30"
          onClick={addChart}
          onMouseEnter={showTips}
          onMouseLeave={hideTips}
        >
          {confirm ? (
            <BsCheckLg size={20} className="text-green-700" />
          ) : (
            <BsPlusLg size={20} className="text-red-700" />
          )}
        </button>
      </div>

      <Link href={""}>
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
