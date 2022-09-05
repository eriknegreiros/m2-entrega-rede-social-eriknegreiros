import {
    instance,
    instanceB,
    instanceC,
    instanceD
} from "./axios.js"
import {
    Toast
} from "./toastify.js"


export class Request {


    static async userLogin(data) {
        return await instance
            .post('/login/', data)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user_uuid', res.data.user_uuid)
                Toast.create('Login Realizado com sucesso', "#364fbb")
                setTimeout(() => {
                    window.location.replace("../../../src/pages/dashboard.html")
                }, 1000)
                return res
            })
            .catch((err) => {
                Toast.create('Email ou senha invalidos', "#4263EB")
                console.log(err)
            })
    }

    static async createUser(data) {
        return await instance
            .post('/', data)
            .then((res) => {
                Toast.create('Conta criada com sucesso', "#364fbb")
                setTimeout(() => {
                    window.location.replace('../../index.html')
                }, 1000)

                return res

            })
            .catch((err) => {
                Toast.create('Conta não criada, verifique os campos', "#4263EB")
                console.log(err)
            })
    }

    static async renderPost(numPage) {
        const base = await instanceB
            .get(`?page=${numPage}`)
            .then(res => res.data.results.reverse())
            .catch(err => console.log(err))
        return base
    }

    static async createPostRequest(data) {
        const base = await instanceB
            .post(``, data)
            .then(res => res)
            .catch(err => console.log(err))
        return base
    }

    static async userById(id) {
        const base = await instance
            .get(`/${id}/`)
            .then(res => res.data)
            .catch(err => err)
        return base
    }

    static async allUsers(numPage) {
        const base = await instance
            .get(`/?page=${numPage}`)
            .then((res) => {
                return res.data.results

            })
            .catch(err => console.log(err))
        return base
    }

    static async followUser(data) {
        const base = await instanceC
            .post(`follow/`, data)
            .then((res) =>{
                 console.log(res) 
            })
          
            .catch(err => console.log(err))
        return base
    }

    static async unfollowUser(id) {
        const base = await instanceC
            .delete(`unfollow/${id}/`)
            .then(res => console.log('Deixou de seguir', res))
            .catch(err => console.log(err))
        return base
    }

    static async likes(data){
        const base = await instanceD
        .post(``, data)
        .then(res => console.log(res,'like'))
        .catch(err => console.log(err))
        return base
    }


    static async unlike(id){
        const base = await instanceD
        .delete(`${id}`)
        .then(res => console.log(res,'unlike'))
        .catch(err => console.log(err))
        return base
    }

}