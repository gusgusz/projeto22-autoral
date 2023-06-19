import Home from './Home'
import Quem from './Quem'
import Produtos from './Produtos'
import Avaliaçoes from './Avaliaçoes'
import Download from './Download'
import Contato from './Contato'
function Content(props: any){
const page = props.page
if(page === "home"){
    return(
        <Home/>
    )
}
   else if(page === "quem"){
        return(
            <Quem/>
        )
    }
    else if(page === "produtos"){
        return(
            <Produtos/>
        )
    }
    else if(page === "avaliações"){
        return(
            <Avaliaçoes/>
        )
    }
    else if(page === "download"){
        return(
            <Download/>
        )
    }
    else if(page === "contato"){
        return(
            <Contato/>
        )
    }
    else{
        return(
            <Home/>
        )
    }

}
export default Content;