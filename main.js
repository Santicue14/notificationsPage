const markAll = document.querySelector('#mark-read-all')
const posts = document.querySelectorAll('.post');

function updateNotReadPosts(){
    const numberNotReadElements = document.querySelector('#number')
    const notReadElements = document.querySelectorAll('.not-read')
    if (notReadElements.length == 0){
        numberNotReadElements.classList.remove('.number')
        numberNotReadElements.remove()
    }else{
        numberNotReadElements.innerText = notReadElements.length
    }
   //notReadElements.length == 0 ?  numberNotReadElements.classList.remove('.number') && numberNotReadElements.remove() : numberNotReadElements.innerText = notReadElements.length
} 
updateNotReadPosts()

posts.forEach(post =>{
    post.addEventListener('click', ()=>{
        post.querySelector('.status').classList.remove('not-read')
        updateNotReadPosts()
    })
})

markAll.addEventListener('click', ()=>{
    const notReadElements = document.querySelectorAll('.not-read')


    notReadElements.forEach( notReadElement =>{
        notReadElement.classList.remove('not-read')
    })
    updateNotReadPosts()
})


