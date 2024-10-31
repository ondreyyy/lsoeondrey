document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".content-wrapper", { duration: 2, opacity: 0, scale: 0.9 });
    gsap.from(".intro h1", { duration: 1.5, y: -50, opacity: 0 });
    gsap.from(".intro p", { duration: 1.5, y: 50, opacity: 0, delay: 0.3 });
    gsap.from(".mission", { duration: 1.5, opacity: 0, scale: 0.9, delay: 0.6 });
    gsap.from(".details", { duration: 1.5, opacity: 0, y: 50, delay: 0.9 });
    gsap.from(".future", { duration: 1.5, opacity: 0, y: 50, delay: 1.2 });
    gsap.from(".planet", { duration: 1.5, opacity: 0, y: 50, delay: 1.5 });
    
    const launchButton = document.getElementById("launchButton");
    launchButton.addEventListener("click", () => {
        gsap.to("body", { duration: 2, backgroundColor: "#000" });
        gsap.to(".content-wrapper", { duration: 1.5, opacity: 0, y: -50 });
    });
});
