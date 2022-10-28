/* Pumpkin Firework Mouse Click Starts HERE: */
const PARTICLES_NUMBER = 20;

function createParticle(x, y) {
    const element = document.createElement("div");
    element.style.width = "30px";
    element.style.height = "30px";
    // The elements are in absolute position
    element.style.position = "absolute";
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
    // We want our cursor to be centered in the square
    element.style.transform = "translate(-50%, -50%)";
    element.style.backgroundImage = 'url("https://icons.iconarchive.com/icons/hopstarter/halloween-avatar/1024/Jack-o-lantern-icon.png")'
    // COLORS[Math.floor(Math.random() * COLORS.length)];
    element.style.backgroundSize = "30px 30px"

    const animation = element.animate(
        [
            {
                // Math.random() - 0.5 returns integer between -0.5 and 0.5
                transform: `translate(${(Math.random() - 0.5) * 500}px, ${(Math.random() - 0.5) * 500
                    }px) rotate(${Math.random() * 520}deg)`,
                // We want to reduce the opacity until 0
                opacity: 0
            }
        ],
        1500
    );

    // Remove the particle at the end of animation
    animation.finished.then(() => element.remove());

    document.body.appendChild(element);
}

document.addEventListener("click", (e) => {
    // Get the position of the cursor in the document
    const { clientX: x, clientY: y } = e;

    // Create multiple particles
    for (let i = 0; i < PARTICLES_NUMBER; i++) {
        createParticle(x, y);
    }
});
/* Pumpkin Firework Mouse Click ENDS HERE: */
