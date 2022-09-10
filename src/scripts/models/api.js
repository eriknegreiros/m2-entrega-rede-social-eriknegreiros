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
                Toast.create('Login Realizado com sucesso', "#00992E")
                setTimeout(() => {
                    window.location.replace("./src/pages/dashboard.html")
                }, 1000)
                return res
            })
            .catch((err) => {
                Toast.create('Dados incorretos, Verifique os campos', '#D90A02')
                console.log(err)
            })
    }

    static async createUser(data) {
        return await instance
            .post('/', data)
            .then((res) => {
                Toast.create('Conta criada com sucesso', "#00992E")
                setTimeout(() => {
                    window.location.replace('../../index.html')
                }, 1000)

                return res

            })
            .catch((err) => {
                Toast.create('Conta não criada, verifique os campos', "#D90A02")
                console.log(err)
            })
    }

    static async renderPost(numpage) {
        const base = await instanceB
        .get('')
            .then(res => res.data.results)
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
        const base = await instanceC
            .get(`/${id}/`)
            .then(res => res.data)
            .catch(err => err)
        return base
    }

    static async allUsers() {
        const base = await instanceC
            .get(`?limit=250&offset=250/`)
            .then((res) => {
                return res.data.results.splice(0,3)
            })
            .catch(err => console.log(err))
        return base
    }

    static async followUser(data) {
        const base = await instanceC
            .post(`follow/`, data)
            .then(res => res)
            .catch(err => console.log(err))
        return base
    }

    static async unfollowUser(id) {
        const base = await instanceC
            .delete(`unfollow/${id}/`)
            .then(res => res)
            .catch(err => console.log(err))
        return base
    }

    static async likes(data){
        const base = await instanceD
        .post(``, data)
        .then(res => res)
        .catch(err => console.log(err))
        return base
    }


    static async unlike(id){
        const base = await instanceD
        .delete(`${id}`)
        .then(res => res)
        .catch(err => console.log(err))
        return base
    }

}