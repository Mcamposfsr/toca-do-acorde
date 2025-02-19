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

function App() {

// DADOS BTN HEADER
  const infosLinks = [
    {txt:"Quem somos",url:"/about"},
    {txt:"Acordes",url:"/cadastro"},
  ]

  // CONTROLE MODALFormulario
  const [openModal, setOpenModal] = useState("")
  const controleModal = (valor) => setOpenModal(valor)

  // DADOS MODALFormulario
const dadosModal = {
  cadastro:{ 
    textoModal:"Crie uma conta e junta-se a nossa comunidade!",
    textoBtnSubmit:"Fazer cadastro",
    dadosInputs:[
    {
      type:"text",
      label:"Nome",
      id:"Nome",
    },
    {
      type:"text",
      label:"Email",
      id:"Email",
    },
    {
      type:"password",
      label:"Senha",
      id:"Senha",
    },
    {
      type:"password",
      label:"Repita a senha",
      id:"confSenha",
    },
    {
      type:"date",
      label:"Data de nascimento",
      id:"Data",

    }
  ]},
  login:{
    textoModal:"Seja bem vindo!",
    textoBtnSubmit:"Fazer Login",
    dadosInputs:[
    {
      type:"text",
      label:"Email",
      id:"Email",
    },
    {
      type:"password",
      label:"Senha",
      id:"Senha",
    }
  ]}
}

  return (
    <BrowserRouter>
      <Header 
        infoLinks={infosLinks} 
        controleModal={setOpenModal}
      />

      <Routes>
        <Route path="/" element={<PaginaPrincipal/>}>
          
          <Route index element={<Inicio
            imgBanner={mainImg}
            txtBotao={"Começe agora!"}
            acaoBotao={()=>{alert("Olá")}}/>}
          />
          
          <Route path="/about" element={<QuemSomos/>}/>
        </Route>
        
      </Routes>
            <ModalFormulario      
            estadoModal={openModal}
            controleModal={controleModal}
            dados={dadosModal}
            />

  
    </BrowserRouter>
  )
  
}

export default App
