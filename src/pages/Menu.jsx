import './stylesmenu.css'


function Menu(){
    return(
        <div class="text-center py-3 menubar text-dark">
            <a href="/"> 
            <img  class="logo" style={{ width:'2%'}}
            src="https://www.svgrepo.com/show/526560/home.svg">
            </img>
            </a>
            
            <a class="menutext" href="/sobre">Sobre Nós</a>&nbsp;&nbsp;&nbsp;
            <a class="mx-5 menutext" href="/projetos">Projetos</a>&nbsp;&nbsp;&nbsp;
            <a class="menutext" href="/contato">Contato</a>&nbsp;&nbsp;&nbsp;

            
        </div>
    )
}
export default Menu;