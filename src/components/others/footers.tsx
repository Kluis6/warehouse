import Link from "next/link";

export default function Footers() {
  // const pathname = usePathname();
  // const isActive = pathname.startsWith(pathname);
  // const router = useRouter();

  return (
    <section className="w-full bg-slate-50 py-8">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-12 gap-4">
          <div className="md:col-span-6 lg:col-span-3 col-span-12 space-y-4">
            <h3 className="font-semibold text-sm text-slate-800">Sobre</h3>
            <ul className="space-y-1">
              <li className="text-sm font-normal text-slate-700 hover:underline hover:decoration-1 decoration-slate-700">
                <Link href={""}>Link para rota</Link>
              </li>
              <li className="text-sm font-normal text-slate-700 hover:underline hover:decoration-1 decoration-slate-700">
                <Link href={""}>Link para rota</Link>
              </li>
              <li className="text-sm font-normal text-slate-700 hover:underline hover:decoration-1 decoration-slate-700">
                <Link href={""}>Link para rota</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-3 col-span-12 space-y-4">
            <h3 className="font-semibold text-sm text-slate-800">Contatos</h3>
            <ul className="space-y-1">
              <li className="text-sm font-normal text-slate-700 hover:underline hover:decoration-1 decoration-slate-700">
                <Link href={""}>Link para rota</Link>
              </li>
              <li className="text-sm font-normal text-slate-700 hover:underline hover:decoration-1 decoration-slate-700">
                <Link href={""}>Link para rota</Link>
              </li>
              <li className="text-sm font-normal text-slate-700 hover:underline hover:decoration-1 decoration-slate-700">
                <Link href={""}>Link para rota</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-3 col-span-12 space-y-4">
            <h3 className="font-semibold text-sm text-slate-800">Rede sociais</h3>
            <ul className="space-y-1">
              <li className="text-sm font-normal text-slate-700 hover:underline hover:decoration-1 decoration-slate-700">
                <Link href={""}>Link para rota</Link>
              </li>
              <li className="text-sm font-normal text-slate-700 hover:underline hover:decoration-1 decoration-slate-700">
                <Link href={""}>Link para rota</Link>
              </li>
              <li className="text-sm font-normal text-slate-700 hover:underline hover:decoration-1 decoration-slate-700">
                <Link href={""}>Link para rota</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-3 col-span-12 space-y-4">
            <h3 className="font-semibold text-sm text-slate-800">Minha conta</h3>
            <ul className="space-y-1">
              <li className="text-sm font-normal text-slate-700 hover:underline hover:decoration-1 decoration-slate-700">
                <Link href={"/userlogin"}>Para você</Link>
              </li>
              <li className="text-sm font-normal text-slate-700 hover:underline hover:decoration-1 decoration-slate-700">
                <Link href={"/clientlogin"}>Para empresas</Link>
              </li>
      
            </ul>
          </div>
          <div className="col-span-12">
            <p className="text-sm mt-8">Todos os direitos reserados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
