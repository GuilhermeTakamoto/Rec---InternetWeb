import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Projetos from "./pages/Projetos.jsx";
import Contato from "./pages/Contato.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';




import {BrowserRouter, Routes, Route} from "react-router-dom"


function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;