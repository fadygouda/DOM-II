// Your code goes here

const header = document.querySelector('.main-navigation');
header.addEventListener('click', (event) => {
    header.style.background = 'hotpink';
}            
)

const logo = document.querySelector('.logo-heading');
logo.addEventListener(
    'click', (event) => {
        logo.style.color = 'blue';
        logo.style.fontWeight = 'bold'
        logo.style.fontSize = '5rem'
    }
)


const nav = document.querySelector('.nav');
nav.addEventListener(
    'click', (event) => {
        nav.style.background = 'green';
        console.log('the nav got clicked');
    }
)

const homeLink = document.querySelectorAll('.nav-link');
homeLink.forEach(link => {
    link.addEventListener(
    'click',//string with the name of the event
    (event) => {
        //things we want happeneing whenn this link gets clicked
        link.style.color = 'blue';
        console.log('the link got clicked');
        event.preventDefault();
        event.stopPropagation();
        
    }
)})

const intro = document.querySelector('.intro img');
intro.addEventListener('mousemove', () => {
    intro.style.transform = 'scale(1.2)'
    intro.style.transition = 'all 0.5s'
    console.log('the mouse entered the intro');
})
intro.addEventListener('mouseleave', () => {
    intro.style.transform = 'scale(0.8)'
    intro.style.transition = 'all 0.5s'
    console.log('the mouse left the intro');
}
)

const mainContent = document.querySelector('.home');
mainContent.addEventListener('mouseover', () => {
    mainContent.style.background = '#968c72'
    mainContent.style.transition = 'all 2s'
})

const introTitle = document.querySelector('.intro h2');
introTitle.addEventListener('mouseover', () => {
    introTitle.style.textAlign = 'center'
    introTitle.style.fontWeight = 'bold'
    introTitle.style.fontSize = '5rem'
})


const introText = document.querySelector('.intro p');
introText.addEventListener('mouseover', () => {
    introText.style.textAlign = 'center'
})

const contactSection = document.querySelectorAll('.content-section h2');
contactSection.forEach(h2 => {
    h2.addEventListener('mouseover', () => {
    h2.style.textAlign = 'center'
    h2.style.fontWeight = 'bold'
    h2.style.fontSize = '5rem'
})})

const contactSectionText = document.querySelectorAll('.content-section p');
contactSectionText.forEach(p => {
    p.addEventListener('mouseover', () => {
    p.style.textAlign = 'center'
})})

const pickDestination = document.querySelector('.content-destination h2');
pickDestination.addEventListener('mouseover', (event) => {
    pickDestination.style.textAlign = 'center'
    pickDestination.style.fontWeight = 'bold'
    pickDestination.style.fontSize = '5rem'
})

const pickDestinationText = document.querySelector('.content-destination p');
pickDestinationText.addEventListener('mouseover', (event) => {
    pickDestinationText.style.textAlign = 'center'
})
const bottomSection = document.querySelector('.content-pick');
bottomSection.addEventListener('mouseover', () => {
    bottomSection.style.flexDirection = 'column'
})


const destinations = document.querySelectorAll('.content-pick .destination');
destinations.forEach(card => {
    card.addEventListener('mouseover', () => {
    card.style.width = '80%'
    card.style.margin= '0 auto'
})

    })
    


const pickContent = document.querySelectorAll('.content-pick .destination h4');
pickContent.forEach(h4 => {
    h4.style.background = '#968c72'
    h4.style.transition = 'all 5s'
    h4.style.textAlign = 'center'
    h4.style.padding = '1rem'
    h4.addEventListener('mouseover', (event) => {
        h4.style.verticalAlign = 'middle'
        h4.style.fontSize = '5rem'
        h4.style.textAlign = 'center'
        h4.style.width = '50%'
        h4.style.padding = '2rem'
        h4.style.borderRadius = '50%'
        h4.style.margin = '0 auto'
        h4.style.background = '#baa468' 
        
    }) 
})

const button = document.querySelectorAll('.content-pick .destination .btn');
button.forEach(btn => {
    btn.style.margin = '10px auto'
})