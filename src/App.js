import "./App.css";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Publicidade anuncios={anunciosTopPage} />
      <Titulo />
      <Colunista
        author="imagens/tamaki-ryushi-mobile.png"
        name="Tamaki Ryushi"
      />
      <Sidebar />
      <Artigo img="imagens/elenco-bacurau-mobile.png" />
      <LeiaMais />
      <Continuacao
        classe="repercusao-box"
        subClasse="repercusao-titulo"
        subtitulo="Repercussão"
        texto={repercussao}
      />
      <Advertise
        position="advertise-bottom-page"
        size="advertise-image"
        src="imagens/wemobi.png"
        alt="We Mobi Viagem"
      />
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
