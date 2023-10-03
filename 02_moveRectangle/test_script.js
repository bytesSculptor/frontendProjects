let rect = document.getElementById('rectangle')
window.addEventListener('mousemove', function (e) {
    // console.log(e.clientX);
    let xvalue = gsap.utils.mapRange(
                    // 0, // jb mouse 0 pr ho tb {first} set ho jae
                    // window.innerWidth,  // jb mouse iss[end] position pr ho tb {second} set ho jae
                    // rect.getBoundingClientRect().width / 2, // first
                    // window.innerWidth - rect.getBoundingClientRect().width / 2, // second
                    // e.clientX
                    0, 
                    window.innerWidth, 
                    200 + rect.getBoundingClientRect().width / 2, 
                    window.innerWidth - (200 + rect.getBoundingClientRect().width / 2),  
                    e.clientX
                );
    gsap.to('#rectangle', {
        left: xvalue + 'px',
        // top: e.clientY + 'px',
        ease: Power4,
    })
})