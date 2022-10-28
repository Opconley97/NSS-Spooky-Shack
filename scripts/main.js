/*Cursor code: DON'T TOUCH  */
(function () {
    var follower, init, mouseX, mouseY, positionElement, printout, timer;

    follower = document.getElementById('follower');

    printout = document.getElementById('printout');

    mouseX = (event) => {
        return event.clientX;
    };

    mouseY = (event) => {
        return event.clientY;
    };

    positionElement = (event) => {
        var mouse;
        mouse = {
            x: mouseX(event),
            y: mouseY(event)
        };
        follower.style.top = mouse.y + 'px';
        return follower.style.left = mouse.x + 'px';
    };

    timer = false;

    window.onmousemove = init = (event) => {
        var _event;
        _event = event;
        return timer = setTimeout(() => {
            return positionElement(_event);
        }, 1);
    };

}).call(this);

//# sourceMappingURL=data:application/json;base64,
//# sourceURL=coffeescript
/* CURSOR CODE ENDS HERE */


/* Firework animation Click effect: */
// function pop(e) {
//     let amount = 30;
//     switch (e.target.dataset.type) {
//         case 'shadow':
//         case 'line':
//             amount = 60;
//             break;
//     }
//     // Quick check if user clicked the button using a keyboard
//     if (e.clientX === 0 && e.clientY === 0) {
//         const bbox = e.target.getBoundingClientRect();
//         const x = bbox.left + bbox.width / 2;
//         const y = bbox.top + bbox.height / 2;
//         for (let i = 0; i < 30; i++) {
//             // We call the function createParticle 30 times
//             // We pass the coordinates of the button for x & y values
//             createParticle(x, y, e.target.dataset.type);
//         }
//     } else {
//         for (let i = 0; i < amount; i++) {
//             createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
//         }
//     }
// }

// function createParticle(x, y, type) {
//     const particle = document.createElement('particle');
//     document.body.appendChild(particle);
//     let width = Math.floor(Math.random() * 30 + 8);
//     let height = width;
//     let destinationX = (Math.random() - 0.5) * 300;
//     let destinationY = (Math.random() - 0.5) * 300;
//     let rotation = Math.random() * 520;
//     let delay = Math.random() * 200;

//     switch (type) {
//         case 'emoji':
//             particle.innerHTML = ['🎃'][Math.floor(Math.random() * 7)];
//             particle.style.fontSize = `${Math.random() * 24 + 10}px`;
//             width = height = 'auto';
//             break;
//     }

//     particle.style.width = `${width}px`;
//     particle.style.height = `${height}px`;
//     const animation = particle.animate([
//         {
//             transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
//             opacity: 1
//         },
//         {
//             transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
//             opacity: 0
//         }
//     ], {
//         duration: Math.random() * 1000 + 5000,
//         easing: 'cubic-bezier(0, .9, .57, 1)',
//         delay: delay
//     });
//     animation.onfinish = removeParticle;
// }
// function removeParticle(e) {
//     e.srcElement.effect.target.remove();
// }
// document.addEventListener("click", (e) => {
//     // Get the position of the cursor in the document
//     const { clientX: x, clientY: y } = e;

//     // Create multiple particles
//     for (let i = 0; i < PARTICLES_NUMBER; i++) {
//         createParticle(x, y);
//     }
// });


// // A list of all possible colors
// const COLORS = new Image();
// COLORS.src = "https://img.favpng.com/3/14/13/halloween-calabaza-jack-o-lantern-pumpkin-icon-png-favpng-TcpDeXZVK6ds1j7uP27TTq46e.jpg"
// // Defines the particle number
// const PARTICLES_NUMBER = 20;

// function createParticle(x, y) {
//     const element = document.createElement("div");
//     // element.style.width = "30px";
//     // element.style.height = "30px";
//     // element.style.border = "1px solid black";
//     // The elements are in absolute position
//     element.style.position = "absolute";
//     element.style.top = `${y}px`;
//     element.style.left = `${x}px`;
//     // We want our cursor to be centered in the square
//     element.style.transform = "translate(-50%, -50%)";
//     // Get a color randomly
//     // element.style.backgroundColor =
//     //     COLORS[Math.floor(Math.random() * COLORS.length)];

