import axios from "axios"
import { ordenarNomes, ordenarDatas, pesquisarAcorde } from "./helpers"

const api = axios.create({
    baseURL: "http://localhost:5173",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
})

class Requisicoes {

    cadastro = async (dados) => {

        let cadastro = {
            nome: dados.nome.txt,
            email: dados.email.txt,
            senha: dados.senha.txt
        }

        let response = await api.get(`/users?email=${cadastro.email}`)

        if (response.data.length == 0) {
            await api.post("/users", JSON.stringify(cadastro))

        } else {
            throw new Error("Email em uso.")
        }

    }
    login = async (dados) => {
        let response = await api.get(`/users?email=${dados.email.txt}`)

        if (response.data.length == 0) {
            throw new Error("Usuário não cadastrado")
        }
        if (response.data[0].senha != dados.senha.txt) {
            throw new Error("Senha incorreta")
        }

        return response.data



    }
    buscarAcordes = async (filtro) => {

        let response = await api.get("/acordes")
        if (filtro == "alfabeto") {
            console.log("Ordem alfabética")

            return ordenarNomes(response.data)
        }
        if (filtro == "data") {
            console.log("ordem por data")
            return ordenarDatas(response.data)
        }
        if (filtro) {
            return pesquisarAcorde(response.data,filtro)
        }

        return response.data
    }

}

export default Requisicoes
