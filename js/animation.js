(() => {

//ANIMATION

const canvas = document.querySelector("#explode-view");
const context = canvas.getContext("2d")
canvas.width = 1920;
canvas.height = 1080;
const frameCount = 569; // how many still frames do we have?
const images = [] //array to hold al of our images

//object literalm that has a property of frame to hold the current frame
const buds = {
    frame: 0
}

//run a for loop to populate our images array
for(let i=0; i<frameCount; i++){
    // console.log(i);
    const img = new Image(); // create image element is the same as document.createElement
    //string I am trying to create: images/explode_0013.wepb
    img.src = `animation/animation_${(i+1).toString().padStart(5, "0")}.jpg`; 
    images.push(img); //create array and put the elements of images on it
}


// console.table(images); //creates table with array elements

//we are not actually animating a DOM element, but rather an object which contains a frame count, as the user scrolls we increase the
//value by 1. We tell Greensock there is a total of 449 frames to cycle though , so it knows when to stop. Greensock scrolling uses decimlas, so we use "snap" to give us a whole numbers 1 vs 0.00085
gsap.to(buds, {
    frame:568,
    snap: "frame", //mait a whole number
    scrollTrigger: {
        trigger: "#explode-view",
        pin: true, //make it stop till the animation is done
        scrub: 1, //delay
        // markers: true, //to visualize the markers
        start: "top top"
    },

    onUpdate: render
})

images[0].addEventListener("onload", render); //Render the first image of the array, image default


function render() {
    // console.log(buds.frame);
    // console.log(images[buds.frame]);
    context.clearRect(0,0, canvas.width, canvas.height);
    context.drawImage(images[buds.frame], 0, 0);
}

})();