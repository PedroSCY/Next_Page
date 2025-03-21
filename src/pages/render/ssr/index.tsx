/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagina from "@/components/Pagina";
import React from "react";

export async function getServerSideProps() {
    const resposta = await fetch("http://localhost:3000/api/produtos")
    const produtos = await resposta.json()
    const data = new Date().toLocaleTimeString('pt-BR')
    return {
        props: {produtos, data},
    }
}

export default function PaginaSSR({produtos, data} : any) {
  return (
    <Pagina>
      <h1>Renderização no Servidor (SSR)</h1>
      <h2>Gerado em {data}</h2>
      <ul>
        {produtos.map((produto: any) => {
            return (
                <li key={produto.id} className="text-lg">
                    {produto.id} - {produto.nome} - {produto.preco}
                </li>
            )
        })}
      </ul>
    </Pagina>
  );
}


// Pra usar o modo de renderização no servidor (SSR), onde o conteudo é gerada a cada requisição no servidor, é nécessario criar a função reservada getServerSideProps semelhante a getStaticProps, mas diferente do incremental, não há revalidate. 