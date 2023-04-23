import "./App.css";
import Navbar from "./Components/Navbar";
import Publicidade from "./Components/Publicidade";
import Titulo from "./Components/Titulo";
import Colunista from "./Components/Colunista";
import Artigo from "./Components/Artigo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Publicidade
        src="imagens/Bitmap.png"
        alt="Estado de Minas Ad"
        href="https://www.hidglobal.com/omni-id"
      />
      <Titulo />
      <Colunista
        author="imagens/tamaki-ryushi-mobile.png"
        name="Tamaki Ryushi"
      />
      <Artigo img="imagens/elenco-bacurau-mobile.png" />
    </div>
  );
}

export default App;
