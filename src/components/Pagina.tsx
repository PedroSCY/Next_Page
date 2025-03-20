import { ReactNode } from "react";

interface PaginaProps {
  children: ReactNode;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-zinc-900 to-black text-5xl font-black">
      {props.children}
    </div>
  );
}
