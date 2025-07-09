// COMPONENTES
import Header from "./components/Header"
import PaginaPrincipal from "./components/Pages/PaginaPrincipal"
import Inicio from "./components/Pages/Inicio"
import QuemSomos from "./components/Pages/QuemSomos"
import ModalFormulario from "./components/ModalFormulario"

// ARQUIVOS ESTÁTICOS
import mainImg  from "/pessoa-tocando-violao.jpg"

// BIBLIOTECAS
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Acordes from "./components/Pages/Acordes"

function App() {
  // CONTROLE DE LOGIN
  const [isLogged, setIsLogged] = useState(localStorage.getItem("login")?true:false)


  // DADOS BTN HEADER
  const infosLinks = [
    {txt:"Quem somos",url:"/about"},
    {txt:"Acordes",url:"/acordes"},
  ]

  // CONTROLE MODAL
  const [openModal, setOpenModal] = useState("")
  const controleModal = (valor) => setOpenModal(valor)

  // DADOS MODAL
  const dadosModal = {
    cadastro:{ 
      textoModal:"Crie uma conta e junta-se a nossa comunidade!",
      textoBtnSubmit:"Fazer cadastro",
      dadosInputs:[
      {
        type:"text",
        label:"Nome",
        id:"nome",
      },
      {
        type:"text",
        label:"Email",
        id:"email",
      },
      {
        type:"password",
        label:"Senha",
        id:"senha",
      },
      {
        type:"password",
        label:"Repita a senha",
        id:"confSenha",
      },
    ]},
    login:{
      textoModal:"Seja bem vindo!",
      textoBtnSubmit:"Fazer Login",
      dadosInputs:[
      {
        type:"text",
        label:"Email",
        id:"email",
      },
      {
        type:"password",
        label:"Senha",
        id:"senha",
      }
    ]}
  }


  return (
    <BrowserRouter>
      <Header
        infoLinks={infosLinks} 
        controleModal={setOpenModal}
        setIsLogged={setIsLogged} 
        isLogged={isLogged}
      />

      <Routes>
        <Route path="/" element={<PaginaPrincipal/>}>
          
          <Route index element={<Inicio
            imgBanner={mainImg}
            txtBotao={"Começe agora!"}
           />}
          />
          
          <Route path="/about" element={<QuemSomos/>}/>
          <Route path="/acordes" element={<Acordes
          controleModal={setOpenModal}
          isLogged={isLogged}
          
          />}/>
        </Route>
        
      </Routes>
            <ModalFormulario      
            estadoModal={openModal}
            controleModal={controleModal}
            dados={dadosModal}
            setIsLogged={setIsLogged} 
            isLogged={isLogged}
            />

  
    </BrowserRouter>
  )
  
}

export default App
