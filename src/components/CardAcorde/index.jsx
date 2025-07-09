import { SlArrowDown } from "react-icons/sl"
import { useState } from "react"
const CardAcorde = ({acorde:{nome,sigla,data,img}}) =>{

    const [cardOpen,setCardOpen] = useState(false)

    const handleCardOpen = () =>{
        cardOpen?setCardOpen(false):setCardOpen(true)
    }


    
    return(

        <li className="flex flex-col  bg-white items-center rounded-[20px]  py-[.2em] ">
            <div className="flex justify-between w-full my-[.5em]  py-[.6em] relative ">
                <SlArrowDown className={`font-black text-[2em] text-azulClaro absolute top-[50%] right-9 translate-y-[-50%] ${cardOpen?"rotate-180":""} cursor-pointer`} onClick={handleCardOpen} />
                <p className="text-texto text-[20px] w-full pl-[1em]">{nome}</p>
                <p className="text-texto text-[20px] w-full pl-[1em] border-x-2 border-azulClaro">{sigla}</p>
                <p className="text-texto text-[20px] w-full pl-[1em]">{new Date(data).toLocaleDateString("pt-Br")}</p>
            </div>
            <div className={`${cardOpen?"h-[300px] border-t-2 border-azulClaro":"h-0"} w-full flex items-center justify-center overflow-hidden`}>
                <img src={img} className="w-[250px]" alt="Imagem acorde" />
            </div>
        </li>

    )
}

export default CardAcorde