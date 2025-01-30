// COMPONENTES
import Header from "./components/Header"
import PaginaPrincipal from "./components/Pages/PaginaPrincipal"
import Inicio from "./components/Pages/Inicio"
import QuemSomos from "./components/Pages/QuemSomos"

// ARQUIVOS ESTÁTICOS
import mainImg  from "/pessoa-tocando-violao.jpg"
// BIBLIOTECAS

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

// DADOS BTN HEADER
  const infosLinks = [
    {txt:"Quem somos",url:"/about"},
    {txt:"Acordes",url:"/x"},
    {txt:"Fazer login",url:"/y"},
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
    </BrowserRouter>
  )
  
}

export default App
