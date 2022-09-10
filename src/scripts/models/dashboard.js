import {
    Request
} from "./api.js"

class Dashboard {

    static dash() {
        if (!localStorage.getItem('token')) {
            window.location.replace('../../../index.html')
        }
    }

    static userId = localStorage.getItem('user_uuid')

    static logout() {
        const logoutBtn = document.querySelector('.dashboard_btn')

        logoutBtn.addEventListener('click', () => {
            localStorage.clear()
            window.location.replace("../../index.html")
        })
    }


    static renderHeaderUser(data) {
        const dashboardPost = document.querySelector('.dashboard_post')


        const dashbardFormPost = document.createElement('div')
        const dashboardImg = document.createElement('img')
        const dashboardNameWork = document.createElement('div')
        const dashboardUsername = document.createElement('h2')

        const dashboardWork = document.createElement('p')
        const dashboardFollow = document.createElement('p')

        dashbardFormPost.classList.add('dashboard_form_post')
        dashboardImg.classList.add('dashboard_img')
        dashboardNameWork.classList.add('dashboard_name_work')
        dashboardUsername.classList.add('dashboard_username')
        dashboardWork.classList.add('dashboard_work')
        dashboardFollow.classList.add('dashboard_follow')


        dashboardImg.src = data.image
        dashboardUsername.innerText = data.username
        dashboardWork.innerText = data.work_at
        dashboardFollow.innerText = `${data.followers_amount} Seguidores`



        dashboardNameWork.append(dashboardUsername, dashboardWork)
        dashbardFormPost.append(dashboardImg, dashboardNameWork, dashboardFollow)
        dashboardPost.append(dashbardFormPost)
    }

    static  suggestionToFollow(data) {
        const dashboardApoioFlex = document.getElementById('dashboard_apoio_flex')

        const base = data.forEach((element) => {

            const divUsersFlex = document.createElement('div')
            const imgFollowers = document.createElement('img')
            const bioFollowers = document.createElement('div')
            const nameOfUsername = document.createElement('h3')
            const nameOfWork = document.createElement('p')
            const followBtn = document.createElement('button')

            divUsersFlex.classList.add('div_users_flex')
            imgFollowers.classList.add('img_followers')
            bioFollowers.classList.add('bio_followers')
            nameOfUsername.classList.add('name_of_username')
            nameOfWork.classList.add('name_of_work')
            followBtn.classList.add('follow_btn')

            imgFollowers.src = element.image
            nameOfUsername.innerText = element.username
            nameOfWork.innerText = element.work_at
            followBtn.innerText = 'Seguir'

            





            followBtn.addEventListener('click', async (event) => {
                event.preventDefault()

                followBtn.classList.toggle('follow_btn2')
                followBtn.classList.toggle('follow_btn')

                if (followBtn.classList.contains('follow_btn2')) {
                    followBtn.innerText = 'Seguindo'
                    const data = {
                        'following_users_uuid': element.uuid
                    }
                   const res = await Request.followUser(data)
                    followBtn.id = res.data.uuid
                } else {
                    followBtn.innerText = 'Seguir'
                    await Request.unfollowUser(followBtn.id)
                }
            })

            bioFollowers.append(nameOfUsername, nameOfWork, followBtn)
            divUsersFlex.append(imgFollowers, bioFollowers)
            dashboardApoioFlex.append(divUsersFlex)
        })
        return base
    }


