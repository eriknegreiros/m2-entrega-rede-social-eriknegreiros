import {
    Request
} from "./api.js"


class Dashboard {

    static userId = localStorage.getItem('user_uuid')

    static renderHeaderUser(data) {
        const body = document.querySelector('body')
        const dashboardPost = document.querySelector('.dashboard_post')
        const dashbardFormPost = document.querySelector('.dashboard_form_post')

        const dashboardImg = document.createElement('img')
        const dashboardNameWork = document.createElement('div')
        const dashboardUsername = document.createElement('h2')

        const dashboardWork = document.createElement('p')
        const dashboardFollow = document.createElement('p')

        dashboardImg.classList.add('dashboard_img')
        dashboardNameWork.classList.add('dashboard_name_work')
        dashboardUsername.classList.add('dashboard_username')
        dashboardWork.classList.add('dashboard_work')
        dashboardFollow.classList.add('dashboard_follow')


        dashboardImg.src = data.image
        dashboardUsername.innerText = data.username
        dashboardWork.innerText = data.work_at
        dashboardFollow.innerText = data.followers_amount


        dashboardNameWork.append(dashboardUsername, dashboardWork)
        dashbardFormPost.append(dashboardImg, dashboardNameWork, dashboardFollow)
        dashboardPost.append(dashbardFormPost)
        body.append(dashboardPost)
    }

    static postPage(data) {

        const main = document.querySelector('main')
        const section = document.querySelector('.section_profile_user')
        const postsTitle = document.querySelector('.posts_title')

        data.data.forEach((element) => {
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
            heartRed.classList.add('heart_red none')
            amountLike.classList.add('amount_like')


            mainImgPost.src = element.results.author.image
            postUsername.innerText = element.results.author.username
            postWork.innerText = element.results.author.work_at
            titleTextPost.innerText = element.results.title
            resumePost.innerText = element.results.description
            openPostBtn.innerText = 'Abrir Post'
            heartBlack.src = "../../../src/assets/heartBlack.png"
            heartRed.src = "../../../src/assets/heartRed.png"
            amountLike.innerText = element.results.likes

            likePostDiv.append(heartBlack, heartRed, amountLike)
            divOpenPost.append(openPostBtn, likePostDiv, likePostDiv)
            divTextPost.append(titleTextPost, resumePost, divOpenPost)
            divPostBio.append(postUsername, postWork)
            sectionDivPost.append(mainImgPost, divPostBio)
            section.append(postsTitle, sectionDivPost, divTextPost, )
            main.append(section)
        })
    }


    static createPost () {
       const dashboardTextareaTitulo = document.querySelector('.dashboard_textarea_titulo')

        const dashboardTextareaConteudo = document.querySelector('.dashboard_textarea_conteudo')

        const dashboardPostBtn = document.querySelector('.dashboard_post_btn')

        dashboardPostBtn.addEventListener('click',async (event) =>{
            event.preventDefault()

            const data = {
                title: dashboardTextareaTitulo.value, 
                description: dashboardTextareaConteudo.value
            }
            await Request.createPostRequest(data)
        })


    }
}

//const page = await Request.renderPost(1)

const user = await Request.userById(Dashboard.userId)

console.log(await Request.userById(Dashboard.userId))

console.log(Dashboard.userId)

Dashboard.renderHeaderUser(user)

//Dashboard.postPage(page)
//Dashboard.createPost()
