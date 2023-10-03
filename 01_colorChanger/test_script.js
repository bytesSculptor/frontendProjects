let rect = document.getElementById('rectangle');
// rect.style.backgroundColor = 'red'

rect.addEventListener('mousemove', function(event){
    // console.log('on rect');
    let rectPostition = rect.getBoundingClientRect()
    // console.log(rectPostition);
    let mousePosition = event.clientX;
    // console.log(mousePosition);
    let mousePositionOnRectangle = mousePosition - rectPostition.left
    // console.log(mousePositionOnRectangle);

    //maps 0 in the -10 to 10 range to the same position in the 100 to 200 range
    // let value = gsap.utils.mapRange(0, rectPostition.width / 2, 255, 0, mousePositionOnRectangle); // 150
    // console.log(value);

    if (mousePositionOnRectangle < rectPostition.width / 2) {
        // console.log('left', mousePositionOnRectangle);
        // let bgLeftColor = `rgb(${mousePositionOnRectangle}, 0, 0)`
        // console.log(bgLeftColor);
        // rect.style.backgroundColor = bgLeftColor

        // gsap code
        let redColor = gsap.utils.mapRange(0, rectPostition.width / 2, 255, 0, mousePositionOnRectangle);
        // console.log(redColor);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        })
    } else {
        // console.log('right', mousePositionOnRectangle);
        // let bgRightColor = `rgb(0, 0, ${mousePositionOnRectangle})`
        // console.log(bgRightColor);
        // rect.style.backgroundColor = bgRightColor

        let blueColor = gsap.utils.mapRange(rectPostition.width / 2, rectPostition.width, 0, 255, mousePositionOnRectangle);
        console.log(blueColor);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4
        })
    }
})

rect.addEventListener('mouseleave', function () {
    rect.style.backgroundColor = '#212121'
})