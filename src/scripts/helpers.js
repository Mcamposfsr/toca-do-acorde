const atualizarErrosForm = (valor,tipoForm,setter) =>{
    setter(
        prevdata => ({...prevdata,
            [tipoForm]:Object.keys(valor).reduce((acc,chave)=>{
                acc[chave] = {txt:prevdata[tipoForm][chave].txt,erro:valor[chave]}
                return acc
        },{})
    })
    )
}
export default class Validacoes {

    constructor(campos,dados,tipoForm){
        this.valores = {}
        this.tipoForm = tipoForm

        campos.forEach((campo)=>{
            this.valores[campo] = dados[campo].txt
        })    
    }

    nome(){
        if(!this.valores.nome) return "Campo não pode estar vazio";
        return ""
    }

    email(){
        if(!this.valores.email) return "Campo não pode estar vazio";
        if(!/\S+@\S+\.\S+/.test(this.valores.email)) return "E-mail inválido";
        return ""

    }

    senha(){
        if(!this.valores.senha) return "Campo não pode estar vazio";
        if(this.valores.senha.length<8 && this.tipoForm == "cadastro") return "Senha precisa ter pelo menos 8 dígitos";
        return ""
    }

    confSenha(){
        if(!this.valores.confSenha) return "Campo não pode estar vazio";
        if(this.valores.senha != this.valores.confSenha) return "Senhas precisam ser iguais";
        return ""

    }
}
const iniciarEstadoForm = (campos,dados) =>{
        
    let estado = campos.reduce((acc, tipo) => {
        acc[tipo] = dados[tipo].dadosInputs.reduce((acc,dado)=>{
            acc[dado.id] = {txt:"",erro:""}
            return acc
        },{});
        return acc;
    }, {})
    return estado
}

const ordenarNomes = (array) =>{
    
    let arr = []
    if(array.length<= 1){
        return array
    }else{
        let meio = Math.floor(array.length/2)
        let parte1 = ordenarNomes(array.slice(0,meio))
        let parte2 = ordenarNomes(array.slice(meio))


        let indiceLista1 = 0
        let indiceLista2 = 0

        while(indiceLista1<parte1.length && indiceLista2<parte2.length){
            if(parte1[indiceLista1].nome<parte2[indiceLista2].nome){
                arr.push(parte1[indiceLista1])
                indiceLista1++
            }else{
                arr.push(parte2[indiceLista2])
                indiceLista2++
            }
        }

        while(indiceLista1<parte1.length){
            arr.push(parte1[indiceLista1])
            indiceLista1++
        }
        while(indiceLista2<parte2.length){
            arr.push(parte2[indiceLista2])
            indiceLista2++
    }

    return arr
}

}

const ordenarDatas = (array) =>{
    if(array.length<=1){
        return array
    }else{
        let arr = []
        let meio = Math.floor(array.length/2)
        let arr1 = ordenarDatas(array.slice(0,meio))
        let arr2 = ordenarDatas(array.slice(meio))

        let indiceParte1 = 0
        let indiceParte2 = 0

        while(arr1.length>indiceParte1 && arr2.length>indiceParte2){
            if(new Date(arr1[indiceParte1].data) < new Date(arr2[indiceParte2].data)){
                arr.push(arr1[indiceParte1])
                indiceParte1++
            }else{
                arr.push(arr2[indiceParte2])
                indiceParte2++
            }
        }

        while(indiceParte1 < arr1.length){
            arr.push(arr1[indiceParte1])
            indiceParte1++
        }
        while(indiceParte2 < arr2.length){
            arr.push(arr2[indiceParte2])
            indiceParte2++
        }
        return arr


    }
}

const pesquisarAcorde = (array,filtro) =>{
    let acorde = filtro.toLowerCase().replace(/\s+/g, "")
    console.log(acorde,array)

    let resultado = array.filter((e)=>{
        let nome = e.nome.toLowerCase().replace(/\s+/g, "")
        if(nome.includes(acorde)){
            return e
        }
    })

    return resultado

}

export {Validacoes, atualizarErrosForm, iniciarEstadoForm, ordenarNomes, ordenarDatas, pesquisarAcorde}