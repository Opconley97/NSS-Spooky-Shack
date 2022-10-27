










































//Ticket incrementer functions for "here" and "cart" buttons
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
//<script src="main.js">
// <div>
// <p id="count-el">0</p> 
// <img id="cart" src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png"</p>
// <button id="increment-btn" onclick="increment()">Here</button></div>

//Event listener for pop ups when cart is clicked
document.addEventListener("click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target
        
        if (itemClicked.id.startsWith("cart")) {
                    window.alert(`Your cart is now empty.`)}

                }
            )

document.addEventListener("click",  // This is the type of event
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

            if (itemClicked.id.startsWith("cart")) {
                        window.alert(`Ready to checkout?`)}
        
                        }
                    )

document.addEventListener("click",  // This is the type of event
    (clickEvent) => {
                        
        const itemClicked = clickEvent.target
                
            if (itemClicked.id.startsWith("cart")) {
            window.alert(`Add items to checkout`)}
                        
                         }
                     )