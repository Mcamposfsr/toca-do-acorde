import Lista from "../../Lista"
import Logo from "../../Logo"
import Paragrafo from "../../Paragrafo"
import Titulo from "../../Titulo"

const QuemSomos = () =>{
    return (
            <section className="flex flex-col gap-[50px] items-center justify-center bg-azulCeu max-w-screen h-full box-border">
                <div className="flex flex-col gap-[2em] mt-[3em] mx-[4em] font-light ">
                    <h1 className="font-nautigal text-[6em] text-laranja font-black">Sobre Nós:</h1>
                    
                    <Titulo texto={"Quem somos"}/>
                    <Paragrafo texto={"A ChordCave nasceu com o propósito de ajudar músicos de todos os níveis a explorar e aprender novos acordes de violão de forma simples e prática. Seja você um iniciante dando os primeiros passos ou um músico experiente em busca de inspiração, queremos ser o seu ponto de apoio."}/>
                    
                    <Titulo texto={"Nossa Missão"}/>
                    <Paragrafo texto={"Facilitar o aprendizado musical, tornando-o acessível e colaborativo, enquanto criamos uma comunidade apaixonada pela música."}/>
                    
                    <Titulo texto={"O Que Oferecemos"}/>
                    <Lista itens={[
                       "Uma galeria de acordes com imagens e informações detalhadas.",
                       "A possibilidade de você contribuir, enviando novos acordes para a nossa biblioteca.",
                       "Um ambiente intuitivo, pensado para facilitar sua experiência."
                    ]}/>
                    
                    <Titulo texto={"Colabore Conosco"}/>
                    <Paragrafo texto={"A música é uma linguagem universal, e queremos construir este site junto com você! Caso tenha sugestões, envie novos acordes ou compartilhe sua opinião, sua contribuição será muito bem-vinda."}/>


                </div>
                <Logo className="mt-[50px] my-[.6em]"/>

            </section>
    )
}

export default QuemSomos