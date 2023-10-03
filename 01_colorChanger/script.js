let rect = document.getElementById('rectangle');

rect.addEventListener('mousemove', function (event) {
    let rectPostition = rect.getBoundingClientRect()
    let mousePosition = event.clientX;
    let mousePositionOnRectangle = mousePosition - rectPostition.left

    if (mousePositionOnRectangle < rectPostition.width / 2) {
        let redColor = gsap.utils.mapRange(0, rectPostition.width / 2, 255, 0, mousePositionOnRectangle);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        })
    } else {
        let blueColor = gsap.utils.mapRange(rectPostition.width / 2, rectPostition.width, 0, 255, mousePositionOnRectangle);
        console.log(blueColor);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4
        })
    }
})

rect.addEventListener('mouseleave', function () {
    rect.style.backgroundColor = 'white'
})