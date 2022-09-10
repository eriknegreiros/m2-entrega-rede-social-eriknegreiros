import {
    Request
} from "./api.js"

class Log {

    static dash() {
        if (localStorage.getItem('token')) {
            window.location.replace('./src/pages/dashboard.html')
        }
    }

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
Log.dash()
