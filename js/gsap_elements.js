(() => {
    //ANIMATE THE HERO BOX 

    gsap.fromTo('#heading-text', {
        y: 35,
        opacity: 0,
      },
      {
      delay: 1, 
      duration: 1, 
      y: 0,
      opacity: 1,
      ease: 'power2.easeOut',
      stagger: {
        from: 'start', 
        amount: 0.5, 
      },
    })

    gsap.fromTo('#earbuds-image-hero', {
        y: 35,
        opacity: 0,
      },
      {
      delay: 1, 
      duration: 1, 
      y: 0,
      opacity: 1,
      ease: 'power2.easeOut',
      stagger: {
        from: 'start', 
        amount: 0.5, 
      },
    })

    //ANIMATE INFO

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    gsap.timeline({
        scrollTrigger: {
          trigger:"#info-box-main",
          start: "center bottom",
        end: "center center", 
        //   top: "bottom top", 
          // markers: true,
          scrub: true,
        }
      })


      .from("#info-box-title", { x : innerWidth * -1 })
      .from(".info-box-divided", { x : innerWidth * 1 })
      
        gsap.timeline({
        scrollTrigger: {
          trigger:"#phrase-box",
          start: "center bottom", //Animation start at this point
          top: "center center", //Animation end at this point
          // markers: true,
          scrub: true,
        //   pin: true
        }
      })

      .from("#phrase-box", {
        duration: 1,
        scaleX: 0,
        transformOrigin: "left",
        ease: "expo.inOut"
      })

      .from(
        "#phrase-box",
        {
          duration: 2,
          transformOrigin: "right",
          ease: "none",
          css: { color: "black" }
        },
        "-=2"
      );


      // .from("#phrase-box", { opacity: 0 })



      // .from("#text-phrase-box", { y : innerHeight * 1 })
    
      

   
  
})();