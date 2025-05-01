document.addEventListener('DOMContentLoaded', ()=>{
    // new WOW().init();
    
    const imgs = [
        { src: './assets/images/project/terra-pavilion/img1.jfif' },
        { src: './assets/images/project/terra-pavilion/img2.jfif' },
        { src: './assets/images/project/terra-pavilion/img3.jfif' },
        { src: './assets/images/project/terra-pavilion/img4.jfif' },
        { src: './assets/images/project/terra-pavilion/img5.jfif' },
        { src: './assets/images/project/terra-pavilion/img6.jfif' },
        { src: './assets/images/project/terra-pavilion/img7.jfif' },
        { src: './assets/images/project/terra-pavilion/img8.jfif' },
        { src: './assets/images/project/terra-pavilion/img9.jfif' },
        { src: './assets/images/project/terra-pavilion/img10.jfif' },
        { src: './assets/images/project/terra-pavilion/img11.jfif' },
        { src: './assets/images/project/terra-pavilion/img12.jfif' },
        { src: './assets/images/project/terra-pavilion/img13.jfif' },
        { src: './assets/images/project/terra-pavilion/img14.jfif' },
        { src: './assets/images/project/terra-pavilion/img15.jfif' },
        { src: './assets/images/project/terra-pavilion/img16.jfif' },
    ];

    const scroll_img_container = document.querySelector('.scroll_img_container');

    if (scroll_img_container) {
        imgs.forEach(imgData => {
            const a = document.createElement('a');
            a.href = imgData.src;
            a.setAttribute('data-fancybox', 'gallery');

            const img = document.createElement('img');
            img.src = imgData.src;
            img.alt = 'Terra Pavilion Image';

            a.appendChild(img);
            scroll_img_container.appendChild(a);
        });
    }

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {
            type: "modern",
        },
    });

    gsap.registerPlugin(ScrollTrigger);

    const horizontal_div = document.querySelector('.horizontal_scroll_div');

    if (horizontal_div) {
        // gsap.to(horizontal_div, {
        //     x: '-90%',
        //     scrollTrigger: {
        //         trigger: 'section',
        //         pin: true,
        //         start: "top top",
        //         end: '+=10000',
        //         scrub: 1,
        //     }
        // });
        ScrollTrigger.matchMedia({
            ["(min-width: 992px)"]: function () {
                gsap.to(horizontal_div, {
                    x: '-92%',
                    scrollTrigger: {
                        trigger: 'section',
                        pin: true,
                        start: "top top",
                        end: '+=10000',
                        scrub: 1,
                    }
                });
            },
            // ["(min-width: 992px)"]: function () {
            //     gsap.to(horizontal_div, {
            //         x: '-100%',
            //         scrollTrigger: {
            //             trigger: 'section',
            //             pin: true,
            //             start: "top top",
            //             end: '+=10000',
            //             scrub: 1,
            //         }
            //     });
            // }
        });
    }
});