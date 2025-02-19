import Logo from "../Logo"
import { GoX } from "react-icons/go";
import Formulario from "../Formulario";
import { useEffect,useRef } from "react";

 const ModalFormulario = ({estadoModal,controleModal,dados}) =>{
    const modal = useRef(null)
 
// FECHAMENTO DO MODAL AO CLICAR FORA
    useEffect(()=>{
        if(estadoModal){

            const handleClickOutside = (event) =>{
                if(event.target == modal.current){
                    controleModal("")

                }
            };
            window.addEventListener("click",handleClickOutside)

            return () =>{
                window.removeEventListener("click",handleClickOutside)
            }
        }
        
    },[controleModal,estadoModal])
// FECHAMENTO DO MODAL AO CLICAR ESC
    useEffect(()=>{

        if(estadoModal){

            const handleEscPress = (event) => {
                if(event.key == "Escape"){
                    controleModal("")
                }
            }
            window.addEventListener("keydown",handleEscPress)

            return () =>{
                window.removeEventListener("keydown",handleEscPress)
            }
        }

        
    
    },[controleModal,estadoModal])

    if(!estadoModal) return null

    return(     
        <div ref={modal} className={`absolute w-screen h-screen bg-black/50 top-0 z-50  flex justify-center items-center`}>
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

                />
            </div>
        </div>
    )
}

export default ModalFormulario