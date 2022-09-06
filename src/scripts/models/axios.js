const token = localStorage.getItem('token')

export const instance = axios.create({
    baseURL: 'https://m2-rede-social.herokuapp.com/api/users',
    headers: {
        'Content-Type': 'application/json',
    }
})


export const instanceB = axios.create({
    baseURL: 'https://m2-rede-social.herokuapp.com/api/posts/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
    }
})



export const instanceC = axios.create({
    baseURL: 'https://m2-rede-social.herokuapp.com/api/users/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
    }
})


export const instanceD = axios.create({
    baseURL: 'https://m2-rede-social.herokuapp.com/api/likes/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
    }
})
