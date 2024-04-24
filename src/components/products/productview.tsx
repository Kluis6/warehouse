"use client";
import { Carousel, CustomFlowbiteTheme, Flowbite, Modal } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { BsCheckLg, BsPlusLg, BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
const carouselTheme: CustomFlowbiteTheme = {
  carousel: {
    control: {
      base: `inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10`,
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
  },
};

export default function Productview() {
  const [openModal, setOpenModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [tabs, setTabs] = useState(true);

  const tab1 = () => {
    setTabs(true);
  };
  const tab2 = () => {
    setTabs(false);
  };

  const addChart = () => {
    setConfirm(true);
  };
  return (
    <>
      <div className="bg-white w-full p-4 shadow rounded border border-slate-300">
        <div className="grid-cols-12 grid md:gap-4 gap-y-4 ">
          <div className="col-span-12 flex items-center justify-between">
            <h3 className="text-slate-700 text-lg lg:text-xl font-semibold line-clamp-1 ">
              Caixa água Polietileno 1.000L Azul Fortlev
            </h3>
            <button
              className="bg-white rounded-full p-1.5 shadow-lg active:scale-90 transition-all duration-100  active:shadow  outline outline-1 outline-slate-100"
              onClick={addChart}
            >
              {confirm ? (
                <BsCheckLg size={20} className="text-green-700" />
              ) : (
                <BsPlusLg size={20} className="text-blue-700" />
              )}
            </button>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="h-[27.5rem] w-full ">
              <Flowbite theme={{ theme: carouselTheme }}>
                <Carousel slide={false} indicators={confirm}>
                  <Image
                    width={400}
                    height={440}
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                  />
                  <Image
                    width={400}
                    height={440}
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                  />
                  <Image
                    width={400}
                    height={440}
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                  />
                  <Image
                    width={400}
                    height={440}
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                  />
                  <Image
                    width={400}
                    height={440}
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                  />
                </Carousel>
              </Flowbite>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 ">
            <article className="flex flex-col space-y-4">
              <p className="font-normal text-gray-700 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                itaque ipsum provident quasi similique laboriosam ab, accusamus
                minus modi pariatur, impedit eum, suscipit magnam harum debitis
                adipisci incidunt odio cupiditate?
              </p>
              <Link href="/clientstore">
                <div className="bg-yellow-200 py-1 px-2.5 text-xs rounded-full  space-x-1  flex items-center w-fit">
                  <span className="font-normal">Vendido por:</span>
                  <p className="font-medium text-ellipsis ">Nome da Loja</p>
                </div>
              </Link>
              <section className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2">
                <div>
                  <h4 className="lg:text-2xl text-xl font-medium text-slate-900">
                    R$ 000,00
                  </h4>
                  <p className="text-slate-600 text-sm">
                    em até <span className="font-bold">12x R$ 00,00</span> sem
                    juros
                  </p>
                </div>
                <button
                  onClick={() => setOpenModal(true)}
                  type="button"
                  className="text-blue-700 font-normal font-sans text-sm "
                >
                  Formas de pagamento
                </button>
              </section>
              <div className="flex items-center justify-center w-full md:justify-end">
                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-md py-2.5 px-5 text-white font-bold flex items-center md:w-auto justify-center  space-x-2 w-full my-2 md:my-0"
                >
                  <BsWhatsapp /> <span>WhatsApp</span>
                </button>
              </div>
            </article>
          </div>
          <div className="col-span-12">
            <div className="flex flex-col gap-4">
              <section className="flex items-center gap-2 md:gap-4 md:flex-row flex-col">
                <button
                  className={`p-4 rounded text-center w-full font-bold text-sm md:text-base transition-all  ${
                    tabs
                      ? "bg-slate-400 text-slate-800"
                      : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                  }`}
                  onClick={tab1}
                >
                  Descrição do produto
                </button>
                <button
                  className={`p-4 rounded text-center w-full font-bold text-sm md:text-base transition-all  ${
                    tabs
                      ? "bg-slate-200 hover:bg-slate-300 text-slate-700"
                      : "bg-slate-400 text-slate-800"
                  }`}
                  onClick={tab2}
                >
                  Características do produto
                </button>
              </section>
              <section className="flex flex-col w-full">
                <div>
                  {tabs ? (
                    <div className="flex flex-col transition-all">
                      <p className="text-base text-left font-sans text-slate-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita at illo ipsum impedit earum consequatur,
                        debitis amet eligendi repellendus asperiores quis
                        sapiente, provident in error dolor! Exercitationem fugit
                        asperiores nihil?
                      </p>
                    </div>
                  ) : (
                    <div className="text-left w-full">
                      <ul>
                        <li className="flex items-center space-x-1 bg-slate-100 py-1">
                          <span className="font-bold text-sm text-slate-900">Nome do Atributo</span>:
                          <span className=" text-sm font-normal text-slate-800">descrição do atributo </span>
                        </li>
                        <li className="flex items-center space-x-1 py-1">
                          <span className="font-bold text-sm text-slate-900">Nome do Atributo</span>:
                          <span className=" text-sm font-normal text-slate-800">descrição do atributo </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setOpenModal(false)}>I accept</button>
          <button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
