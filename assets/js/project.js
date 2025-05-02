document.addEventListener('DOMContentLoaded', () => {


    // new WOW().init();

    // const imgs = Array.from({ length: 16 }, (_, i) => `./assets/images/project/terra-pavilion/img${i + 1}.jfif`);
    // console.log(imgs)

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

    // const scrollContainer = document.querySelector('.horizontal_scroll_div');

    // if (scrollContainer) {
    //     scrollContainer.addEventListener('wheel', (e) => {
    //         if (e.deltaY !== 0) {
    //             e.preventDefault();
    //             scrollContainer.scrollLeft += e.deltaY;
    //         }
    //     }, { passive: false });

    //     let isDragging = false;
    //     let startX;
    //     let scrollLeft;

    //     scrollContainer.addEventListener('mousedown', (e) => {
    //         isDragging = true;
    //         scrollContainer.classList.add('dragging');
    //         startX = e.pageX - scrollContainer.offsetLeft;
    //         scrollLeft = scrollContainer.scrollLeft;
    //     });

    //     scrollContainer.addEventListener('mouseleave', () => {
    //         isDragging = false;
    //         scrollContainer.classList.remove('dragging');
    //     });

    //     scrollContainer.addEventListener('mouseup', () => {
    //         isDragging = false;
    //         scrollContainer.classList.remove('dragging');
    //     });

    //     scrollContainer.addEventListener('mousemove', (e) => {
    //         if (!isDragging) return;
    //         e.preventDefault();
    //         const x = e.pageX - scrollContainer.offsetLeft;
    //         const walk = (x - startX) * 2; // Adjust scroll speed
    //         scrollContainer.scrollLeft = scrollLeft - walk;
    //     });
    // }


    gsap.registerPlugin(ScrollTrigger, Draggable, ScrollToPlugin);

    const scroll_container = document.querySelector('.scroll_container');
    const horizontalDiv = document.querySelector('.horizontal_scroll_div');

    function getScrollValue() {
        let factor = 1;
        let scrollableWidth;

        if (window.outerWidth <= 1050) {
            scrollableWidth = horizontalDiv.scrollWidth * .99;
        } else if (window.outerWidth <= 1152) {
            scrollableWidth = horizontalDiv.scrollWidth * .98;
        } else if (window.outerWidth <= 1280) {
            scrollableWidth = horizontalDiv.scrollWidth * .97;
        } else if (window.outerWidth <= 1440) {
            scrollableWidth = horizontalDiv.scrollWidth * .96;
        } else if (window.outerWidth <= 1750) {
            scrollableWidth = horizontalDiv.scrollWidth * 0.93;
        } else if (window.outerWidth > 1750) {
            scrollableWidth = horizontalDiv.scrollWidth * 0.95;
        }

        return -(scrollableWidth + 50);
    }

    console.log(getScrollValue());
    console.log(horizontalDiv.scrollWidth);

    function getDraggValue() {
        let dragBound = getScrollValue() - 850;
        return -dragBound;
    }

    window.addEventListener('resize', () => {
        getScrollValue();
        getDraggValue();
        // console.log('hi')
        ScrollTrigger.refresh();
    })

    if (scroll_container) {
        ScrollTrigger.matchMedia({
            "(min-width: 992px)": function () {
                let scrollTween;

                // console.log(getScrollValue)

                // const dragSpeedMultiplier = 1;
                const draggable = Draggable.create(horizontalDiv, {
                    type: "x",
                    inertia: true,
                    maxDuration: 1,
                    overshootTolerance: 0,
                    edgeResistance: 0.5,
                    bounds: scroll_container,
                    onDrag: function () {
                        updateScrollTriggerProgress(this.x);
                    },
                    onThrowUpdate: function () {
                        updateScrollTriggerProgress(this.x);
                    }
                });

                scrollTween = gsap.to(scroll_container, {
                    // x: () => `-5%%`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: scroll_container,
                        pin: true,
                        start: 'top top',
                        end: () => `+=${getScrollValue() * -1}`,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        onUpdate: self => {
                            draggable[0].update(true);
                            gsap.set(horizontalDiv, {
                                x: -self.scroll()
                            });
                        }
                    }
                });

                console.log({
                    scrollValue: getScrollValue(),
                    dragBounds: getDraggValue(),
                    containerWidth: scroll_container.offsetWidth,
                    contentWidth: horizontalDiv.scrollWidth
                });

                function updateScrollTriggerProgress(xPosition) {
                    scrollTween.scrollTrigger.scroll(-xPosition);
                }

                ScrollTrigger.refresh();

                return () => {
                    scrollTween.kill();
                    ScrollTrigger.getAll().forEach(st => st.kill());
                    Draggable.get(horizontalDiv)?.kill();
                };
            }
        });
    }
});