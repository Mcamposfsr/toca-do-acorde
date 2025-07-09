import Logo from "../Logo" 
import { NavLink } from "react-router-dom"
import ButtonBlue from "../ButtonOrange"

const Header = ({infoLinks,controleModal,setIsLogged,isLogged}) =>{

    
    return(
        <header className="flex w-screen h-[12vh] justify-between items-center px-[35px] shadow-header fixed top-0 z-30 bg-[#ffffff]">
            <Logo/>
            <div className="flex justify-between items-center gap-[30px]">
                {infoLinks.map((info)=>
                <NavLink className={({isActive}) => 
                    isActive?"font-bold text-[20px] py-[10px] px-[8px] rounded-[15px]  ease-out bg-laranja text-branco"
                    :"text-azulClaro font-bold text-[20px] py-[10px] px-[8px] rounded-[15px] transition-all duration-300 ease-out hover:bg-laranja hover:text-branco"}
                 key={info.txt} to={info.url}>{info.txt}</NavLink>
                )}
                {isLogged ?(
                    <>  
                        <p className="text-azulClaro font-bold text-[20px] py-[10px] px-[8px]">{localStorage.getItem("login")}</p>
                        <ButtonBlue
                            texto={"Sair"}
                            acao={()=>{setIsLogged(false);localStorage.clear()}}
                        />
                    </>
                    
                )
                :
                (
                    <>
                        <ButtonBlue
                        texto={"Entrar"}
                        acao={()=>controleModal("login")}
                        />
                        <ButtonBlue
                        texto={"Registrar-se"}
                        acao={()=>controleModal("cadastro")}         
                        />
                    </>
                )
                }
            </div>


        </header>
    )
}

export default Header