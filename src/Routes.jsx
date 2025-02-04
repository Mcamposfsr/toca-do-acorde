// COMPONENTES
import Header from "./components/Header"
import PaginaPrincipal from "./components/Pages/PaginaPrincipal"
import Inicio from "./components/Pages/Inicio"
import QuemSomos from "./components/Pages/QuemSomos"
import Modal from "./components/Modal"

// ARQUIVOS ESTÁTICOS
import mainImg  from "/pessoa-tocando-violao.jpg"
// BIBLIOTECAS

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { v4 as uuid } from "uuid"
function App() {

// DADOS BTN HEADER
  const infosLinks = [
    {txt:"Quem somos",url:"/about"},
    {txt:"Acordes",url:"/x"},
    {txt:"Fazer login",url:"/y"},
  ]

  const inputsCreate = [
    {
      type:"text",
      text:"Nome",
      id:uuid(),
      onChange:() => console.log("FuncionouPoraaaaaaaa")
    },
    {
      type:"text",
      text:"Email",
      id:uuid(),
      onChange:() => console.log("FuncionouPoraaaaaaaa")
    },
    {
      type:"password",
      text:"Senha",
      id:uuid(),
      onChange:() => console.log("FuncionouPoraaaaaaaa")
    },
    {
      type:"password",
      text:"Repita a senha",
      id:uuid(),
      onChange:() => console.log("FuncionouPoraaaaaaaa")
    },
    {
      type:"date",
      text:"Data de nascimento",
      id:uuid(),
      onChange:() => console.log("FuncionouPoraaaaaaaa")
    },
  ]

  const inputsLogin = [
    {
      type:"text",
      text:"Email",
      id:uuid(),
      onChange:() => console.log("FuncionouPoraaaaaaaa")
    },
    {
      type:"password",
      text:"Senha",
      id:uuid(),
      onChange:() => console.log("FuncionouPoraaaaaaaa")
    }
  ]



  return (
    <BrowserRouter>
      <Header infoLinks={infosLinks}/>

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
      <Modal 
      texto={"Seja bem vindo!"}
      btnTxt={"Fazer login"}
      inputs={inputsLogin}
      className={""}
      />
      <Modal 
      texto={"Junte-se a nós!"}
      btnTxt={"Inscreva-se"}
      inputs={inputsCreate}
      className={"hidden"}
      />
    </BrowserRouter>
  )
  
}

export default App
