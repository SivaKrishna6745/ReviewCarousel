let reviews = document.querySelectorAll(".review");

let count = 0;
let carPosition = 0;

reviews.forEach(review => {
    count = count + 1;
    let rev = "rev" +count;
    review.id = rev;
});

rev1.className += " active";

function handleCarousel(e) {
    let item = document.querySelector(".active");

    if(e.id === "left") {
        if(carPosition === 0) {
            carPosition = reviews.length - 1;
        } else {
            carPosition--;
        }

        item.classList.remove("active");
        item = reviews[carPosition];
        item.className += " active"
    } else if(e.id === "right") {
        if(carPosition === reviews.length - 1) {
            carPosition = 0;
        } else {
            carPosition++;
        }

        item.classList.remove("active");
        item = reviews[carPosition];
        item.className += " active"
    }
}