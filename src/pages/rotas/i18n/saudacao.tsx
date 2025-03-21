import Pagina from "@/components/Pagina";
import textos from "@/data/textos";

import { useRouter } from "next/router";
import React from "react";

export default function PaginaSaudacao() {
  const router = useRouter();
  return (
    <Pagina>
      <div>{textos[router.locale ?? "pt"].saudacao}</div>
    </Pagina>
  );
}

/* 
Pra usar a internacionalização usamos a comeclatura i18n que é reconhecida pelo Next, mas precisa de configurada no next.config.ts

i18n: {
    locales: ['pt',"en"],
    defaultLocale: 'pt'
  }
    
  Dessa forma eu digo que tenho duas opções de locales e que a padrao é a pt. 
  Isso fará com que o next reconheca uma primeira rota opcional que define o locate:
  http://localhost:3000/en/...

  Podemos usar essa informação pra adaptar o codigo, o useRouter.locate recupera pra nos oq foi definido, e no exemplo feito eu uso essa informação pra definir qual texto eu vou exibir.
    */
