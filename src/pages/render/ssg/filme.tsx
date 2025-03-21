import Filme, { FilmeType } from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";
import React from "react";

export function getStaticProps() {
  return {
    props: { filme: filmes[0], data: new Date().toLocaleTimeString('pt-BR') },
  };
}

export default function PaginaFilme(props: { filme: FilmeType, data: string }) {
  return (
    <Pagina>
      <h1 className="text-4xl">Página Filme</h1>
      <h2 className="text-2xl">
        Hora de geração: {props.data}
      </h2>
      <Filme filme={props.filme} />{" "}
    </Pagina>
  );
}

// Pra pegar uma propriedade sem carregar dados desnecessario no lado do client podemos criar uma função chamada getStaticProps e retornar um objeto com um objeto props contendo a informação que queremos.

// Nesse exemplo, se eu slimplismente importar o array de filmes e e tentar pegar o primeiro desta forma filmes[0] por exemplo, ainda vou esta carregando o array por inteiro no navegador do cliente. Mas usando esta função, a busca é feita no lado do servidor e a infirmação e extraida e apenas ela agora será carregada no lado do cliente.
