/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagina from "@/components/Pagina";
import React from "react";

export async function getStaticProps() {
    const resposta = await fetch("http://localhost:3000/api/produtos")
    const produtos = await resposta.json()
    const data = new Date().toLocaleTimeString('pt-BR')
    return {
        props: {produtos, data},
        revalidate: 10
    }
}

export default function PaginaISR({produtos, data} : any) {
  return (
    <Pagina>
      <h1>Renderização Incremental (ISR)</h1>
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


// Pra usar o modo incremental (ISR), onde o conteudo seja gerada de forma fixa no lado do servidor, mas será atualizada no intervado de tempo definido. 

//Só é possivel verificar no modo de produção, no modo de desenvolvimento ele sempre tualizará. 

// gerar paginas staticas incrementais alivia o acesso por exemplo do banco de dados, para informações que não precisam de uma atualização em tempo real isso pode reduzir significativamente o consumo de recursos.