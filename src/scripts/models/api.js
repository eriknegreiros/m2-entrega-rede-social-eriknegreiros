import {
    instance,
    instanceB
} from "./axios.js"
import {
    Toast
} from "./toastify.js"


export class Request { 

    static async userLogin(data) {
        await instance
            .post('/login/', data)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user_uuid', res.data.user_uuid)
                Toast.create('Login Realizado com sucesso', "#364fbb")
                setTimeout(() => {
                    window.location.replace("../../../src/pages/dashboard.html")
                }, 3000)
                return res
            })
            .catch((err) => {
                Toast.create('Email ou senha invalidos', "#4263EB")
                console.log(err)
            })
    }

    static async createUser(data) {
        await instance
            .post('/', data)
            .then((res) => {
                Toast.create('Conta criada com sucesso', "#364fbb")
                setTimeout(() => {
                    window.location.replace('../../index.html')
                }, 3000)

                return res

            })
            .catch((err) => {
                Toast.create('Conta não criada, verifique os campos', "#4263EB")
                console.log(err)
            })
    }

    static async renderPost(numPage) {
        await instanceB
            .get(`?page=${numPage}`)
            .then(res => res)
            .catch(err => console.log(err))
    }


    static async createPostRequest(data){
        await instanceB
        .post(data)
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async userById(id) {
        await instance
            .get(`/${id}/`)
            .then(res => res.data)
            .catch(err => err)
    }

}

 
