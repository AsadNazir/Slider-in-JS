let count = 1;
let slides = 0;
let img = document.querySelectorAll(`.img`);
let bright = document.querySelector(`.right`)
let bleft = document.querySelector(`.left`);
let ul = document.querySelector(`.dot_cont`);

//---------------------------------------
img.forEach(function(ele, index) {
    slides++;
})
for (let i = 0; i < slides; i++) {

    ul.innerHTML += `<li class="dots"></li>`;

}
//---------------------------------------
let dots = document.querySelectorAll(`.dots`);



//Dots Functionality over here
dots.forEach(function(ele, index) {

        ele.addEventListener("click", function() {

            count = index + 1;
            showSlides();
        })
    })
    //Showslides function
function showSlides() {
    if (count > img.length) {
        count = 1;
    }
    if (count < 1) {
        count = img.length;
    }

    for (let i = 0; i < slides; i++) {
        img[i].style.opacity = `0`;
        dots[i].style.backgroundColor = `transparent`;
        dots[i].style.transform = `scale(0.9)`;

    }
    img[count - 1].style.opacity = `1`;
    dots[count - 1].style.backgroundColor = `white`;
    dots[count - 1].style.transform = `scale(1.2)`;


}
showSlides();
//Right Button
bright.addEventListener('click', function() {
        count++;
        showSlides()
    })
    //Left Button
bleft.addEventListener('click', function() {

    count--;
    showSlides();
})