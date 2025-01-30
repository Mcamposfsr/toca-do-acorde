import Botao from "../../Botao"

const Inicio = ({ imgBanner, txtBotao, acaoBotao }) => {
    return (    
        <section className="h-[87.5VH] w-screen mt-[12.5vh] bg-top bg-no-repeat bg-opacity-1 bg-cover relative"
        style={{ backgroundImage: `url(${imgBanner})` }}>
            <div className="absolute top-0 w-screen h-[87.5VH] bg-white bg-opacity-80 flex items-center justify-center flex-col gap-[50px]">
                <h2 className="text-laranja text-[120px] font-bold">ChordCave</h2>
                <p className="text-azulClaro text-[50px] font-thin">Sua biblioteca online de acordes.</p>
                <Botao
                    texto={txtBotao}
                    acao={acaoBotao} />
            </div>
        </section>
    )
}
 
export default Inicio