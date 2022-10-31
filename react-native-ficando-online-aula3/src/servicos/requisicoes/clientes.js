import api from "../api";

export async function criarCliente(nome, email, endereco_Entrega){
    try {
        await api.post(`/clientes/`, {
            name: nome,
            email: email,
            endereco_Entrega: endereco_Entrega
        });
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro'
    }
}