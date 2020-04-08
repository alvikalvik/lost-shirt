(function() {
    let index = 0;
    const slides = document.querySelectorAll('.fade-slider__item');
    const activeClass = 'fade-slider__item--visible';
    
    console.log(slides[1]);

    setInterval(function() {
        slides[index].classList.remove(activeClass);
        index = (index+1)%slides.length;
        slides[index].classList.add(activeClass);        
    }, 5000);

}());