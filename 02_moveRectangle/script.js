let rect = document.getElementById('rectangle')
window.addEventListener('mousemove', function (e) {
    let xvalue = gsap.utils.mapRange(
                    0, 
                    window.innerWidth, 
                    200 + rect.getBoundingClientRect().width / 2, 
                    window.innerWidth - (200 + rect.getBoundingClientRect().width / 2),  
                    e.clientX
                );
    gsap.to('#rectangle', {
        left: xvalue + 'px',
        ease: Power4,
    })
})