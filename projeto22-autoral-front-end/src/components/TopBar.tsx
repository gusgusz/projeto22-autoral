import Options from "./Options"
function TopBar() {

    return (
      <>
    <div className='w-screen bg-indigo-200 '>
     <div className='flex flex-col w-100 bg-indigo-200'> 
     <div className='self-center'>
     <img className='z-1' src='https://static.wixstatic.com/media/9ae9b2_9a959fa7ecb64a01aebb8b4fd193b997~mv2.png/v1/fill/w_857,h_318,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/TOPO%20DO%20SITE%2001.png'></img>
    <div className='flex w-800 mb-3 h-9 z-0 bg-indigo-400 rounded-xl  px-2 justify-around items-center text-white '>
   <Options/>
      </div>
     </div>
     
     </div>
     </div>
  
    
  
      </>
    )
  }
  
  export default TopBar
  