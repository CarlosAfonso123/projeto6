import api from "../api";

export async function criarCliente(compraId, nome, email){
    try {
        await api.post(`/repos/`, {
            name: nome,
            email: email,
            compraId: compraId
        });
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro'
    }
}