//     const animation = element.animate(
//         [
//             {
//                 // Math.random() - 0.5 returns integer between -0.5 and 0.5
//                 transform: `translate(${(Math.random() - 0.5) * 500}px, ${(Math.random() - 0.5) * 500
//                     }px) rotate(${Math.random() * 520}deg)`,
//                 // We want to reduce the opacity until 0
//                 opacity: 0
//             }
//         ],
//         1500
//     );

//     // Remove the particle at the end of animation
//     animation.finished.then(() => element.remove());

//     document.body.appendChild(element);
// }

// document.addEventListener("click", (e) => {
//     // Get the position of the cursor in the document
//     const { clientX: x, clientY: y } = e;

//     // Create multiple particles
//     for (let i = 0; i < PARTICLES_NUMBER; i++) {
//         createParticle(x, y);
//     }
// });



// function pop(e) {
//     let amount = 30;
//     switch (e.target.dataset.type) {
       
        
//     }
//     // Quick check if user clicked the button using a keyboard
//     // if (e.clientX === 0 && e.clientY === 0) {
//     //     const bbox = e.target.getBoundingClientRect();
//     //     const x = bbox.left + bbox.width / 2;
//     //     const y = bbox.top + bbox.height / 2;
//     //     for (let i = 0; i < 30; i++) {
//     //         // We call the function createParticle 30 times
//     //         // We pass the coordinates of the button for x & y values
//     //         createParticle(x, y, e.target.dataset.type);
//     //     }
//     // } else {
//     //     for (let i = 0; i < amount; i++) {
//     //         createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
//     //     }
//     }

// function createParticle(x, y, type) {
//     const particle = document.createElement("particle");
//     particle.style.width = "30px";
//     particle.style.height = "30px";
//     particle.style.border = "1px solid black";
//     // The elements are in absolute position
//     particle.style.position = "absolute";
//     particle.style.top = `${y}px`;
//     particle.style.left = `${x}px`;
//     // We want our cursor to be centered in the square
//     particle.style.transform = "translate(-50%, -50%)";

//     switch (type) {
        
//         case 'mario':
//             particle.style.backgroundImage = 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/mario-face.png)';
//             break;
        
//     }

//     particle.style.width = `${width}px`;
//     particle.style.height = `${height}px`;
//     const animation = particle.animate([

//         {
//             // Math.random() - 0.5 returns integer between -0.5 and 0.5
//             transform: `translate(${(Math.random() - 0.5) * 500}px, ${(Math.random() - 0.5) * 500
//                 }px) rotate(${Math.random() * 520}deg)`,
//             // We want to reduce the opacity until 0
//             opacity: 0
//         }
//         // {
//         //     transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
//         //     opacity: 1
//         // },
//         // {
//         //     transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
//         //     opacity: 0
//         // }
//     ], 
//     1500
//     // {
//     //     duration: Math.random() * 1000 + 5000,
//     //     easing: 'cubic-bezier(0, .9, .57, 1)',
//     //     delay: delay
//     // }
//     );
//     animation.onfinish = removeParticle;
//     // Remove the particle at the end of animation
//     animation.finished.then(() => particle.remove());

//     document.body.appendChild(particle);
// }
// // function removeParticle(e) {
// //     e.srcElement.effect.target.remove();
// // }

// // if (document.body.animate) {
// //     document.querySelectorAll('div').forEach(button => button.addEventListener('click', pop));
// // }

// document.addEventListener("click", (e) => {
//     // Get the position of the cursor in the document
//     const { clientX: x, clientY: y } = e;

//     // Create multiple particles
//     for (let i = 0; i < PARTICLES_NUMBER; i++) {
//         createParticle(x, y, type);
//     }
// });
import { contactForm } from './contactUs.js'
const applicationHTML = `<div> ${contactForm()} </div>`
const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationHTML
