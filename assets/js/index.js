document.addEventListener('DOMContentLoaded', () => {
    // setTimeout(()=>{
    //     new WOW().init();
    // }, 4000)
    new WOW().init();

    // const loading_div = document.querySelector('.loading_div');
    // setTimeout(()=>{
    //     if(loading_div){
    //         console.log('first')
    //         loading_div.classList.add('.no_load')
    //     }
    // }, 10000);

    // const lenis = new Lenis({
    //     duration: 1.2,
    //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    // });

    // const imgs = [
    //     { src: './assets/images/project/terra-pavilion/img1.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img2.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img3.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img4.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img5.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img6.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img7.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img8.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img9.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img10.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img11.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img12.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img13.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img14.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img15.jfif' },
    //     { src: './assets/images/project/terra-pavilion/img16.jfif' },
    // ]

    const burger = document.querySelector(".burger");
    const header = document.querySelector('header');
    const overlay = document.querySelector('.sidepanel_overlay');

    if (header.classList.contains("nav-open")) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    let toggleMenu = () => {
        header.classList.toggle("nav-open");
        if (header.classList.contains("nav-open")) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }

    let closeMenu = () => {
        header.classList.remove("nav-open");
        document.body.style.overflow = 'unset';
    }

    document.addEventListener('keydown', (e) => {
        if (e.code.toLocaleLowerCase() == 'escape') {
            closeMenu();
        }
    })

    document.querySelector('.navbar .logo').addEventListener('click', () => {
        closeMenu();
    })
    burger.addEventListener("click", function () {
        toggleMenu();
    });

    overlay.addEventListener('click', () => {
        closeMenu();
    });

    // const scroll_img_container = document.querySelector('.scroll_img_container');

    // if (scroll_img_container) {
    //     imgs.forEach(imgData => {
    //         const a = document.createElement('a');
    //         a.href = imgData.src;
    //         a.setAttribute('data-fancybox', 'gallery');

    //         const img = document.createElement('img');
    //         img.src = imgData.src;
    //         img.alt = 'Terra Pavilion Image';

    //         a.appendChild(img);
    //         scroll_img_container.appendChild(a);
    //     });
    // }

    // Fancybox.bind('[data-fancybox="gallery"]', {
    //     Thumbs: {
    //         type: "modern",
    //     },
    // });

    // gsap.registerPlugin(ScrollTrigger);

    // const horizontal_div = document.querySelector('.horizontal_scroll_div');

    // if (horizontal_div) {
    //     // gsap.to(horizontal_div, {
    //     //     x: '-90%',
    //     //     scrollTrigger: {
    //     //         trigger: 'section',
    //     //         pin: true,
    //     //         start: "top top",
    //     //         end: '+=10000',
    //     //         scrub: 1,
    //     //     }
    //     // });
    //     ScrollTrigger.matchMedia({
    //         ["(min-width: 992px)"]: function () {
    //             gsap.to(horizontal_div, {
    //                 x: '-95%',
    //                 scrollTrigger: {
    //                     trigger: 'section',
    //                     pin: true,
    //                     start: "top top",
    //                     end: '+=10000',
    //                     scrub: 1,
    //                 }
    //             });
    //         },
    //         // ["(min-width: 992px)"]: function () {
    //         //     gsap.to(horizontal_div, {
    //         //         x: '-100%',
    //         //         scrollTrigger: {
    //         //             trigger: 'section',
    //         //             pin: true,
    //         //             start: "top top",
    //         //             end: '+=10000',
    //         //             scrub: 1,
    //         //         }
    //         //     });
    //         // }
    //     });
    // }
});