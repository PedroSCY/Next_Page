import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Menu() {

  const router = useRouter();

  function renderizaritem(url: string, texto: string, locale: string) {
    const ativo = router.asPath === url
    return (
      <li className={`${ativo ? 'bg-purple-800' : "bg-purple-500" } px-4 py-3 rounded-lg text-base content-center`}>
        <Link href={url} locale={locale}>
          {texto}
        </Link>
      </li>
    );
  }
  return (
    <ul className="flex gap-3 justify-center flex-wrap">
      {renderizaritem("/rotas/basicas", "Rota Básica", "pt")}
      {renderizaritem("/rotas/basicas/aninhada", "Rota Aninhada", "pt")}
      {renderizaritem("/rotas/dinamicas/produto/3", "Produto #3", "pt")}
      {renderizaritem("/rotas/dinamicas/2025/03/21/agenda", "Agenda", "pt")}
      {renderizaritem("/rotas/dinamicas/curso/FrontEnd/React/1", "Curso Frontend", "pt")}
      {renderizaritem("/rotas/dinamicas/consulta/js/css/html", "Consulta", "pt")}
      {renderizaritem("/rotas/i18n/saudacao", "Saudação PT", "pt")}
      {renderizaritem("/rotas/i18n/saudacao", "Saudação EN", "en")}
      {renderizaritem("/render/ssg/simples", "SSG Simples", "pt")}
      {renderizaritem("/render/ssg/filme", "Filme SSG", "pt")}
      {renderizaritem("/render/ssg/personagem", "Personagem SW", "pt")}
      {renderizaritem("/render/ssg/produtos", "Produtos SSG", "pt")}
      {renderizaritem("/render/isr", "Produtos ISR", "pt")}
      {renderizaritem("/render/ssr", "Produtos SSR", "pt")}
      {renderizaritem("/render/ssg/catalogo/0581357a-a0ae-45bc-a40e-c49c54b49621", "Catálogo", "pt")}
    </ul>
  );
}
