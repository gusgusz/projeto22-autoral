
export default function Home2() {
    return(
        <>   <div className="w-full h-90  bg-indigo-400 flex  p-10 justify-center">
        <div className="text-center flex flex-col w-1/2 ">
          <span className="text-white text-3xl self-center mb-8">
            Comodidades pensadas para você!
          </span>
          <img
            className=" w-42 ml-auto self-end pe-8"
            src="https://static.wixstatic.com/media/9ae9b2_6e065b63166445fc84df49d509f107f4~mv2.png/v1/fill/w_198,h_243,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/passinho%20com%20caf%C2%B4%C2%B4e.png"
          />
        </div>
        <ul className="text-white list-disc text-sm m-9">
          <li>Estacionamento</li>
          <li>Café do Brechó</li>
          <li>PassinhoLand (espaço kids)</li>
          <li>Playground</li>
          <li>Deck ao ar livre</li>
          <li>Pet Place</li>
          <li>Bicicletário</li>
          <li>Setor exclusivo para avaliações</li>
          <li>Plataforma de acessibilidade</li>
          <li>Segurança</li>
          <li>Wi-fi</li>
        </ul>
      </div></>
    );
}