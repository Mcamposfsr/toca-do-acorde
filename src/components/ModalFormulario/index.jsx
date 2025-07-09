import Logo from "../Logo"
import { GoX } from "react-icons/go";
import Formulario from "../Formulario";
import { useEffect,useRef } from "react";



 const ModalFormulario = ({estadoModal,controleModal,dados,setIsLogged,isLogged}) =>{

    const modal = useRef(null)

 
// CONTROLE DE FECHAMENTO DO MODAL 
    useEffect(()=>{
        if(estadoModal){

            const handleClickOutside = (event) =>{
                if(event.target == modal.current){
                    controleModal("")

                }
            };

            const handleEscPress = (event) => {
                if(event.key == "Escape"){
                    controleModal("")
                }
            }

            window.addEventListener("keydown",handleEscPress)
            window.addEventListener("click",handleClickOutside)

            return () =>{
                window.removeEventListener("click",handleClickOutside)
                window.removeEventListener("keydown",handleEscPress)

            }
        }
        
    },[controleModal,estadoModal])

    // REMOVER ROLAGEM AO ABRIR O MODAL
    useEffect(()=>{

        if(estadoModal){
            document.body.classList.add("overflow-hidden")
        }else{
        document.body.classList.remove("overflow-hidden")
        }



        return ()=>{
            document.body.classList.remove("overflow-hidden")
        }
    },[estadoModal])

    if(!estadoModal) return null

    return(     
        <div ref={modal} className={`fixed w-screen h-screen bg-black/50 top-0 z-50  flex justify-center items-center`}>
            <div  className="flex bg-white w-[50%] min-h-[55%]  rounded-[20px] shadow-modal overflow-hidden relative">
                <GoX className="absolute text-center text-[2.5em] text-azulClaro right-[2%] top-[2%] cursor-pointer" onClick={() =>controleModal("")}/>
                {/* Esquerda */}
                <div className="flex items-center justify-center flex-col w-1/2 bg-azulCeu border-r-[2px] border-laranja px-[1em]">
                    <Logo className={"text-[8em]"}/>
                    <h2 className="font-roboto font-thin text-[2em] text-center text-texto">{dados[estadoModal].textoModal }</h2>
                </div>
                {/* Direita */}
                <Formulario
                    dadosForm={dados}
                    controleModal={controleModal}
                    estadoModal={estadoModal}
                    setIsLogged={setIsLogged} 
                    isLogged={isLogged}
                />
            </div>
        </div>
    )
}

export default ModalFormulario