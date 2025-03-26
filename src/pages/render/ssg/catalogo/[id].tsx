import BotaoLink from "@/components/BotaoLink";
import Filme, { FilmeType } from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";
import React from "react";

export function getStaticPaths() {
  const paths = filmes.slice(0, 5).map((filme) => {
    return { params: { id: filme.id } };
  });
  return { paths, fallback: true };
}

export function getStaticProps({ params }: any) {
  const i = filmes.findIndex((filme) => filme.id === params.id);
  return {
    props: {
      filme: filmes[i],
      numero: i + 1,
      total: filmes.length,
      idAnterior: filmes[i - 1]?.id ?? null,
      proximo: filmes[i + 1]?.id ?? null,
    },
  };
}

export default function PaginaCatalogo(props: { filme: FilmeType }) {
  const { filme, numero, total, idAnterior, proximo } = props;
  if (!filme) return null;
  return (
    <Pagina>
      <Filme filme={filme} />
      <div className="flex gap-5 items-center justify-center p-5">
        {idAnterior && (
          <BotaoLink href={`/render/ssg/catalogo/${idAnterior}`}>
            Anterior
          </BotaoLink>
        )}

        <div className="flex gap-2 text-xl items-center">
          <span>{numero}</span>
          <span className="text-base text-zinc-500">de</span>
          <span>{total}</span>
        </div>
        {proximo && (
          <BotaoLink href={`/render/ssg/catalogo/${proximo}`}>
            Proximo
          </BotaoLink>
        )}
      </div>
    </Pagina>
  );
}
