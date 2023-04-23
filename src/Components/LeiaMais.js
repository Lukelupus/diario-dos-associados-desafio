import React from "react";
import { artigos } from "./artigos";

function LeiaMais() {
  return (
    <section className="leia-mais-section">
      <h3 className="leia-mais-titulo">LEIA MAIS</h3>
      {artigos.map((e, index) => {
        return (
          <div index={index} className="artigo-card">
            <img className="card-img" src={e.imagem} alt={e.alt}></img>
            <span className="card-data">{e.data}</span>
            <span className="card-titulo">{e.titulo}</span>
          </div>
        );
      })}
    </section>
  );
}

export default LeiaMais;
