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
        reviews_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            name: "Daniela Garcia",
            image: "images/review_image3_pmac2d_c_scale,w_452.png",
            image_src_set: "images/review_image3_pmac2d_c_scale,w_200.png 200w, images/review_image3_pmac2d_c_scale,w_452.png 452w",
            image_size: "100vw",
            image_alt: "Client called Daniela Garcia",
            reviews_text: "Daniela Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            name: "Eric Levitan",
            image: "images/review_image2_juw8bb_c_scale,w_452.png",
            image_src_set: "images/review_image2_juw8bb_c_scale,w_200.png 200w, images/review_image2_juw8bb_c_scale,w_452.png 452w",
            image_size: "100vw",
            image_alt: "Client called Eric Levitan",
            reviews_text: "Eric Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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