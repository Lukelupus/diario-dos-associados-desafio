import React from "react";
import Advertise from "./Advertise";
import { maisLidas } from "./maislidas";

function Sidebar() {
  return (
    <div className="sidebar-box">
      <Advertise
        size="xp-top"
        alt="XP dinheiro investimento"
        src="imagens/xp-top.png"
      />
      <hr className="ml-rectangle"></hr>
      <div className="mais-lidas">
        <span className="ml-heading">MAIS LIDAS</span>
        {maisLidas.map((e, index) => {
          return (
            <div className="noticia-box">
              <p className="mais-lidas-data">{e.data}</p>
              {e.coroa ? (
                <img src="imagens/ico-premium.png" alt="premium"></img>
              ) : null}
              <span key={index} className="mais-lidas-titulo">
                {e.titulo}
              </span>{" "}
            </div>
          );
        })}
      </div>
      <span className="publicidade-side-title">Publicidade</span>
      <Advertise
        position="xp-bottom"
        size="xp-bottom"
        alt="XP dinheiro investimento"
        src="imagens/xp-bottom.png"
      />
    </div>
  );
}

export default Sidebar;
