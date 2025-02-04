import Logo from "../Logo"
import { GoX } from "react-icons/go";
import Formulario from "../Formulario";

const Modal = ({texto,btnTxt,inputs,className}) =>{
    return(     
        <div className={`absolute w-screen h-screen bg-black/50 top-0 z-50  flex justify-center items-center ${className}`}>
            <div className="flex bg-white w-[50%] min-h-[60%]  rounded-[20px] shadow-modal overflow-hidden relative">
                <GoX className="absolute text-center text-[2.5em] text-azulClaro right-[2%] top-[2%] cursor-pointer"/>
                {/* Esquerda */}
                <div className="flex items-center justify-center flex-col w-1/2 bg-azulCeu border-r-[2px] border-laranja">
                    <Logo className={"text-[8em]"}/>
                    <h2 className="font-roboto font-thin text-[2em] text-center text-texto">{texto}</h2>
                </div>
                {/* Direita */}
                <Formulario
                    className={"w-1/2  border-l-[2px] border-laranja flex flex-col gap-[2.5em] items-center justify-start box-border p-[4em]"}
                    inputs={inputs}
                    btnTxt={btnTxt}
                />
            </div>
        </div>
    )
}

export default Modal