
import {CiLocationOn} from "react-icons/ci"
import {BsTelephone} from "react-icons/bs"
import Options from "./Options";
export default function ButBar(props: any) {
    return(
        <>
        <div className="w-screen bg-indigo-600 py-8 flex justify-center">
        <CiLocationOn className="w-8 h-8 text-white m-2"/>
        <div className="w-1/2 flex flex-col justify-center">
          <span className="text-white ">
            Av. Plinio Brasil Milano, 1775 - Bairro Higienópolis - Porto Alegre/RS
          </span>
          <span className="text-white  ">
            Estacionamento pela Rua Atanásio Belmonte, 218
          </span>
          </div>
          <div className="flex justify-center">
          <BsTelephone className="w-8 h-8 text-white m-2"/>
            <div className="flex flex-col justify-center">
              <span className="text-white ">3264.2234 (LOJA)</span>
              <span className="text-white ">3311.3552 (AVALIAÇÃO)</span>
            </div>
          </div>
          
          </div>

          <div className="w-screen h-auto bg-indigo-400 bottom-0-flex-flex-flex align-base py-8 px-12 flex ">
        <div className="flex flex-col align-left">
        <div className="w-1/2 flex flex-col ">
          <span className="text-white text-xl self-left mb-2 underline">
          HORÁRIO DE FUNCIONAMENTO
          </span>
          <span className="text-white text-sm self-left mb-2">
          Segunda a sexta das 9h30 às 18h / Sábado das 9h30 às 16h
          </span>
          </div>
          <div className="w-1/2 flex flex-col align-left">
          <span className="text-white text-xl self-left mb-2 underline">
            AVALIAÇÃ0
          </span>
        <h3 className="text-white text-sm self-center mb-8">
        De segunda a sexta das 9:30 as 17h, e sábado das 9:30 as 15h.
          Mas se preferir, pode agendar um horário aqui em nosso site para ter prioridade no atendimento.
        </h3>
        </div>
        </div>
       <div className="flex flex-col text-white">
        <Options setPage={props.setPage}/>
        </div>
      </div>
      </>
    );
}