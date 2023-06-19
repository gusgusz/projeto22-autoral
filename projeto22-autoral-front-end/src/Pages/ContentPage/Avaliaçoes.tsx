import ImgHome from "../../components/ImgHome";

function Avaliaçoes(){
    return(
        <div className="W-screen bg-white">
            <ImgHome img="https://static.wixstatic.com/media/9ae9b2_5394155e3c174997a4aa77ebfe3596ca~mv2.png/v1/fill/w_1294,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9ae9b2_5394155e3c174997a4aa77ebfe3596ca~mv2.png"></ImgHome>
            <div className="flex w-9/10 bg-indigo-300">
                <div className="w-2/5 h-9/10 flex flex-col justify-center mb-6">
        <h1 className="text-white self-center m-4 font-semibold text-xl ">Deixou itens para avaliar e precisa conferir o resultado:</h1>
                </div>
                <div>
                    <img src="https://static.wixstatic.com/media/9ae9b2_aebf6362aade4566a276aaed2566a60c~mv2.png/v1/fill/w_186,h_255,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PASSINHOS%20FINAL%20015.png"></img>
                </div>
                <div className="flex flex-col w-2/5 place-items-center justify-center">
                    <button className="bg-pink-500 text-white hover:bg-pink-600 rounded-2xl w-64 p-2 m-2 ">Confira AGORA!</button>
                    <button className="bg-pink-500 text-white hover:bg-pink-600 rounded-2xl w-64 p-2 m-2 ">Ligue</button>
                    <button className="bg-pink-500 text-white hover:bg-pink-600 rounded-2xl w-64 p-2 m-2 ">Mensagem</button>
                </div>
            </div>
        </div>
    );
}

export default Avaliaçoes;