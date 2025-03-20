import Pagina from "@/components/Pagina";
import { useRouter } from "next/router";
import React from "react";

export default function PaginaProdutoPorId() {
    const router = useRouter()
  return (
    <Pagina>
      <div>
        <p>Produto: {router.query.id}</p>
      </div>
    </Pagina>
  );
}

// Para pegar parametros passados pela url usamos o hook useRouter() e recuperamos com query.nomedoparametro. 