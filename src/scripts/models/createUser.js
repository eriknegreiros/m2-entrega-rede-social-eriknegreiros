import { Request } from "./api.js"

class Create {
    static dash() {
        if (localStorage.getItem('token')) {
            window.location.replace('../../pages/dashboard.html')
        }
    }
    
    static createUser() {
        const nameReg = document.querySelector('.name_reg')
        const emailReg = document.querySelector('.email_reg')
        const passwordReg = document.querySelector('.password_reg')
        const workReg = document.querySelector('.work_reg')
        const imgReg = document.querySelector('.img_reg')

        const registerBtn = document.querySelector('.register_btn_logon')

        registerBtn.addEventListener('click', async (event) => {
            event.preventDefault()

            const data = {
                username: nameReg.value,
                email: emailReg.value,
                password: passwordReg.value,
                work_at: workReg.value,
                image: imgReg.value
            }
           await  Request.createUser(data)
        })
    }
  
}


Create.dash()
Create.createUser()