import { Link } from "react-router-dom"
function Options(props: any) {

    return (
      <>
     
      <h3 onClick={()=>props.setPage("home")} className='hover:cursor-pointer hover:text-indigo-800'>Home</h3 > 
      
      <h3 onClick={()=>props.setPage("quem")} className='hover:cursor-pointer hover:text-indigo-800'>Quem somos</h3> 
     
      <h3 onClick={()=>props.setPage("produtos")} className='hover:cursor-pointer hover:text-indigo-800'>Produtos</h3> 

      <h3 onClick={()=>props.setPage("avaliações")} className='hover:cursor-pointer hover:text-indigo-800'>Avaliações</h3> 
   
      <h3 onClick={()=>props.setPage("download")} className='hover:cursor-pointer hover:text-indigo-800'>Material para Download</h3> 
     
      <h3 onClick={()=>props.setPage("contato")} className='hover:cursor-pointer hover:text-indigo-800'>Contato</h3> 
      
  
    
  
      </>
    )
  }
  
  export default Options
  