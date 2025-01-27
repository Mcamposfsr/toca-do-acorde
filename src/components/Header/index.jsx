import BotaoMenu from "../Link"

const Header = ({btnInfos}) =>{

    return(
        <header className="flex w-screen h-[12vh] justify-between items-center px-[35px] shadow-header fixed top-0">
            <h1 className="cursor-pointer font-nautigal font-bold text-[80px] text-azulClaro">Chord<span className="text-laranja">Cave</span></h1>
            <div className="flex justify-between items-center gap-[30px]">
                <BotaoMenu
                dados={btnInfos[0]}
                />

                <BotaoMenu
                dados={btnInfos[1]}
                />
                
                <BotaoMenu
                dados={btnInfos[2]}
                />
            </div>


        </header>
    )
}

export default Header