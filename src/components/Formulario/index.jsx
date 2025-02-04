import Input from "../Input"
import Botao from "../Botao"
const Formulario = ({inputs,btnTxt,className}) =>{

    return (
        <form noValidate className={`${className}`}>
            {inputs.map((dado)=>{
                        return <Input key={dado.id} dados={dado}/>
                    })}

            <Botao
                className={"mt-auto"}
                texto={btnTxt}/>  
        </form>
    )
}

export default Formulario