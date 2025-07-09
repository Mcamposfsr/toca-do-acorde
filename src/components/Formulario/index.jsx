import Input from "../Input"
import Botao from "../ButtonBlue"
import { useState, useCallback, useRef } from "react"
import validacao from "../../scripts/validarForm"
import { atualizarErrosForm, iniciarEstadoForm } from "../../scripts/helpers"
import Requisicoes from "../../scripts/requisicoe"



const Formulario = ({ dadosForm, controleModal, estadoModal, setIsLogged }) => {

    // INSTANCIA DA CLASSE DE REQUISIÇÕES
    let api = useRef(new Requisicoes)


    // DEFINIR ESTADO DOS INPUTS    
    const [estadoForm, setEstadoForm] = useState(iniciarEstadoForm(Object.keys(dadosForm), dadosForm));

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

    // SUBMIT DE FORMULÁRIO
    const handleSubmit = useCallback(async (event) => {
        event.preventDefault()

        let validacoes = validacao(estadoModal, estadoForm)

        atualizarErrosForm(validacoes.erros, estadoModal, setEstadoForm)

        if (validacoes.valido) {
            // REALIZAR REQUISIÇÃO
            try {
                let response = await api.current[estadoModal](estadoForm[estadoModal])

                if (estadoModal === "cadastro") {
                    alert("Cadastro Realizado!")
                    controleModal("login")
                } else {
                    controleModal("")
                    localStorage.setItem("login", response[0].nome)
                    setIsLogged(true)
                }
                // RESETAR ESTADOS FORMULÁRIO  
                setEstadoForm(iniciarEstadoForm(Object.keys(dadosForm), dadosForm))



            } catch (e) {
                alert(e)

            }

        }

    }, [estadoForm, estadoModal, setEstadoForm, controleModal, dadosForm, setIsLogged])

    return (
        <form noValidate className="w-1/2  border-l-[2px] border-laranja flex flex-col gap-[2.5em] items-center justify-start box-border p-[4em]" onSubmit={handleSubmit}>
            {dadosForm[estadoModal].dadosInputs.map((dadoInput) => {
                return (
                    <Input
                        estadoInput={estadoForm[estadoModal][dadoInput.id]}
                        onChange={handleState} key={dadoInput.id}
                        dados={dadoInput}
                    />
                )
            })}

            {estadoModal === "login" && (
                <h2 className="text-[14px] text-texto font-light">
                    <span className="mr-[1px]">Ainda não possui uma conta? </span>
                    <button type="button" onClick={(event) => { controleModal("cadastro"); event.preventDefault() }}
                        className="text-[14px] text-texto font-light hover:text-laranja underline">Cadastre-se agora!</button>
                </h2>
            )}

            <Botao
                className={"mt-auto"}
                texto={dadosForm[estadoModal].textoBtnSubmit}
                type={"submit"} />

        </form>
    )
}

export default Formulario


