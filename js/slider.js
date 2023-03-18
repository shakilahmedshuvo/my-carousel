const images = [
    'images/pic-1.jpg',  //0 
    'images/pic-2.jpg',  //1
    'images/pic-3.jpg',  //2
    'images/pic-4.jpg',  //3
    'images/pic-5.jpg',  //4
    'images/pic-6.jpg',  //5
    'images/pic-7.jpg',  //6
    'images/pic-8.jpg',  //7
    'images/pic-9.jpg',  //8
]
let imgIndex = 0;
const imgEl = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgIndex, imgUrl);
    imgEl.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000)