import { useNavigate } from "react-router-dom"


const Logo = () =>{
    
    const navigate = useNavigate()

    return(


        <h2 onClick={() => navigate("/")} className="cursor-pointer font-nautigal font-bold text-[80px] text-azulClaro">Chord<span className="text-laranja">Cave</span></h2>

    )
}
export default Logo