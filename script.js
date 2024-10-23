
// For Clicking Effect and Header

let width = window.innerWidth
window.addEventListener('resize', ()=>{
    width = window.innerWidth
    if(width > 768){
        let value = document.querySelector('.responsiveNav').classList.contains('open')
        if (value){
            document.querySelector('.responsiveNav').classList.remove('open')
        }
    }
})

document.querySelector('#toggle').addEventListener('click', ()=>{
    document.querySelector('.responsiveNav').classList.toggle('open')
})


document.querySelector('.about').addEventListener('click', (evt) =>{
    evt.preventDefault()
    if(width > 767 && width < 991){
        window.scrollBy(0, 400)
    }else if(width > 991){
        window.scrollBy(0, 500)
    }else if(width < 768){
        window.scrollBy(0, 600)
    }
})

document.querySelector('.services').addEventListener('click', (evt) =>{
    evt.preventDefault()
    window.scrollBy(0, 1000)
})

document.querySelector('.contactHeader').addEventListener('click', (evt) =>{
    evt.preventDefault()
    window.scrollBy(0, 1000)
})


document.querySelector('#about').addEventListener('click', (evt) =>{
    evt.preventDefault()
    window.scrollBy(0, 650)
})

document.querySelector('#services').addEventListener('click', (evt) =>{
    evt.preventDefault()
    window.scrollBy(0, 1490)
})

document.querySelector('#contactHeader').addEventListener('click', (evt) =>{
    evt.preventDefault()
    window.scrollBy(0, 1490)
})


// For Contacts button
document.querySelector('#whatsapp').addEventListener('click', () =>{
    document.querySelector('#info').innerText = '+8801533614964'
})

document.querySelector('#skype').addEventListener('click', () =>{
    document.querySelector('#info').innerText = 'https://join.skype.com/invite/txpV2kMrASoc'
})

document.querySelector('#mail').addEventListener('click', () =>{
    document.querySelector('#info').innerText = 'asaduzzamanbhuiyanasad@gmail.com'
})

window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;

    if(scroll >= 500){
        document.querySelector('#top').style.display = 'block'
    }else{
        document.querySelector('#top').style.display = 'none'
    }
})


document.querySelector('#top').addEventListener('click', () =>{
    window.scrollTo(0, 0)
})

const copy = document.querySelector('#info')

copy.addEventListener('click', () =>{
    navigator.clipboard.writeText(copy.innerText)
    .then(() =>{
        alert(`Copied ${copy.innerText}`)
    })
})


// console.log(window.innerWidth)