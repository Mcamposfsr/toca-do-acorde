const Link = ({dados:{textoBtn,acao}}) =>{


    return(
        <>
            <button onClick={acao} className="font-bold text-[20px] text-azulClaro  py-[10px] px-[6px] rounded-[10px] transition-all duration-300 ease-out hover:bg-laranja hover:text-branco">
                {textoBtn}
            </button>
        </>
    )
}

export default Link