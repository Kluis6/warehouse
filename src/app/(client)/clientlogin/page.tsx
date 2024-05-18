import ClientLoginForm from "@/components/clients/client-login-form";
import Link from "next/link";

export default function ClientLogin() {
  return (
    <main className="h-screen w-screen relative">
      <nav className="bg-yellow-300 w-full py-2 md:py-4 absolute">
        <div className="container mx-auto px-4">
          <Link href={""}>Logo</Link>
        </div>
      </nav>
      <div className="flex items-center justify-center w-full h-full">
        <ClientLoginForm />
      </div>

      <nav className="bg-slate-200 w-full py-2 md:py-4 absolute bottom-0">
        <div className="container mx-auto px-4">
          <Link href={""}>Logo</Link>
        </div>
      </nav>
    </main>
  );
}
