function changeSlide(direction) {
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleAutoplaying'));
    if (direction === 'prev') {
        carousel.prev();
    } else if (direction === 'next') {
        carousel.next();
    }
}

const area1 = document.querySelector('.area-1');
const area2 = document.querySelector('.area-2');

area1.addEventListener('mouseenter', () => {
    document.body.style.cursor = 'pointer';
});

area1.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'default';
});

area2.addEventListener('mouseenter', () => {
    document.body.style.cursor = 'crosshair';
});

area2.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'default';
});
