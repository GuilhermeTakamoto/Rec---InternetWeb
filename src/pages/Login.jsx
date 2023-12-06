import Menu from "./Menu";
import './stylesmenu.css'


function Contato(){
    return(
        <div>
            <Menu/>

            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Usuário"></input>
                <br></br>
                <input type="password" placeholder="Senha"></input>
                <br></br>
                <button>Confirmar</button>
            </form>
        </div>
    )
}
export default Contato;