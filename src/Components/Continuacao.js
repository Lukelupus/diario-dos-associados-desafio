import React, { useState } from "react";
import ContinueBemInformadoModal from "./ContinuaBemInformadoModal";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

function Continuacao(props) {
  const { subtitulo, texto, classe, subClasse } = props;
  let modal = true;
  return (
    <div className={classe}>
      <h3 className={subClasse}>{subtitulo}</h3>
      {texto.map((e, index) => {
        if (modal === true && subtitulo === "Corrida Pelo Oscar") {
          modal = false;
          return (
            <span key={index} className="continucação-paragrafo">
              {e.paragrafo}
              <br></br>
              <Desktop>
                <ContinueBemInformadoModal />
              </Desktop>

              <hr className="break"></hr>
            </span>
          );
        } else {
          return (
            <span key={index} className="continucação-paragrafo">
              {e.paragrafo}
              <br></br>

              <hr className="break"></hr>
            </span>
          );
        }
      })}
    </div>
  );
}

export default Continuacao;
