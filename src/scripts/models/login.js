import {Request} from "./api.js"

class Log {
    static login() {
        const email = document.querySelector('.email')
        const password = document.querySelector('.password')
        const loginBtn = document.querySelector('.login_btn_logon')

        loginBtn.addEventListener('click', async (event) => {
            event.preventDefault()

            const data = {
                email: email.value,
                password: password.value
            }
             await Request.userLogin(data)
        })
    }
}

Log.login()