    static postPage(data) {
        const section = document.querySelector('.section_profile_user')

        const base = data.forEach((element) => {

            const sectionDivPost = document.createElement('div')
            const mainImgPost = document.createElement('img')
            const divPostBio = document.createElement('div')
            const postUsername = document.createElement('h4')
            const postWork = document.createElement('p')
            const divTextPost = document.createElement('div')
            const titleTextPost = document.createElement('h1')
            const resumePost = document.createElement('p')
            const divOpenPost = document.createElement('div')
            const openPostBtn = document.createElement('button')
            const likePostDiv = document.createElement('div')
            const heartBlack = document.createElement('img')
            const heartRed = document.createElement('img')
            const amountLike = document.createElement('p')


            sectionDivPost.classList.add('section_div_post')
            mainImgPost.classList.add('main_img_post')
            divPostBio.classList.add('div_post_bio')
            postUsername.classList.add('post_username')
            postWork.classList.add('post_work')
            divTextPost.classList.add('div_text_post')
            titleTextPost.classList.add('title_text_post')
            resumePost.classList.add('resume_post')
            divOpenPost.classList.add('div_open_post')
            openPostBtn.classList.add('open_post_btn')
            likePostDiv.classList.add('like_post_div')
            heartBlack.classList.add('heart_black')
            heartRed.classList.add('heart_red', 'none')
            amountLike.classList.add('amount_like')


            mainImgPost.src = element.author.image
            postUsername.innerText = element.author.username
            postWork.innerText = element.author.work_at
            titleTextPost.innerText = element.title
            resumePost.innerText = element.description
            heartBlack.src = "../assets/heartBlack.png"



            heartBlack.addEventListener('click', async (event) => {
                event.preventDefault()

                heartBlack.classList.toggle('none')
                heartRed.classList.toggle('none')

                if (heartBlack.classList.contains('none')) {
                    amountLike.innerText++
                    const data = {
                        post_uuid: element.uuid
                    }
                    const res = await Request.likes(data)
                    console.log(res)
                    heartRed.id = res.data.uuid
                }
            })

            heartRed.addEventListener('click', async (event) => {
                heartBlack.classList.toggle('none')
                heartRed.classList.toggle('none')

                event.preventDefault()
                if (heartRed.classList.contains('none')) {
                    amountLike.innerText--
                    await Request.unlike(heartRed.id)
                }
            })


            heartRed.src = "../assets/heartRed.png"
            amountLike.innerText = element.likes.length
            openPostBtn.innerText = 'Abrir Post'





            openPostBtn.addEventListener('click', () => {
                this.renderModal(element)

                const modalPost = document.querySelector('.modal_post')
                modalPost.classList.remove('none')

                console.log(data)

            })

            likePostDiv.append(heartBlack, heartRed, amountLike)
            divOpenPost.append(openPostBtn, likePostDiv, likePostDiv)
            divTextPost.append(titleTextPost, resumePost, divOpenPost)
            divPostBio.append(postUsername, postWork)
            sectionDivPost.append(mainImgPost, divPostBio)
            section.append(sectionDivPost, divTextPost)

        })
        return base
    }

    static renderModal(data) {
        const modalPost = document.querySelector('.modal_post')
        const backgroundModal = document.querySelector('.background_modal')

        backgroundModal.innerHTML = ''

        const divModal = document.createElement('div')
        const imgModal = document.createElement('img')
        const closeModal = document.createElement('button')
        const modalBioUser = document.createElement('div')
        const modalName = document.createElement('h3')
        const modalWork = document.createElement('p')
        const textModalDiv = document.createElement('div')
        const modalTitle = document.createElement('h2')
        const modalTextResume = document.createElement('p')


        divModal.classList.add('div_modal')
        imgModal.classList.add('img_modal')
        closeModal.classList.add('close_modal')
        modalBioUser.classList.add('modal_bio_user')
        modalName.classList.add('modal_name')
        modalWork.classList.add('modal_work')
        textModalDiv.classList.add('text_modal_div')
        modalTitle.classList.add('modal_title')
        modalTextResume.classList.add('modal_text_resume')

        imgModal.src = data.author.image
        closeModal.innerText = 'X'
        modalName.innerText = data.author.username
        modalWork.innerText = data.author.work_at
        modalTitle.innerText = data.title
        modalTextResume.innerText = data.description

        closeModal.addEventListener('click', () => {
            modalPost.classList.add('none')
        })

        textModalDiv.append(modalTitle, modalTextResume)
        modalBioUser.append(modalName, modalWork)
        divModal.append(imgModal, closeModal, modalBioUser)
        backgroundModal.append(divModal, textModalDiv)
        modalPost.append(backgroundModal)
    }


    static createPost() {
        const dashboardTextareaTitulo = document.querySelector('.dashboard_textarea_titulo')

        const dashboardTextareaConteudo = document.querySelector('.dashboard_textarea_conteudo')

        const dashboardPostBtn = document.querySelector('.dashboard_post_btn')

        dashboardPostBtn.addEventListener('click', async (event) => {
            event.preventDefault()

            const data = {
                title: dashboardTextareaTitulo.value,
                description: dashboardTextareaConteudo.value
            }
            await Request.createPostRequest(data)

            dashboardTextareaTitulo.value = ''
            dashboardTextareaConteudo.value = ''
        })
    }

}



const page = await Request.renderPost(1)
const user = await Request.userById(Dashboard.userId)
const allUser = await Request.allUsers(1)

Dashboard.dash()
Dashboard.logout()
Dashboard.postPage(page)
Dashboard.renderHeaderUser(user)
Dashboard.suggestionToFollow(allUser)
Dashboard.createPost()