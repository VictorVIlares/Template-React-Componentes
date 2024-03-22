import Formas_de_Contato from "../Formas_de_Contato/Formas_de_Contato"
import Habilidades from "../Habilidades/Habilidades"
import Infos_pessoais from "../Infos_Pessoais/Infos_Pessoais"

function Conteudo_Principal(){
    return(
        <main>
        <Formas_de_Contato/>
        <Habilidades/>
        <Infos_pessoais/>
        </main>
        
    )
}

export default Conteudo_Principal