import { contactForm } from './contactUs.js'
const applicationHTML = `<div> ${contactForm()} </div>`
const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationHTML