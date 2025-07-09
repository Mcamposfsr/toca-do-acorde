const ButtonOrange = ({texto,acao,className,type="button"}) => {
    return (
        
         <button onClick={acao} type={type} className={`text-azulClaro font-bold text-[20px] py-[10px] px-[8px] rounded-[15px] transition-all duration-300 ease-out hover:bg-laranja hover:text-branco focus:outline-none ${className}`}>{texto}</button>
    )
}
export default ButtonOrange