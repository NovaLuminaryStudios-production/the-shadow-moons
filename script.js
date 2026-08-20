const stars = document.getElementById("stars");
const particles = document.getElementById("particles");

/* Stars */
if (stars) {
    for (let i = 0; i < 180; i++) {
        const star = document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDuration =
            (3 + Math.random() * 7) + "s";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        stars.appendChild(star);
    }
}

/* Purple particles */
if (particles) {
    for (let i = 0; i < 35; i++) {
        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (8 + Math.random() * 12) + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particles.appendChild(particle);
    }
}
