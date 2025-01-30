import Logo from "../Logo" 
import { NavLink } from "react-router-dom"

const Header = ({infoLinks}) =>{
    return(
        <header className="flex w-screen h-[12vh] justify-between items-center px-[35px] shadow-header fixed top-0 z-50 bg-[#ffffff]">
            <Logo/>
            <div className="flex justify-between items-center gap-[30px]">
                {infoLinks.map((info)=>
                <NavLink className={({isActive}) => isActive ?"font-bold text-[20px]  py-[10px] px-[6px] rounded-[10px] transition-all duration-300 ease-out bg-laranja text-branco ":"font-bold text-[20px] text-azulClaro  py-[10px] px-[6px] rounded-[10px] transition-all duration-300 ease-out hover:bg-laranja hover:text-branco"} key={info.txt} to={info.url}>{info.txt}</NavLink>
                )}
            </div>


        </header>
    )
}

export default Header