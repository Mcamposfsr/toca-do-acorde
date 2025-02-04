const botao = ({texto,acao,className}) => {
    return (
        <button onClick={acao} className={`bg-azulClaro py-[16px] px-[10px] text-[20px] text-branco font-bold rounded-[16px] hover:scale-125 duration-150 transition-all ease-out ${className} `}>
            {texto}
        </button>
    )
}
export default botao