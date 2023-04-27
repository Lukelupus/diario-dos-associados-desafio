import React from "react";
import { artigosMobile, artigosDesktop } from "./artigos";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 782 });
  return isMobile ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

function LeiaMais() {
  return (
    <section className="leia-mais-section">
      <Mobile>
        <h3 className="leia-mais-titulo">LEIA MAIS</h3>

        {artigosMobile.map((e, index) => {
          return (
            <div key={index} className="artigo-card">
              <img className="card-img" src={e.imagem} alt={e.alt}></img>
              <div className="card-info">
                <span className="card-data">{e.data}</span>
                <br></br>
                <span className="card-titulo">{e.titulo}</span>
              </div>
            </div>
          );
        })}
      </Mobile>
      <Desktop>
        <h3 className="leia-mais-titulo">LEIA MAIS</h3>

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
