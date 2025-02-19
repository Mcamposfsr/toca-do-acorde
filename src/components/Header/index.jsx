import Logo from "../Logo" 
import { NavLink } from "react-router-dom"

const Header = ({infoLinks,controleModal}) =>{
    return(
        <header className="flex w-screen h-[12vh] justify-between items-center px-[35px] shadow-header fixed top-0 z-30 bg-[#ffffff]">
            <Logo/>
            <div className="flex justify-between items-center gap-[30px]">
                {infoLinks.map((info)=>
                <NavLink className={"text-azulClaro font-bold text-[20px] py-[10px] px-[8px] rounded-[30px] transition-all duration-300 ease-out hover:bg-laranja hover:text-branco"} key={info.txt} to={info.url}>{info.txt}</NavLink>
                )}
                <button onClick={()=>controleModal("login")} className="text-azulClaro font-bold text-[20px] py-[10px] px-[8px] rounded-[30px] transition-all duration-300 ease-out hover:bg-laranja hover:text-branco">{"Entrar"}</button>
                <button onClick={()=>controleModal("cadastro")} className="text-azulClaro font-bold text-[20px] py-[10px] px-[8px] rounded-[30px] transition-all duration-300 ease-out hover:bg-laranja hover:text-branco">{"Registrar-se"}</button>

            </div>


        </header>
    )
}

export default Header