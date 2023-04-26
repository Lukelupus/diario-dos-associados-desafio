import React from "react";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 782 });
  return isMobile ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 782 });
  return isDesktop ? children : null;
};

function Artigo() {
  return (
    <section className="artigo-section">
      <div className="img-box">
        <Mobile>
          <img
            className="artigo-img"
            src="imagens/elenco-bacurau-mobile.png"
            alt="Bacurau"
          ></img>
        </Mobile>
        <Desktop>
          <img
            className="artigo-img"
            src="imagens/elenco-bacurau-desktop.png"
            alt="Bacurau"
          ></img>
        </Desktop>
        <div className="legenda-completa">
          <img className="camera" src="imagens/camera.png" alt="camera"></img>
          <p className="legenda-img">
            Após dois anos, longa voltou a ser elegível para concorrer ao Oscar
            2021 e causou grande repercussão
          </p>
          <p className="fonte-src">(foto: Divulgação)</p>
        </div>
        <div className="text-to-speech">
          {/* <audio
            controls
            className="audio"
            src="audio-referente-ao-artigo.mp3"
            type="audio/mp3 "
          ></audio> */}
          <Mobile>
            <img
              className="audio-exemple-standing"
              src="imagens/audio-exemple.png"
              alt="exemplo de audio"
            ></img>
          </Mobile>
          <Desktop>
            <img
              className="audio-exemple-standing"
              src="imagens/audio-desktop.png"
              alt="exemplo de audio"
            ></img>
          </Desktop>
        </div>
      </div>
      <span className="corpo-artigo">
        A notícia de que o filme Bacurau (2019), dirigido por Kleber Mendonça
        Filho e Juliano Dornelles, voltou a ser elegível para concorrer ao Oscar
        2021 tem causado grande repercussão nas redes e na imprensa nacional e
        internacional. Na última sexta-feira (29/1), a distribuidora
        independente Vitrine Filmes anunciou que o filme está registrado no
        catálogo do Academy Screening Room. Essa é a plataforma de acesso
        exclusivo aos membros da Academia, responsáveis pela seletiva do prêmio.
        A lista final dos filmes selecionados será divulgada em 15 de fevereiro.
        O filme poderá concorrer às principais categorias, exceto Melhor Filme
        Estrangeiro.
      </span>
    </section>
  );
}

export default Artigo;
