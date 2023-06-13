import { useState } from "react";
import TopBar from "./components/TopBar";
import Options from "./components/Options";

function App() {
  return (
    <>
      <div className="w-screen flex flex-col bg-indigo-200 h-screen overflow-y-scroll">
        <TopBar />
        <div className="w-screen ">
          <img
            className="w-screen "
            src="https://static.wixstatic.com/media/9ae9b2_3684be6e49304766b97bf1ef3265f86d~mv2.png/v1/fill/w_1224,h_281,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/BANNERS%20PARA%20SITE%20.png"
          ></img>
        </div>
        <div className="w-full h-90  bg-indigo-400 flex  p-10 justify-center">
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
        </div>
        <div className="w-screen  flex bg-pink-600 justify-center  ">
          <div className="w-50  mt-20 mb-20 overflow-visible flex  justify-center flex-wrap mr-20 ">
        <h1 className="text-white font-normal   w-1/2 text-3xl ">
        Você tem peças em bom estado e sem uso por aí?
            </h1>
            </div>
            <div className="flex flex-col align-center w-1/3 pt-14 pr-9 align-start">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-normal mb-4 w-50 py-2 px-4 rounded-full">Saiba mais sobre como desapegar conosco!</button>
              <div>
              <h2 className="text-white font-normal">Avaliamos roupas e calçados de 0 a 16 anos, enxovais, acessórios, brinquedos, carrinhos, cadeirinhas, berços, banheiras e todos os itens do universo infantil.</h2>
            </div>
            </div>
        </div>

        <div className="w-screen bg-indigo-400 bottom-0 h-60 flex last:flex-col ">
          <Options />
        </div>
      </div>
    </>
  );
}

export default App;
