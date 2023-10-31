(() => {


    //console.log("IIFE Fired");

    //MODEL

    //variables

    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    const infoBoxes = [{
      title: "Noise-cancelling speakers" ,
      text: "Great wireless earbuds are increasingly being made with active noise reduction as a meanly feature, it will generate can a more tranquil environment and makes your favorite music easier to listen.",
      image:"images/image1.jpg"
    }
    ,{
        title: "Rock and Roll All Night - Logo",
        text: "Rock Revolution Logo, after all you should show how passionate you are for you favorite music genre.",
        image:"images/image2.png"
    },{
      title: "The Most Comfortable Earbuds Base",
      text:"With Rock Revolution you have variety of options, with five different sets of ear tips in varying sizes so you can choose the one that fits better for you.",
      image:"images/image3.png"
    },{
      title: "The Best Sound",
      text: "It is like you are in a soundstage, Rock Revolution Earbuds includes features where you can adjust your sound levels.",
      image:"images/image4.jpg"
    }
  ]
  
    //functions
    function modelLoaded() {
      //console.log(hotspots);
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function loadInfo(){
  
      infoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index+1}`);
        // console.log(selected);
        const imageContent = document.createElement("img");
        const titleItem = document.createElement("h2");
        const textItem = document.createElement("p");
  
        imageContent.src = infoBox.image;
        titleItem.textContent = infoBox.title;
        textItem.textContent = infoBox.text;
  
        selected.appendChild(imageContent)
        selected.appendChild(titleItem);
        selected.appendChild(textItem);

        imageContent.classList.add("image-content");


      // Texcontent
      // Appendchild
  
      // console.log(infoBox.title);
      // console.log(infoBox.text);
    })
  }
  
    loadInfo();
  
  
    function showInfo() {
      //console.log(this.slot);
      //console.log(`#${this.slot}`);
      //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      //console.log(this.slot);
      //console.log(`#${this.slot}`);
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }


    //Event Listener
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });

    //Add animation to Text

    let tl = new TimelineMax();

      tl.staggerFromTo(
        "#title",
        1.2,
        { opacity: 0, x: 300, ease: Back.easeOut.config(5)},
        { opacity: 2, x: 0},
        1
      );



      //Scroll Menu - Main Nav

      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollToPlugin);

      const navLinks = document.querySelectorAll("#main-header nav ul li a");
      console.log(navLinks)

      function scrollLink(e) {    
        e.preventDefault(); 
        console.log(e.currentTarget.hash);
        let selectedLink = e.currentTarget.hash;
        gsap.to(window, {duration: 1, scrollTo:{y:`${selectedLink}`, offsetY:50 }});
      }

      navLinks.forEach((link) => {
        link.addEventListener("click", scrollLink);
      });


})();