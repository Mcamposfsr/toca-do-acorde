

const Input = ({dados}) =>{
    
    const {type,text,id,onChange} = dados 

    return(
        <div className="flex flex-col gap-[.8em] relative w-full">
            <label htmlFor={id} className="text-texto font-light text-[18px] ml-[3%]">{text}</label>
            <input id={id} type={type} onChange={onChange} className="border-text border-[2px] rounded-[16px] py-[10px] px-[5px] mb-[3%] transition-all duration-100 focus:border-transparent focus:outline focus:outline-[5px]  focus:outline-laranja"/>
            <p className="absolute top-[100%] left-[3%] font-bold text-red-500">Mensagem de erro</p>
        </div>
    )
}
export default Input