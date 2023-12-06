import Menu from "./Menu";
import Galeria from "../components/Galeria";
import './stylesmenu.css'



function Produtos(){
    return(
        <div>
            <Menu/>
            <h1 class="text-center my-2 title">Nossos Projetos</h1>
            <Galeria/>
        </div>
    )
}
export default Produtos;