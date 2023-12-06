import Menu from "./Menu";
import './stylesmenu.css'


function Contato(){
    return(
        <div>
            <Menu></Menu>
            <form>
                <input type="text" placeholder= "nome do usuário"></input>
                <input type="password" placeholder= "senha"></input>
            </form>
        </div>
    )
}
export default Contato;