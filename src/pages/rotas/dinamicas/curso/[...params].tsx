import Pagina from "@/components/Pagina";
import { useRouter } from "next/router";
import React from "react";

export default function PaginaCurso() {
  const router = useRouter();
  const [trilha, curso, aula] = (router.query.params ?? []) as string[]
  return (
    <Pagina>
      <div>
        <p>Trilha: {trilha}</p>
        <p>Curso: {curso}</p>
        <p>Aula: {aula ?? 1}</p>
      </div>
    </Pagina>
  );
}

// É possivel usar um array de parametros em um unico arquivo pra definir rotas dinamicas, com a nomeclatura [...nomedoarray].
