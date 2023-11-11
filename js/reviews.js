(() => {

    //Variables

    const imageReview = document.querySelector("#image-review");
    const textClient = document.querySelector("#review-text-box");
    const previous = document.querySelector("#previous");
    const next = document.querySelector("#next");
    let count = 0


    //Array

    const reviews = [
        {
        name: "Michael Smith",
        image: "images/review_image_sop0et_c_scale,w_452.png",
        image_src_set: "images/review_image_sop0et_c_scale,w_200.png 200w, images/review_image_sop0et_c_scale,w_452.png 452w",
        image_size: "100vw",
        image_alt: "Client called Michael Smith",
        reviews_text: '"These earbuds are great in every way. Excellent for cancelling out sounds. Additonally, it has some cool tools so we can customize every instrument. Plus they are cheap compared to other brands that have poorer audio quality."',
        },
        {
            name: "Daniela Garcia",
            image: "images/review_image3_pmac2d_c_scale,w_452.png",
            image_src_set: "images/review_image3_pmac2d_c_scale,w_200.png 200w, images/review_image3_pmac2d_c_scale,w_452.png 452w",
            image_size: "100vw",
            image_alt: "Client called Daniela Garcia",
            reviews_text: '"The best part is the app you can use with this earbuds, After giving you a hearing test to gauge your baseline reaction, it presents you with a number of A-B comparisons of different musical selections and asks you to select your favourite as it modifies the response curve. Amazing."',
        },
        {
            name: "Eric Levitan",
            image: "images/review_image2_juw8bb_c_scale,w_452.png",
            image_src_set: "images/review_image2_juw8bb_c_scale,w_200.png 200w, images/review_image2_juw8bb_c_scale,w_452.png 452w",
            image_size: "100vw",
            image_alt: "Client called Eric Levitan",
            reviews_text: '"I have bought a few sets of inexpensive and somewhat priced earbuds these last years, but not of them could fulfill my expectations until finally I found Rock Revolution. They felt safe and comfortable in my ears when I first put them in, and the noise cancellation is great."',
        }
    ]


    //Functions

    function displayReviews(){

        const imageClient = document.createElement("img");     
        const name_client = document.createElement("h3");
        const paragraphReview = document.createElement("p");
    
        imageClient.src = `${reviews[count].image}`;
        imageClient.srcset = `${reviews[count].image_src_set}`;
        imageClient.sizes = `${reviews[count].image_size}`;
        imageClient.alt = `${reviews[count].image_alt}`;
        name_client.textContent = `${reviews[count].name}`;
        paragraphReview.textContent = `${reviews[count].reviews_text}`;

        imageReview.innerHTML = "";
        textClient.innerHTML = "";

        imageReview.appendChild(imageClient)
        textClient.appendChild(name_client);
        textClient.appendChild(paragraphReview);

    }

    displayReviews();

    function nextReview(){
        count++;
        if (count >=reviews.length){
            count = 0;
        }

        displayReviews();
    }


    function previousReview(){
        count--;
        if(count < 0){
            count = reviews.length-1;
        }

        displayReviews();
    }


    //Events Listeners

    next.addEventListener("click", nextReview);
    previous.addEventListener("click", previousReview);

})();