import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Publicidade from "./Components/Publicidade";
import Titulo from "./Components/Titulo";
import Colunista from "./Components/Colunista";
import Artigo from "./Components/Artigo";
import LeiaMais from "./Components/LeiaMais";
import Continuacao from "./Components/Continuacao";

import Advertise from "./Components/Advertise";
import Bottom from "./Components/Bottom";
import Comentarios from "./Components/Comentarios";
import Sidebar from "./Components/Sidebar";
import { repercussao } from "./Components/repercussao";
import { corridaPeloOscar } from "./Components/corridaPeloOscar";
import { anunciosTopPage } from "./Components/anunciosTopPage";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

function App() {
  const [open, setOpen] = useState(false);
  function openSearch() {
    setOpen(true);
  }

  function closeSearch() {
    if (open === true) {
      console.log("aqui");
      console.log(open);
      setOpen(false);
    }
  }
  return (
    <div onClick={closeSearch} className="App">
      <Navbar search={openSearch} open={open} />
      <Mobile>
        <Publicidade anuncios={anunciosTopPage} />
        <Titulo />
      </Mobile>
      <Desktop>
        <Titulo />
        <Publicidade anuncios={anunciosTopPage} />
      </Desktop>
      <Colunista
        author="diario-dos-associados-desafio/imagens/tamaki-ryushi-mobile.png"
        name="Tamaki Ryushi"
      />
      <Sidebar />
      <Artigo />
      <LeiaMais />
      <Continuacao
        classe="repercusao-box"
        subClasse="repercusao-titulo"
        subtitulo="Repercussão"
        texto={repercussao}
      />
      <Mobile>
        <Advertise
          position="advertise-bottom-page"
          size="advertise-image"
          src="diario-dos-associados-desafio/imagens/wemobi.png"
          alt="We Mobi Viagem"
        />
      </Mobile>
      <Desktop>
        <Advertise
          position="advertise-bottom-page"
          size="advertise-image"
          src="diario-dos-associados-desafio/imagens/reserva-moda.png"
          alt="Reserva Moda Camisa"
        />
      </Desktop>
      <Continuacao
        classe="corrida-box"
        subClasse="corrida-titulo"
        subtitulo="Corrida Pelo Oscar"
        texto={corridaPeloOscar}
      />

      <Bottom />
      <Comentarios />
    </div>
  );
}

export default App;
