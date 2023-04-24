import React from "react";

function Comentarios() {
  return (
    <section className="comentarios">
      <button className="comment-btn">LEIA 100 COMENTÁRIOS</button>
      <span className="para-comentar">
        * Para comentar, faça seu <a href="/">login</a> ou{" "}
        <a href="/">assine</a>{" "}
      </span>
    </section>
  );
}

export default Comentarios;
