(() => {

//ANIMATION

const canvas = document.querySelector("#explode-view");
const context = canvas.getContext("2d")
canvas.width = 1920;
canvas.height = 1080;
const frameCount = 569; 
const images = [];

const buds = {
    frame: 0
}

//run a for loop to populate our images array
for(let i=0; i<frameCount; i++){
    const img = new Image(); 
    img.src = `animation/animation_${(i+1).toString().padStart(5, "0")}.jpg`; 
    images.push(img);
}



gsap.to(buds, {
    frame:568,
    snap: "frame", 
    scrollTrigger: {
        trigger: "#explode-view",
        pin: true, 
        scrub: 1, 
        // markers: true, 
        start: "top top"
    },

    onUpdate: render
})

images[0].addEventListener("onload", render); 


function render() {
    context.clearRect(0,0, canvas.width, canvas.height);
    context.drawImage(images[buds.frame], 0, 0);
}

})();