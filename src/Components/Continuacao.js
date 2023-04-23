import React from "react";

function Continuacao(props) {
  const { subtitulo, texto, classe, subClasse } = props;

  return (
    <div className={classe}>
      <h3 className={subClasse}>{subtitulo}</h3>
      {texto.map((e, index) => {
        return (
          <span index={index} className="continucação-paragrafo">
            {e.paragrafo}
            <br></br>
            <hr className="break"></hr>
          </span>
        );
      })}
    </div>
  );
}

export default Continuacao;
