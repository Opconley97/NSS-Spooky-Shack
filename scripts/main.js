import { contactForm } from './contactUs.js'
const applicationHTML = `<div> ${contactForm()} </div>`
const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationHTML

//Ticket incrementer functions for "here" and "cart" buttons
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

//Event listener for pop ups when cart is clicked. Results in multiple window alerts
document.addEventListener("click",  
    (clickEvent) => {

        const itemClicked = clickEvent.target
        
        if (itemClicked.id.startsWith("cart")) {
                    window.alert(`Your cart is now empty.`)}

                }
            )

document.addEventListener("click",  
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

            if (itemClicked.id.startsWith("cart")) {
                        window.alert(`Ready to checkout?`)}
        
                        }
                    )

document.addEventListener("click",  
    (clickEvent) => {
                        
        const itemClicked = clickEvent.target
                
            if (itemClicked.id.startsWith("cart")) {
            window.alert(`Add items to checkout`)}
                        
                         }
                     )
                     document.addEventListener("click",  
                     (clickEvent) => {
                 
                         const itemClicked = clickEvent.target
                         
                         if (itemClicked.id.startsWith("cart")) {
                                     window.alert(`Your cart is now empty.`)}
                 
                                 }
                             )
                 
                 document.addEventListener("click",  
                     (clickEvent) => {
                         
                         const itemClicked = clickEvent.target
                 
                             if (itemClicked.id.startsWith("cart")) {
                                         window.alert(`Ready to checkout?`)}
                         
                                         }
                                     )
                 
                 document.addEventListener("click",  
                     (clickEvent) => {
                                         
                         const itemClicked = clickEvent.target
                                 
                             if (itemClicked.id.startsWith("cart")) {
                             window.alert(`Add items to checkout`)}
                                         
                                          }
                                      )
                                      document.addEventListener("click",  
                                      (clickEvent) => {
                                  
                                          const itemClicked = clickEvent.target
                                          
                                          if (itemClicked.id.startsWith("cart")) {
                                                      window.alert(`Your cart is now empty.`)}
                                  
                                                  }
                                              )
                                  
                                  document.addEventListener("click",  
                                      (clickEvent) => {
                                          
                                          const itemClicked = clickEvent.target
                                  
                                              if (itemClicked.id.startsWith("cart")) {
                                                          window.alert(`Ready to checkout?`)}
                                          
                                                          }
                                                      )
                                  
                                  document.addEventListener("click",  
                                      (clickEvent) => {
                                                          
                                          const itemClicked = clickEvent.target
                                                  
                                              if (itemClicked.id.startsWith("cart")) {
                                              window.alert(`Add items to checkout`)}
                                                          
                                                           }
                                                       )
                                                       document.addEventListener("click",  
                                                       (clickEvent) => {
                                                   
                                                           const itemClicked = clickEvent.target
                                                           
                                                           if (itemClicked.id.startsWith("cart")) {
                                                                       window.alert(`Your cart is now empty.`)}
                                                   
                                                                   }
                                                               )
                                                   
                                                   document.addEventListener("click",  
                                                       (clickEvent) => {
                                                           
                                                           const itemClicked = clickEvent.target
                                                   
                                                               if (itemClicked.id.startsWith("cart")) {
                                                                           window.alert(`Ready to checkout?`)}
                                                           
                                                                           }
                                                                       )
                                                   
                                                   document.addEventListener("click",  
                                                       (clickEvent) => {
                                                                           
                                                           const itemClicked = clickEvent.target
                                                                   
                                                               if (itemClicked.id.startsWith("cart")) {
                                                               window.alert(`Add items to checkout`)}
                                                                           
                                                                            }
                                                                        )
