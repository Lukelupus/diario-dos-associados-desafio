import './App.css';
import Navbar from './Components/Navbar';
import Publicidade from './Components/Publicidade';
import Titulo from './Components/Titulo';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Publicidade src="imagens/Bitmap.png" alt="Estado de Minas Ad" href="https://www.hidglobal.com/omni-id" />
     <Titulo />
    </div>
  );
}

export default App;
