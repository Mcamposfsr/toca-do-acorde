import Button from "../../ButtonBlue"
import { useEffect, useState } from "react";
import Requisicoes from "../../../scripts/requisicoe";
import CardAcorde from "../../cardAcorde"; 

//INSTANCIAR CLASSE DE REQUISIÇÕES  
const api = new Requisicoes



const Acordes = ({ controleModal,isLogged }) => {

    // ESTADOS ACORDES.
    const [acordes,setAcordes] = useState([])

    // FUNÇÃO PARA RENDERIZAR ACORDES
    const renderizarAcordes = async (filtro = null) => {
        let response
        try{
            response = await api.buscarAcordes(filtro)
            setAcordes(response)
        }catch(e){
            console.log(`Problemas com o servidor interno da aplicação, tente mais tarde. ERRO: ${e}`)
        }
    
        return response
    }

    // CARREGAR ACORDES AO ABRIR A PÁGINA
    useEffect(()=>{
        if(isLogged){renderizarAcordes()}
        

    },[isLogged])

    // DEFINIR ESTADO DE FILTRAGEM
    const [filtro,setFiltro] = useState("")

    // ATUALIZAR ESTADO COM BASE NO FILTRO
    useEffect(()=>{
        renderizarAcordes(filtro)

    },[filtro])

    // ALTERAR FILTRO
    const handleFiltro = (event) => {
        let valor = event.target.value
        // console.log(valor)
        setFiltro(valor)
    }

    // ESTADOS DE BUSCA
    const [busca,setBusca] = useState("")

    // REALIZAR BUSCA
    useEffect(()=>{
        renderizarAcordes(busca)
    },[busca])

    // ALTERAR BUSCA
    const handlePesquisa = (event) =>{
        let valor = event.target.value
        if(filtro){
            setFiltro("")
        }
        setBusca(valor)
    }
 
    return (
        <section className={`bg-azulCeu ${!isLogged ? "h-[87.5VH]" : "min-h-screen"}`}>
            {
                !isLogged
                    // EXIBIÇÃO LOGIN OFF
                    ?
                    <div className="h-full w-full grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] items-center justify-items-center p-[10em] px-[15em] gap-y-[2em]">
                        <h2 className="text-[8em] text-laranja col-start-1 row-start-1 italic">Quase lá</h2>
                        <p className="font-light text-[2em] text-azulClaro text-center col-start-1 self-start ">Faça login e tenha acesso gratuitamente a nossa biblioteca de acordes.</p>
                        <Button
                            texto={"Fazer Login"}
                            acao={() => controleModal("login")}
                            className={"py-[26px] px-[30px] rounded-[34px] text-[2em] row-start-1 row-span-2"}
                        />

                    </div>
                    // EXIBIÇÃO LOGIN ON

                    :
                    <div className="flex justify-center items-center flex-col gap-[3em] px-[2em] pt-[5em] w-full">
                        <h2 className="text-[8em] font-nautigal text-laranja">Biblioteca de Acordes</h2>
                        {/* MENU DE FILTRAGEM */}
                        <div className="self-start flex gap-[2em]">
                            <input onChange={handlePesquisa} value={busca} type="text" className="w-[500px] px-[20px] py-[12px] rounded-[25px] border-azulClaro border-2 focus:outline-none bg-[url('/Lupa.svg')] bg-no-repeat bg-[calc(100%-20px)_center] bg-[length:30px] placeholder:text-texto" placeholder="Pesquisar acorde" />
                            <select onChange={handleFiltro} value={filtro} className="w-[300px] px-[20px] py-[12px] rounded-[25px] border-azulClaro border-2 focus:outline-none text-texto appearance-none bg-[url('/arrow-drop-down.svg')] bg-[calc(100%-20px)_center] bg-no-repeat bg-[length:30px]" name="" id="">
                                <option className="wb  -[250px]" value={""}>Sem Filtro</option>
                                <option className="w-[250px]" value={"alfabeto"}>Ordem Alfabética</option>
                                <option className="w-[250px]" value={"data"}>Data de postagem</option>
                            </select>
                        </div>
                        {/* PAINEL ACORDES */}
                        <div className="grid grid-rows-[80px_3fr] grid-cols-[repeat(3,1fr)] w-full h-full gap-y-[em] bg-azulClaro rounded-[20px] px-[1em] py-[2em] mb-[2em]">
                            <h3 className="text-[2em] font-light text-branco">Acordes:</h3>
                            <h3 className="text-[2em] font-light text-branco">Sigla:</h3>
                            <h3 className="text-[2em] font-light text-branco">Data de postagem:</h3>
                            {/* LISTA ACORDES*/}
                            <ul className="col-start-1 col-span-3 flex flex-col gap-[1em]">
                                {acordes.map((acorde)=> 
                                <CardAcorde
                                acorde={acorde} key={acorde.sigla}
                                />) }
                                
                            </ul>
                        </div>
                    </div>
            }
        </section>
    )
}

export default Acordes