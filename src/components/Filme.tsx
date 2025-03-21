import Image from "next/image";
import React from "react";

export type FilmeType = {
  id: string;
  titulo: string;
  subtitulo: string;
  imagem: string;
  descricao: string;
};

export interface FilmeProps {
  filme: FilmeType;
}

export default function Filme(props: FilmeProps) {
  return (
    <div className="flex gap-5 w-3-5 bg-black border border-zinc-800 p-5 rounded-lg">
      <Image
        src={props.filme.imagem}
        alt="imagem do filme"
        width={150}
        height={150}
        className="self-start rounded-full"
      />
      <div className="flex flex-col">
        <div className="text-2xl">{props.filme.titulo}</div>
        <div className="text-lg text-zinc-500">{props.filme.subtitulo}</div>
        <div className="text-sm font-light text-zinc-300">{props.filme.descricao}</div>
      </div>
    </div>
  );
}
