import api from '../../services/api';

function Create() {
    api.post('/users')
}


async function buscaUsuario(nomeUsuario) {
    try {
        const resultado = await api.get(`/users?login=${nomeUsuario}`);
        return resultado.data[0];
    } catch (error) {
        console.log(error)
        return{}
    }
}

export { buscaUsuario }