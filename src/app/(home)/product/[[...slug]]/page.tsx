"use client";
import BannerAdsVideo from "@/components/home/bannerAdsVideo";
import RelatedProducts from "@/components/products/relatedProducts";
import { CustomFlowbiteTheme, Flowbite, Modal, Tabs } from "flowbite-react";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const customTheme: CustomFlowbiteTheme = {
  tabs: {
    base: "flex flex-col gap-2",
    tablist: {
      tabitem: {
        base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-slate-500 focus:ring-0 focus:outline-none",
        styles: {
          fullWidth: {
            base: "ml-0 first:ml-0 w-full rounded-none flex",
            active: {
              on: "p-4 text-slate-900 bg-slate-100 active dark:bg-slate-700 dark:text-white rounded-none",
              off: "bg-white hover:text-slate-700 hover:bg-slate-50 dark:hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700 rounded-none",
            },
          },
        },
      },
    },
  },
};

export default function Product({ params }: { params: any }) {
  const [openModal, setOpenModal] = useState(false);
  console.log(params);
  return (
    <>
      <main className="container mx-auto px-4 lg:px-0 my-8">
        <div className="bg-white w-full p-4 shadow rounded border border-slate-300">
          <div className="grid-cols-12 grid md:gap-4 gap-y-4 ">
            <div className="col-span-12">
              <h3 className="text-slate-700 text-lg lg:text-xl font-semibold">
                Caixa água Polietileno 1.000L Azul Fortlev {params.slug}
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="h-full w-full bg-teal-500 p-4"></div>
            </div>
            <div className="col-span-12 md:col-span-6 ">
              <div className="flex flex-col space-y-4">
                <p className="font-normal text-gray-700 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  itaque ipsum provident quasi similique laboriosam ab,
                  accusamus minus modi pariatur, impedit eum, suscipit magnam
                  harum debitis adipisci incidunt odio cupiditate?
                </p>
                <section className=" flex items-center justify-between">
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
                    className="text-blue-700 font-normal font-sans lg:text-sm text-xs"
                  >
                    Formas de pagamento
                  </button>
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
            <div className="col-span-12">
              <Flowbite theme={{ theme: customTheme }}>
                <Tabs
                  aria-label="Mais informações"
                  style="fullWidth"
                  className="focus:ring-0"
                >
                  <Tabs.Item active title="Descrição do produto">
                    This is{" "}
                    <span className="font-medium text-gray-800 dark:text-white">
                      Profile associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </Tabs.Item>
                  <Tabs.Item title="Características do produto">
                    <div className="w-full flex flex-col">
                      <div className="flex items-center space-x-2 bg-slate-200  p-2 ">
                        <span className="font-bold">nome: </span> <span>descrição</span>
                      </div>
                      <div className="flex items-center space-x-2  p-2 ">
                        <span>nome: </span> <span>descrição</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-slate-200  p-2 ">
                        <span>nome: </span> <span>descrição</span>
                      </div>
                    </div>
                  </Tabs.Item>
                </Tabs>
              </Flowbite>
            </div>
          </div>
        </div>
        <RelatedProducts />
        <BannerAdsVideo />
      </main>
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

// metadata para ceo
// export async function generateMetadata({ params }) {
//   return {
//     title: `${params.slug}`,
//     description: ` ${params.slug}`,
//   };
// }
