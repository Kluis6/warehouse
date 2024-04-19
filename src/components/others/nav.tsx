"use client";
import Link from "next/link";
import React, { SetStateAction, useState } from "react";
import Server from "@/app/api/server";

import {
  BsHouse,
  BsHouseDoor,
  BsList,
  BsPerson,
  BsSearch,
  BsX,
} from "react-icons/bs";
import MobileMenu from "./mobileMenu";

export default function Nav() {
  const [searchInput, setSearchInput] = useState("");
  const [mobile, setMobile] = useState(false);
  const handlerMobile = () => {
    setMobile(!mobile);
  };

  const ServerData = Server;

  const searchSubmit = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchInput(e.target.value);
  };
  const enviar: string = searchInput;
  const searchClear = () => {
    setSearchInput("");
  };
  return (
    <>
      <div className="bg-yellow-300 w-full py-2 md:py-4">
        <div className="container mx-auto px-4 space-y-2">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-2">
              <BsHouse className="text-slate-800 " size={22} />
              <Link href="/">
                <h1 className="text-xl font-medium text-slate-800 hidden md:flex">
                  Zé do Bazar
                </h1>
              </Link>
            </div>
            <div>
              <form className="flex items-center">
                <label html-for="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 end-1 flex items-center">
                    <button
                      type="button"
                      className={`h-content hover:bg-slate-200 p-2.5 z-10 
                    ${searchInput.length > 0 ? "visible" : "hidden"}
                    `}
                      onClick={searchClear}
                    >
                      <BsX className="text-gray-500 dark:text-gray-400" />
                    </button>
                    <div className="h-contend w-[1px] py-4 bg-slate-300 mx-1"></div>
                    <button
                      type="submit"
                      className="h-content hover:bg-slate-200 p-2.5 z-10"
                    >
                      <BsSearch className=" text-gray-500 dark:text-gray-400  " />
                    </button>
                  </div>
                  <input
                    onChange={searchSubmit}
                    type="search"
                    value={searchInput}
                    className="lg:w-[35rem] md:w-[25rem] w-[14rem] appearance-none  bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block pe-20 md:pe-24 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Aqui você encontra..."
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center space-x-1">
              <button className="p-2.5">
                <BsPerson size={22} className="text-slate-800" />
              </button>
              <button
                className="p-2.5 visible md:hidden"
                onClick={handlerMobile}
              >
                <BsList size={22} className="text-slate-800" />
              </button>
            </div>
          </div>
          <nav className="hidden md:flex  space-x-8">
            <ul className="flex items-center space-x-4">
              {ServerData.categories.map(
                (
                  data: {
                    category:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | React.PromiseLikeOfReactNode
                      | null
                      | undefined;
                  },
                  index: React.Key | null | undefined
                ) => (
                  <li key={index}>
                    <Link href={""} />
                    {data.category}
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
      <MobileMenu open={mobile} action={handlerMobile}>
        <section className="bg-yellow-300 ">
          <div className="container mx-auto p-4 space-y-4">
            <div className="flex items-center space-x-4 ">
              <div className="flex-none">
                <div className="bg-slate-50 size-14 flex items-center justify-center rounded-full">
                <BsPerson size={28}  className="text-slate-500"/>
                </div>
             
              </div>
              <div className="flex flex-col">
                <h2 className="text-base text-slate-700 font-semibold font-sans">
                  Bem-vindo
                </h2>
                <p className="text-sm font-sans text-slate-600">
                  Entre na sua conta para ver sua lista de orçamentos
                </p>
              </div>
            </div>
            <div className=" flex items-center space-x-4">
              <button className="py-2.5 bg-blue-700 text-sm text-white px-5 w-full inline-block font-semibold text-center rounded">
                Entrar
              </button>
              <button className="py-2.5 border-blue-700 border text-sm bg-white text-blue-700 px-5 w-full inline-block  font-semibold rounded text-center">
                Criar conta
              </button>
            </div>
          </div>
        </section>
        <section className="py-4">
          <ul className=" divide-y">
            <li className="px-4 py-2.5">
              <Link href={""}>
                <div className="flex items-center space-x-4">
                  <BsHouseDoor size={22} className=" text-blue-700" />
                  <span>sasas</span>
                </div>
              </Link>
            </li>
            <li className="px-4 py-2.5">
              <Link href={""}>
                <div className="flex items-center space-x-4">
                  <BsHouseDoor size={22} className=" text-blue-700" />
                  <span>sasas</span>
                </div>
              </Link>
            </li>
            <li className="px-4 py-2.5">
              <Link href={""}>
                <div className="flex items-center space-x-4">
                  <BsHouseDoor size={22} className=" text-blue-700" />
                  <span>sasas</span>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </MobileMenu>
      {/* <div
        className={`bg-yellow-300 transition-all absolute h-dvh ease-in-out duration-300  z-40 shadow-2xl ${
          mobile ? "w-screen" : " w-[0rem]"
        }`}
      >
        <div
          className={`${
            mobile ? "visible " : "hidden"
          } duration-700 transition-all`}
        >
          <div className="p-4">muito bom</div>
        </div>
      </div> */}
    </>
  );
}
