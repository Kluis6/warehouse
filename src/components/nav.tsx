"use client";

import Link from "next/link";
import React, { SetStateAction, useState } from "react";

import { BsHouse, BsList, BsPerson, BsSearch, BsX } from "react-icons/bs";

export default function Nav() {
  const [searchInput, setSearchInput] = useState("");

  const searchSubmit = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchInput(e.target.value);
  };
  const enviar:string = searchInput
  const searchClear = () => {
    setSearchInput("");
  };
  return (
    <div className="bg-yellow-300 w-full py-2 md:py-4">
      <div className="container mx-auto px-4 space-y-2">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <BsHouse className="text-slate-800 " size={22} />
            <h1 className="text-xl font-medium text-slate-800 hidden md:flex">
              Nome da bagaça
            </h1>
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
            <button className="p-2.5 visible md:hidden">
              <BsList size={22} className="text-slate-800" />
            </button>
          </div>
        </div>
        <nav className="hidden md:flex">
          <ul>
            <li>
              <Link href={""} />
              isso ai
            </li>
          </ul>
        </nav>
      </div>
    </div>

    // <Navbar fluid className="bg-yellow-300">
    //   <div className="container mx-auto flex flex-col w-full px-4">
    //     <div className="flex flex-row items-center justify-between gap-2">
    //       <Navbar.Brand href="" className="space-x-2 hidden md:flex">
    //         <BiSolidHome size={18} />
    //         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
    //           Armazém
    //         </span>
    //       </Navbar.Brand>
    //       <div className="relative flex items-center">
    //         {" "}
    //         <input
    //           type="search"
    //           placeholder="para obra"
    //           required
    //           className="lg:w-[35rem] w-[16rem] outline outline-slate-50 flex  pe-10 shadow"
    //         />
    //         <div className="absolute right-1 top-[5px]  flex divide-x h-contend">
    //           <button className=" p-2 rounded text-slate-600 hover:bg-slate-100 active:bg-slate-200 h-full">
    //             <BsX />
    //           </button>
    //           <button className="p-2 rounded text-slate-600 hover:bg-slate-100 active:bg-slate-200 h-full">
    //             <BsSearch />
    //           </button>
    //         </div>
    //       </div>
    //       <div className="flex space-x-2">
    //         <button className="p-2.5">
    //           <BsPerson />
    //         </button>
    //         <Navbar.Toggle />
    //       </div>
    //     </div>
    //     <div className=" flex items-center justify-between md:mt-4">
    //       {/* <Button>CEP</Button> */}
    //       <Navbar.Collapse>
    //         <Navbar.Link href="#">Materias de construção</Navbar.Link>
    //         <Navbar.Link href="#">Materias eletricos</Navbar.Link>
    //         <Navbar.Link href="#">Materias hidraulicos </Navbar.Link>
    //         <Navbar.Link href="#">Pintura</Navbar.Link>
    //         <Navbar.Link href="#">Pisos e revestimentos </Navbar.Link>
    //         <Navbar.Link href="#">Portas, janelas e portões </Navbar.Link>
    //         <Navbar.Link href="#">Ferramentas </Navbar.Link>
    //         <Navbar.Link href="#">Ultilidades para o lar </Navbar.Link>
    //         <Navbar.Link href="#">Acessorios </Navbar.Link>
    //       </Navbar.Collapse>
    //     </div>
    //   </div>
    // </Navbar>
  );
}
