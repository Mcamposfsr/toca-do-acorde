import { Validacoes } from "./helpers"

// FUNÇÃO DE VALIDAÇÃO

const validacao = (tipoFormulario,estado) =>{
    // CHAVES INPUTS 
    let campos = Object.keys(estado[tipoFormulario])
    // VALIDAÇÕES
    let validacao = new Validacoes(campos,estado[tipoFormulario],tipoFormulario)
    
    // CONTROLE DE VALIDAÇÃO
    let validacaoFormulario = {
        valido:true,
        erros:campos.reduce((acc,campo)=>{
            acc[campo]=""

            acc[campo] = validacao[campo]()
            return acc
        },{})
        
    }

    // VERIFICAR SE HÁ ERROS 
    Object.keys(validacaoFormulario.erros).forEach((key)=>{
        if(validacaoFormulario.erros[key] != ""){
            validacaoFormulario.valido = false
        }
        })

    
    return validacaoFormulario

}


export default validacao