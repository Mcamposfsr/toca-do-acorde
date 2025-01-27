// COMPONENTES
import Header from "./components/Header"
import Main from "./components/Main"
// ARQUIVOS ESTÁTICOS
import logo from "/logo.png"
import mainImg  from "/pessoa-tocando-violao.jpg"

function App() {


  const alertar = () => alert("Funcionou")

// DADOS BTN HEADER
  const dadosBtn = [
    {textoBtn:"Quem somos nós",acao:alertar},
    {textoBtn:"Acordes",acao:alertar},
    {textoBtn:"Fazer login",acao:alertar},
  ]

  return (
    <>
      <Header
        btnInfos={dadosBtn}
        img={logo}
        altLogo={"Imagem logo toca do acorde"}
      />
      <Main
      imgBanner={mainImg}
      txtBotao={"Começe agora!"}
      acaoBotao={()=>{alert("Olá")}}
      />

    </>
  )
}

export default App
