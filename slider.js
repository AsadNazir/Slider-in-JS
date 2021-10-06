let count = 1;
let img = document.querySelectorAll(`.img`);
let bright = document.querySelector(`.right`)
let bleft = document.querySelector(`.left`);
let no = document.querySelector(`.span`);
//let count = 1;
function showSlides() {
    if (count > img.length) {
        count = 1;
    }
    if (count < 1) {
        count = img.length;
    }
    img.forEach(function(ele, index) {
        ele.style.opacity = `0`;
        console.log(index);
    });
    img[count - 1].style.opacity = `1`;
    console.log(count);
    no.innerHTML = `${count}/3`;
}
showSlides();
bright.addEventListener('click', function() {
    count++;
    showSlides()
})

bleft.addEventListener('click', function() {
    //checker()
    count--;
    showSlides();
})