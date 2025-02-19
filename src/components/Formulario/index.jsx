import Input from "../Input"
import Botao from "../Botao"
import { useState } from "react"


const Formulario = ({dadosForm,controleModal,estadoModal}) =>{
    
    // DEFINIR ESTADO DOS INPUTS

    const tiposFormularios = Object.keys(dadosForm)
    const [estadoForm, setEstadoForm] = useState(
        tiposFormularios.reduce((acc, tipo) => {
            acc[tipo] = dadosForm[tipo].dadosInputs.reduce((acc,dado)=>{
                acc[dado.id] = {txt:"",erro:""}
                return acc
            },{});
            return acc;
        }, {})
    );

    // ATUALIZAÇÃO DE ESTADO INPUTS
    const handleState = (event) => {
        let { id, value } = event.target; 
    
        setEstadoForm((prevData) => ({
            ...prevData, 
            [estadoModal]: { 
                ...prevData[estadoModal], 
                [id]: { 
                    ...prevData[estadoModal][id], 
                    txt: value 
                }
            }
        }));
    };
    
    return (
        <form noValidate className="w-1/2  border-l-[2px] border-laranja flex flex-col gap-[2.5em] items-center justify-start box-border p-[4em]" onSubmit={()=>alert("oi")}>
            {dadosForm[estadoModal].dadosInputs.map((dadoInput)=>{
                        return( 
                            <Input 
                                estadoInput={estadoForm[estadoModal][dadoInput.id]} 
                                onChange={handleState} key={dadoInput.id} 
                                dados={dadoInput}  
                            />
                        )
                    })}

            {(estadoModal === "login") ? 
                <h2 className="text-[14px] text-texto font-light"> 
                    <span className="mr-[1px]">Ainda não possui uma conta? </span>
                    <button onClick={(event) =>{controleModal("cadastro"); event.preventDefault()} } 
                    className="text-[14px] text-texto font-light hover:text-laranja underline">Cadastre-se agora!</button>
                </h2> 
            : null}
            <Botao
                className={"mt-auto"}
                texto={dadosForm[estadoModal].textoBtnSubmit}
                type={"submit"}/>

        </form>
    )
}

export default Formulario


