import Button from "../../ButtonBlue"
import { useNavigate } from "react-router-dom"

const Inicio = ({ imgBanner, txtBotao, }) => {

    const nav = useNavigate()

    return (
        <section className="h-[87.5VH] w-screen  bg-top bg-no-repeat bg-opacity-1 bg-cover relative"
            style={{ backgroundImage: `url(${imgBanner})` }}>
            <div className="absolute top-0 w-screen h-[87.5VH] bg-white bg-opacity-80 flex items-center justify-center flex-col gap-[50px]">
                <h2 className="text-laranja text-[10em] font-bold">ChordCave</h2>
                <p className="text-azulClaro text-[50px] font-light">Sua biblioteca online de acordes.</p>
                <Button
                    texto={txtBotao}
                    acao={() => nav("/acordes")} />
            </div>
        </section>
    )
}

export default Inicio