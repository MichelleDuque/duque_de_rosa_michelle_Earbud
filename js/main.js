(() => {


    //MODEL

    //variables

    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    const infoBoxes = [{
      title: "Noise-cancelling speakers" ,
      text: "Great wireless earbuds are increasingly being made with active noise reduction as a meanly feature, it will generate can a more tranquil environment and makes your favorite music easier to listen.",
      image:"images/image1_bg56am_c_scale,w_400.jpg",
      image_src_set: "images/image1_bg56am_c_scale,w_50.jpg 50w, images/image1_bg56am_c_scale,w_400.jpg 400w",
      image_size: "100vw",
      image_alt: "Women listening music with the earbuds"
    }
    ,{
        title: "Rock and Roll All Night - Logo",
        text: "Rock Revolution Logo, after all you should show how passionate you are for you favorite music genre.",
        image:"images/image2_zx9xqn_c_scale,w_400.png",
        image_src_set: "images/image2_zx9xqn_c_scale,w_50.png 50w, images/image2_zx9xqn_c_scale,w_307.png 307w, images/image2_zx9xqn_c_scale,w_400.png 400w",
        image_size: "100vw",
        image_alt: "Earbuds and case"
    },{
      title: "The Most Comfortable Earbuds Base",
      text:"With Rock Revolution you have variety of options, with five different sets of ear tips in varying sizes so you can choose the one that fits better for you.",
      image:"images/image3_cu3gbw_c_scale,w_400.png",
      image_src_set: "images/image3_cu3gbw_c_scale,w_50.png 50w, images/image3_cu3gbw_c_scale,w_309.png 309w, images/image3_cu3gbw_c_scale,w_400.png 400w",
      image_size: "100vw",
      image_alt: "Red Earbuds"
    },{
      title: "The Best Sound",
      text: "It is like you are in a soundstage, Rock Revolution Earbuds includes features where you can adjust your sound levels.",
      image:"images/image4_qwmri0_c_scale,w_400.jpg",
      image_src_set: "images/image4_qwmri0_c_scale,w_50.jpg 50w, images/image4_qwmri0_c_scale,w_400.jpg 400w",
      image_size: "100vw",
      image_alt: "People dancing"
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
        imageContent.sizes = infoBox.image_size;
        imageContent.srcset = infoBox.image_src_set;
        imageContent.alt = infoBox.image_alt;

        titleItem.textContent = infoBox.title;
        textItem.textContent = infoBox.text;
  
        selected.appendChild(imageContent)
        selected.appendChild(titleItem);
        selected.appendChild(textItem);

        imageContent.classList.add("image-content");
        titleItem.classList.add("hotspot-text")
        textItem.classList.add("hotspot-p")

    })
  }
  
    loadInfo();
  
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });

          gsap.fromTo('.hotspot-text', {
            y: 35,
            opacity: 0,
          },
          {
          delay: 0.5, 
          duration: 1, 
          y: 0,
          opacity: 1,
          ease: 'power2.easeOut',
          stagger: {
            from: 'start', 
            amount: 0.5, 
          },
        })

        gsap.fromTo('.hotspot-p', {
          y: 35,
          opacity: 0,
        },
        {
        delay: 0.5, 
        duration: 1, 
        y: 0,
        opacity: 1,
        ease: 'power2.easeOut',
        stagger: {
          from: 'start', 
          amount: 0.5, 
        },
      })

    }
  
    function hideInfo() {
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