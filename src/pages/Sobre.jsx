import Menu from "./Menu";
import './stylesmenu.css'


function Sobre(){
    return(
        <div>
            <Menu/>

            <div>
                
                <div class="d-flex justify-content-center my-3">
                <img class="imagemtime"
                src="https://images.pexels.com/photos/7109063/pexels-photo-7109063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                </div>

                <div class="quemsomos">
                <h1 class="text-center title">Quem Somos:</h1>
        
            <p class="text-center">Um time pessoalmente afetado por depressão e com entes queridos perdidos para ataques cardíacos, continuamos em busca de algum jeito de acomodar esse sintoma.</p>
                    
                </div>
            
           
        
            </div>
        </div>
    )
}
export default Sobre;