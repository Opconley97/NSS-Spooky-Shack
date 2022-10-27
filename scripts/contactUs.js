// import { contactForm } from './contactUs.js'
// const applicationHTML = `${contactForm()}`
// const mainContainer = document.querySelector(".container")

//Event listener click event for contact form submit button
document.addEventListener("click",  // This is the type of event
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

            if (itemClicked.type.startsWith("submit")) {
                        window.alert(`Error: Field cannot be left blank.`)}
        
                        }
                    )

//Event listener click event for back linke with saw guy pic
document.addEventListener("click",  
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

            if (itemClicked.id.startsWith("back")) {
                        window.alert(`Let's play a game. Select the correct button to turn on the lights and go back to the homepage. Good luck ... `)}
        
                        }
                    )

//Click event window alert for "actual" back button. Does not go back, displays form error pop up instead
document.addEventListener("click",  
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

            if (itemClicked.id.startsWith("back2")) {
                        window.alert(`Error: Field cannot be left blank.`)}
        
                        }
                    )

//Radio button guessing game to get back to main page                    

document.addEventListener(
     "change",
        (event) => {
            if (event.target.name === "radio1") {
                window.alert(`Guess again`)
                            }
                        }
                    )

//Changes background color to white to highlight "actual" back button

document.addEventListener(
     "change",
          (event) => {
            if (event.target.name === "radio2") {
                document.body.style.backgroundColor = 'white';
                                               }
                                           }
                                       )

document.addEventListener(
     "change",
        (event) => {
          if (event.target.name === "radio2") {
            window.alert(`You have chosen wisely`)
          }
        }
 )
//selecting correct button reveals link back to homepage
// export const contactForm = () => {
//     return ` <article>
    
//     <form action="action_page">
            
//     <label for="fname">First Name</label>
//     <input type="text" id="fname" name="firstname" placeholder="Your name..">
    
//     <label for="lname">Last Name</label>
//     <input type="text" id="lname" name="lastname" placeholder="Your last name..">
    
//     <label for="country">Country</label>
//     <select id="country" name="country">
//         <option value="australia">Australia</option>
//         <option value="canada">Canada</option>
//         <option value="usa">USA</option>
//     </select>
    
//     <label for="subject">Subject</label>
//     <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    
//     <input type="submit" value="Submit">
    
// </form>
// </article>

// <article class="links">
// <p id="back">Go Back <img src=url"https://i.imgflip.com/23f1e0.jpg" alt="Masked guy from movie Saw" width="150"></p>
// <p id="back2">Go Back</p>
// </article>

// <article class="radio">
// <input type="radio" name="radio1" value="" /><input type="radio" name="radio1" value="" />
// <input type="radio" name="radio1" value="" /><input type="radio" name="radio1" value="" />
// <input type="radio" name="radio1" value="" /><input type="radio" name="radio1" value="" />
// <input type="radio" name="radio1" value="" /><input type="radio" name="radio1" value="" />
// <input type="radio" name="radio1" value="" /><input type="radio" name="radio1" value="" />
// <input type="radio" name="radio1" value="" /><input type="radio" name="radio1" value="" />
// <input type="radio" name="radio1" value="" /><input type="radio" name="radio1" value="" />
// <input type="radio" name="radio1" value="" /><input type="radio" name="radio1" value="" />
// <input type="radio" name="radio1" value="" /><input type="radio" name="radio1" value="" />
// <input type="radio" name="radio1" value="" /><input type="radio" name="radio2" value="" />
// </article>

// <audio src="/music/SpookyScarySkeletons.mp3" controls>	
// 	<embed 
// 		src="/music/good_enough.mp3"
// 		width="30"
// 		height="30"
// 		loop="true"
// 		autostart="true">
// </audio>`
// }
