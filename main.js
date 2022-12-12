let aboutme = document.getElementById('aboutme')
let skills = document.getElementById('skills')
let portfolio = document.getElementById('portfolio')
let contacts = document.getElementById('contacts')


let home_link = document.getElementById('aboutme_link')
let aboutme_link = document.getElementById('aboutme_link')
let skills_link = document.getElementById('skills_link')
let portfolio_link = document.getElementById('portfolio_link')
let contacts_link = document.getElementById('contacts_link')


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.clear();
    console.log('scroll', scroll)
    if(0 < scroll && scroll <  aboutme.offsetTop){
        home_link.classList.add('active')
        aboutme_link.classList.remove('active')
        skills_link.classList.remove('active')
        portfolio_link.classList.remove('active')
        contacts_link.classList.remove('active')
        console.log('home')
    } else if(aboutme.offsetTop < scroll && scroll <  skills.offsetTop){
        home_link.classList.remove('active')
        aboutme_link.classList.add('active')
        skills_link.classList.remove('active')
        portfolio_link.classList.remove('active')
        contacts_link.classList.remove('active')
        console.log('aboutme', aboutme.offsetTop)
    } else if(skills.offsetTop < scroll && scroll <  portfolio.offsetTop){
        home_link.classList.remove('active')
        aboutme_link.classList.remove('active')
        skills_link.classList.add('active')
        portfolio_link.classList.remove('active')
        contacts_link.classList.remove('active')
        console.log('skills', skills.offsetTop)
    } else if(portfolio.offsetTop < scroll && scroll <  contacts.offsetTop){
        home_link.classList.remove('active')
        aboutme_link.classList.remove('active')
        skills_link.classList.remove('active')
        portfolio_link.classList.add('active')
        contacts_link.classList.remove('active')
        console.log('portfolio', portfolio.offsetTop)
    } else if(contacts.offsetTop - 150 < scroll){
        home_link.classList.remove('active')
        aboutme_link.classList.remove('active')
        skills_link.classList.remove('active')
        portfolio_link.classList.remove('active')
        contacts_link.classList.add('active')
        console.log('contacts', contacts.offsetTop)
    }
});