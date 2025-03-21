import { ReactNode } from "react";
import Menu from "./Menu";

interface PaginaProps {
  children: ReactNode;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-zinc-900 to-black text-5xl font-black">
      <nav className="bg-black border-b border-zinc-700 p-3">
        <Menu />
      </nav>
      <main className="flex flex-1 flex-col items-center justify-center">
        {props.children}
      </main>
    </div>
  );
}
