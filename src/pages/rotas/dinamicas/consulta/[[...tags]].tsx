import Pagina from "@/components/Pagina";
import { useRouter } from "next/router";
import React from "react";

export default function PaginaConsulta() {
  const router = useRouter();
  const tags = (router.query.tags ?? []) as string[];

  function renderizarTag(tag: string) {
    return (
      <div className="bg-indigo-500 text-white rounded-lg px-4 py-2">{tag}</div>
    );
  }

  return (
    <Pagina>
      <h1 className="text-6xl font-black mb-7">Consultas</h1>
      <div className="flex gap-5">{tags.map(renderizarTag)}</div>
    </Pagina>
  );
}


// Pra tornar um paramentro opcional é necessario utilizar [] duplos na nomeação, ficando dessa forma [[]]. 