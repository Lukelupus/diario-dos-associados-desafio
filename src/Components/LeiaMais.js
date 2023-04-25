import React from "react";
import { artigosMobile, artigosDesktop } from "./artigos";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

function LeiaMais() {
  return (
    <section className="leia-mais-section">
      <h3 className="leia-mais-titulo">LEIA MAIS</h3>

      <Mobile>
        {artigosMobile.map((e, index) => {
          return (
            <div key={index} className="artigo-card">
              <img className="card-img" src={e.imagem} alt={e.alt}></img>
              <span className="card-data">{e.data}</span>
              <span className="card-titulo">{e.titulo}</span>
            </div>
          );
        })}
      </Mobile>
      <Desktop>
        {artigosDesktop.map((e, index) => {
          return (
            <div key={index} className="artigo-card">
              <img className="card-img" src={e.imagem} alt={e.alt}></img>
              <span className="card-data">{e.data}</span>
              <span className="card-titulo">{e.titulo}</span>
            </div>
          );
        })}
        <hr className="leia-rectangle-bottom"></hr>
      </Desktop>
    </section>
  );
}

export default LeiaMais;
