const mouseFollower = document.querySelector(".mouse-follower");
const splitTextRating = document.querySelector(".split-text");
const googleBall = document.querySelector(".google-ball");
const glowImg = document.querySelector(".glow-img");
const fdContainers = document.querySelectorAll(".fd-container");
const fdContainersFast = document.querySelectorAll(".fd-container-fast");
const studentSectionTitle = document.querySelector(".student-section-title");
const imageOpener = document.querySelector("#image-opener");
const menuBtn = document.querySelector(".menu-btn");
const menuLines = document.querySelectorAll(".menu-line");
const loginDropDown = document.querySelector("#loginDropdown");
const loginDropDownMenu = document.querySelector(".login-dropdown-menu");
const recommendationsDropDown = document.querySelector("#recommendationsDropdown");
const recommendationsDropDownMenu = document.querySelector(".recommendations-dropdown-menu");
const dropDownToggle = document.querySelectorAll(".dropdown-toggle");
const mobileDropdownItemContainer = document.querySelector(".mobile-dropdown-item-container");
const closeMobileDropDownMenu = document.querySelector(".close-dropDown-menu-btn");
const mobileNavItems = document.querySelectorAll(".mobile-nav-item");
const dropDownItems = document.querySelectorAll(".dropdown-item");
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
gsap.registerPlugin(CustomEase, ScrollTrigger);
const observer = lozad(".lozad", {
    rootMargin: "10px 0px",
    threshold: 0.1
});
observer.observe();
document.addEventListener("DOMContentLoaded", () => observer.observe());
function splitText(className) {
    document.querySelectorAll(`.${className}`).forEach(element => {
        const text = element.textContent.trim();
        const splitContent = text.split("").map(char => char === " " ? "&nbsp;" : `<span class="inline-block">${char}</span>`).join("");
        element.innerHTML = splitContent
    }
    )
}
function disableScroll() {
    lenis.stop();
    document.querySelector("#main").classList.add("disable-scroll")
}
function enableScroll() {
    lenis.start();
    document.querySelector("#main").classList.remove("disable-scroll")
}
let isShowing = !1;
menuBtn.addEventListener("click", () => {
    isShowing = !isShowing;
    gsap.to(".mobile-menu", {
        x: `${isShowing ? "0%" : "100%"}`,
        duration: 0.3
    });
    menuLines.forEach((line, index) => {
        gsap.to(line, {
            y: isShowing ? `${index === 0 ? "200%" : "-200%"}` : "0%",
            rotate: isShowing ? `${index === 0 ? "45deg" : "-45deg"}` : "0deg",
            transformOrigin: "center",
            duration: 0.3,
        })
    }
    );
    gsap.to(".menu-btn", {
        borderColor: isShowing ? "black" : "white",
        duration: 0.3
    })
}
);
const toggleDropdown = (dropdown, dropdownMenu) => {
    dropdown.addEventListener("mouseenter", () => {
        gsap.to(dropdownMenu, {
            height: "auto",
            duration: 0.3
        })
    }
    );
    dropdown.addEventListener("mouseleave", () => {
        gsap.to(dropdownMenu, {
            height: "0vw",
            duration: 0.3
        })
    }
    )
}
    ;
if (window.innerWidth >= 768) {
    toggleDropdown(loginDropDown, loginDropDownMenu);
    toggleDropdown(recommendationsDropDown, recommendationsDropDownMenu)
}
dropDownToggle.forEach((element) => {
    element.addEventListener("click", () => {
        const content = element.textContent === "Recommendations" ? `<li><a class="dropdown-item whitespace-nowrap flex items-center" href="https://guitarkaksha.com/recommendations.html">Guitar<i class="ri-arrow-right-s-line text-[#f1ab27] text-[10vw]"></i></a></li>
         <li><a class="dropdown-item whitespace-nowrap flex items-center" href="https://guitarkaksha.com/recommendations.html#guitarStrings">Guitar Strings<i class="ri-arrow-right-s-line text-[#f1ab27] text-[10vw]"></i></a></li>
         <li><a class="dropdown-item whitespace-nowrap flex items-center" href="https://guitarkaksha.com/recommendations.html#otherAccessories">Accessories<i class="ri-arrow-right-s-line text-[#f1ab27] text-[10vw]"></i></a></li>` : `<li><a class="dropdown-item text-[6vw] whitespace-nowrap flex items-center" href="https://guitarkaksha.com/dashboard/login.php">One To One<i class="ri-arrow-right-s-line text-[#f1ab27] text-[10vw]"></i></a></li>
         <li><a class="dropdown-item whitespace-nowrap flex items-center" href="https://web.classplusapp.com/login">Group Classes<i class="ri-arrow-right-s-line text-[#f1ab27] text-[10vw]"></i></a></li>`;
        mobileDropdownItemContainer.innerHTML = content;
        gsap.to("#mobile-dropdown-menu-card", {
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut"
        })
    }
    )
}
);
closeMobileDropDownMenu.addEventListener("click", () => {
    gsap.to("#mobile-dropdown-menu-card", {
        scale: 0,
        duration: 0.3,
        ease: "power2.inOut"
    })
}
);
mobileNavItems.forEach((item) => {
    item.addEventListener("click", () => {
        mobileNavItems.forEach((navItem) => {
            navItem.querySelectorAll("span").forEach((span) => gsap.to(span, {
                opacity: 0,
                duration: 0.2
            }))
        }
        );
        item.querySelectorAll("span").forEach((span) => gsap.to(span, {
            opacity: 1,
            duration: 0.2
        }))
    }
    )
}
);
dropDownItems.forEach((dropDownItem) => {
    dropDownItem.addEventListener("mouseenter", () => {
        dropDownItem.querySelectorAll("span").forEach((span) => gsap.to(span, {
            opacity: 1,
            duration: 0.2
        }))
    }
    );
    dropDownItem.addEventListener("mouseleave", () => {
        dropDownItem.querySelectorAll("span").forEach((span) => gsap.to(span, {
            opacity: 0,
            duration: 0.2
        }))
    }
    )
}
);
fdContainers.forEach((fdContainer) => {
    const animateText = (direction) => {
        gsap.to(fdContainer.querySelectorAll(".fd-btn span"), {
            y: direction,
            stagger: 0.03,
            duration: 0.3,
        });
        gsap.to(fdContainer.querySelectorAll(".fd-btn-2 span"), {
            y: direction,
            stagger: 0.03,
            duration: 0.3,
        })
    }
        ;
    fdContainer.addEventListener("mouseenter", () => animateText(window.innerWidth < 768 ? "-100%" : "-120%"));
    fdContainer.addEventListener("mouseleave", () => animateText("0%"))
}
);
splitText("fd-btn");
splitText("fd-btn-2");
const specializationCardsData = [{
    url: "./assets/alarm.png",
    title: "Flexible Scheduling",
    description: "You can learn guitar online in the morning, afternoon, or evening—all up to you! Learn guitar online at your own pace. No pressure at all!",
}, {
    url: "./assets/OneonOne.png",
    title: "Interactive Sessions",
    description: "Engaging and interactive online guitar classes that make learning guitar fun",
}, {
    url: "./assets/settings.png",
    title: "Tailored Courses",
    description: "We listen to your needs. Tell us what you want to accomplish and we’ll work with you to achieve this through customized online guitar lessons.",
}, {
    url: "./assets/customise.png",
    title: "Curated Song Choices",
    description: "Select your favorite songs to learn, whether you’re into pop, classical, or alternative music.",
},];
const specializationCards = document.querySelector(".specialization-cards");
specializationCardsData.forEach((card, index) => {
    specializationCards.innerHTML += `
                <div class="magnet-effect shrink-0 mt-[-8vw] md:mt-0 flex justify-center items-center w-full md:w-auto">
                  <div class="flex items-center justify-center bg-[#03071e] sc-item h-[85vw] md:h-[22vw] w-[85vw] md:w-[22vw] p-[10vw] rounded-full flex flex-col md:p-[3vw] shadow-md overflow-hidden border-[0.2vw] border-white border-dashed">
                        <div class="pointer-events-none w-full overflow-hidden h-[10vw] md:h-[3vw] flex flex-col items-center justify-start">
                          <div class="sc-icon shrink-0 w-[10vw] md:w-[3vw] flex items-center justify-center">
                            <img src="${card.url}" alt="Interactive Sessions"
                              class="w-full h-full md:w-full md:h-full mx-auto lozad">
                          </div>

                          <div class="sc-icon shrink-0 w-[10vw] md:w-[3vw] flex items-center justify-center">
                            <img src="${card.url}" alt="Interactive Sessions"
                              class="w-full h-full md:w-full md:h-full mx-auto lozard">
                          </div>
                        </div>

                        <h3 class="pointer-events-none text-[6vw] leading-none md:text-[1.6vw] font-medium mt-[6vw] md:mt-[1vw] text-center">${card.title}</h3>
                        <p class="pointer-events-none text-[4vw] md:text-[1vw] text-center mt-[4vw] md:mt-[1vw]">${card.description}</p>
                  </div>
                </div>
  `
}
);
const scItems = document.querySelectorAll(".sc-item");
scItems.forEach((scItem, index) => {
    scItem.addEventListener("mouseenter", (e) => {
        gsap.to(scItem.querySelectorAll(".sc-icon"), {
            y: "-100%",
            duration: 0.5,
            ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
        })
    }
    );
    scItem.addEventListener("mouseleave", (e) => {
        gsap.to(scItem.querySelectorAll(".sc-icon"), {
            y: "0%",
            duration: 0.5,
            ease: "power2.inOut",
        })
    }
    )
}
);
gsap.from(".sc-item", {
    y: "100%",
    opacity: 0,
    stagger: 0.05,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".specialization-cards",
        start: "top 90%",
        end: "top 30%",
        toggleActions: "play none none reset",
    },
});
const instructorShowcase = document.querySelector("#instructor-showcase");
const instructorShowcaseItems = document.querySelectorAll(".i-showcase-item");
instructorShowcaseItems.forEach((element, index) => {
    gsap.from(element, {
        x: `${index == 0 ? "-50%" : "50%"}`,
        opacity: "0",
        scrollTrigger: {
            trigger: ".instructor-showcase-container",
            start: "top 90%",
            end: "top 35%",
            toggleActions: "restart none none reset",
        },
    })
}
);
let videoCarouselContainer = document.querySelector(".video-carousel-container");
const videoCarouselItems = document.querySelectorAll(".video-carousel-item");
const carouselLeftBtn = document.querySelector(".carousel-prev");
const carouselRightBtn = document.querySelector(".carousel-next");
carouselRightBtn.addEventListener("click", () => {
    gsap.to(".video-carousel-item", {
        scale: "0.8",
        duration: "0.3",
        onComplete: () => {
            if (window.innerWidth < 765) {
                videoCarouselContainer.scrollBy({
                    left: videoCarouselContainer.offsetWidth * 1.02,
                    behavior: "smooth",
                })
            } else {
                videoCarouselContainer.scrollBy({
                    left: videoCarouselContainer.offsetWidth * 0.7,
                    behavior: "smooth",
                })
            }
            gsap.to(".video-carousel-item", {
                scale: "1",
                delay: "0.5"
            })
        }
        ,
    })
}
);
carouselLeftBtn.addEventListener("click", () => {
    gsap.to(".video-carousel-item", {
        scale: "0.8",
        duration: "0.3",
        onComplete: () => {
            if (window.innerWidth < 765) {
                videoCarouselContainer.scrollBy({
                    left: -videoCarouselContainer.offsetWidth * 1.02,
                    behavior: "smooth",
                })
            } else {
                videoCarouselContainer.scrollBy({
                    left: -videoCarouselContainer.offsetWidth * 0.7,
                    behavior: "smooth",
                })
            }
            gsap.to(".video-carousel-item", {
                scale: "1",
                delay: "0.5"
            })
        }
        ,
    })
}
);
const courseCatBtns = document.querySelectorAll(".course-cat-btn");
const courseCatItems = document.querySelectorAll(".course-cat-item");
const sliderBtn = document.querySelector(".slider-btn");
const moreDetailBtns = document.querySelectorAll(".more-detail-btn");
const moreDetailSheets = document.querySelectorAll(".more-detail-sheet");
const moreCurriculumBtns = document.querySelectorAll(".more-curriculum-btn");
const curriculums = document.querySelectorAll(".curriculum");
const moreCurriculumBtns2 = document.querySelectorAll(".more-curriculum-btn2");
const curriculums2 = document.querySelectorAll(".curriculum2");
function removeExtraSpace(sentence) {
    return sentence.trim().replace(/\s+/g, " ")
}
moreCurriculumBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btn.textContent = removeExtraSpace(btn.textContent);
        gsap.to(curriculums[index], {
            height: `${removeExtraSpace(btn.textContent) === "Show More" ? "auto" : window.innerWidth < 768 ? "13vh" : "10vw"}`,
        });
        btn.textContent === "Show More" ? (btn.textContent = "Show Less") : (btn.textContent = "Show More")
    }
    )
}
);
moreCurriculumBtns2.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btn.textContent = removeExtraSpace(btn.textContent);
        gsap.to(curriculums2[index], {
            height: `${btn.textContent === "Show More" ? "auto" : window.innerWidth < 768 ? "17vh" : "15vw"}`,
        });
        btn.textContent === "Show More" ? (btn.innerHTML = "Show Less") : (btn.innerHTML = "Show More")
    }
    )
}
);
courseCatBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        gsap.to(".curriculum", {
            height: `${window.innerWidth < 768 ? "13vh" : "10vw"}`,
        });
        gsap.to(".curriculum2", {
            height: `${window.innerWidth < 768 ? "17vh" : "15vw"}`,
        });
        moreCurriculumBtns.forEach((btn) => {
            if (btn.textContent != "Show More") {
                btn.innerHTML = "Show More"
            }
        }
        );
        moreCurriculumBtns2.forEach((btn) => {
            if (btn.textContent != "Show More") {
                btn.innerHTML = "Show More"
            }
        }
        );
        courseCatItems.forEach((item) => {
            gsap.to(item, {
                x: `${index === 1 ? "-100%" : "0%"}`,
                duration: 0.5,
                ease: "power2.out",
            });
            gsap.to(sliderBtn, {
                x: `${index === 1 ? "100%" : "0%"}`,
                duration: 0.5,
                ease: "power2.out",
            })
        }
        );
        courseCatBtns.forEach((element) => {
            gsap.to(element, {
                color: "#000000"
            })
        }
        )
    }
    )
}
);
moreDetailBtns.forEach((btn, index) => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(moreDetailSheets[index], {
            y: 0,
            scale: `${window.innerWidth >= 768 ? 10 : 20}`,
            duration: 0.5,
        })
    }
    )
}
);
moreDetailBtns.forEach((btn, index) => {
    btn.addEventListener("mouseleave", () => {
        gsap.to(moreDetailSheets[index], {
            y: "-100%",
            scale: 1,
            duration: 0.5
        })
    }
    )
}
);
function playVideo(iframe) {
    if (iframe) {
        const src = iframe.src;
        iframe.src = src.replace("autoplay=0", "autoplay=1")
    }
}
function pauseVideo(iframe) {
    if (iframe) {
        const src = iframe.src;
        iframe.src = src.replace("autoplay=1", "autoplay=0")
    }
}
gsap.to(".student-section-title span", {
    width: `auto`,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".student-section-title",
        start: "top 70%",
        end: "top 40%",
    },
});
document.querySelectorAll(".video-container").forEach((container) => {
    let iframe;
    let isPlaying = !1;
    container.addEventListener("click", () => {
        if (!iframe) {
            const videoId = container.getAttribute("data-video-id");
            iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&modestbranding=1&showinfo=0&rel=0`;
            iframe.frameBorder = "0";
            iframe.allow = "autoplay; encrypted-media";
            iframe.allowFullscreen = !0;
            iframe.className = "w-full h-full aspect-video rounded-lg shadow-lg";
            container.innerHTML = "";
            container.appendChild(iframe);
            iframe.onload = () => {
                playPauseVideo()
            }
        } else {
            playPauseVideo()
        }
    }
    );
    function playPauseVideo() {
        if (isPlaying) {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            isPlaying = !1
        } else {
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
            isPlaying = !0
        }
    }
}
);
const youtubeVideoContainers = document.querySelectorAll(".youtube-video-container");
let isPlayed = [!1, !1, !1];
youtubeVideoContainers.forEach((ytContainer, index) => {
    ytContainer.addEventListener("click", (e) => {
        gsap.to(ytContainer.querySelector("img"), {
            opacity: 0,
            duration: 0.2
        });
        gsap.to(ytContainer.querySelector(".yt-btn"), {
            opacity: 0,
            duration: 0.2,
        });
        isPlayed[index] = !0
    }
    )
}
);
const videoExploreBtn = window.innerWidth < 768 && document.querySelector(".video-explore-btn");
const videosContainer = window.innerWidth < 768 && document.querySelector(".videos-container");
window.innerWidth < 768 && videoExploreBtn.addEventListener("click", () => {
    videosContainer.scrollBy({
        top: 0,
        left: videosContainer.offsetWidth * 1.02,
        behavior: "smooth",
    })
}
    , 100);
const reviewCards = document.querySelectorAll(".review-card");
const reviewCardsContainer = document.querySelector(".review-cards-container");
const googleRatingCard = document.querySelector(".google-rating-card");
function animateGoogleRatingCard() {
    const rotationAngle = 5;
    gsap.timeline({
        repeat: -1,
        yoyo: !0
    }).to(googleRatingCard, {
        rotation: rotationAngle,
        duration: 1.5,
        ease: "power1.inOut",
        transformOrigin: "top center",
    }).to(googleRatingCard, {
        rotation: -rotationAngle,
        duration: 1.5,
        ease: "power1.inOut",
        transformOrigin: "top center",
    })
}
animateGoogleRatingCard();
let isDragging = !1;
let startX;
let scrollLeft;
reviewCardsContainer.addEventListener("mousedown", (e) => {
    isDragging = !0;
    startX = e.pageX - reviewCardsContainer.offsetLeft;
    scrollLeft = reviewCardsContainer.scrollLeft
}
);
reviewCardsContainer.addEventListener("mouseleave", () => {
    isDragging = !1
}
);
reviewCardsContainer.addEventListener("mouseup", () => {
    isDragging = !1
}
);
reviewCardsContainer.addEventListener("mousemove", (e) => {
    if (!isDragging)
        return;
    e.preventDefault();
    const x = e.pageX - reviewCardsContainer.offsetLeft;
    const walk = (x - startX) * 2;
    reviewCardsContainer.scrollLeft = scrollLeft - walk
}
);
const videoReviewBtn = document.querySelector(".video-review-btn");
const videoReviewText = document.querySelector(".video-review-text");
const reviewVideoTrayItems = document.querySelectorAll(".review-video-tray-item");
const closeVideoBtn = document.querySelector(".close-video-btn");
const playerVideo = document.querySelector(".player-video");
videoReviewBtn.addEventListener("mouseenter", () => {
    gsap.to(videoReviewText, {
        width: "0%",
        duration: 0.5,
        ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
    });
    gsap.to(videoReviewText, {
        opacity: "0",
        duration: 0.2,
        ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
    });
    gsap.to(".review-video-tray", {
        x: "0%",
        duration: 0.5,
        ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
    });
    reviewVideoTrayItems.forEach((item) => {
        item.classList.add("marquee-animation-reverse")
    }
    )
}
);
videoReviewBtn.addEventListener("mouseleave", () => {
    gsap.to(videoReviewText, {
        width: "auto",
        opacity: "1",
        duration: 0.5,
        ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
    });
    gsap.to(".review-video-tray", {
        x: `${window.innerWidth < 768 ? "-69%" : "-66.67%"}`,
        duration: 0.5,
        ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
        onStart: () => {
            reviewVideoTrayItems.forEach((item) => {
                item.classList.remove("marquee-animation-reverse")
            }
            )
        }
        ,
    })
}
);
videoReviewBtn.addEventListener("click", () => {
    const videoPlayer = document.querySelector("#video-player");
    playerVideo.innerHTML = `<iframe class="h-full w-full" src="https://www.instagram.com/p/C1CuzFuCEab/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>`;
    gsap.to(videoPlayer, {
        scale: 1,
        duration: 0.5,
        ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
        onStart: () => {
            disableScroll()
        }
        ,
    })
}
);
closeVideoBtn.addEventListener("click", () => {
    const videoPlayer = document.querySelector("#video-player");
    gsap.to(videoPlayer, {
        scale: 0,
        duration: 0.5,
        ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
        onStart: () => {
            enableScroll()
        }
        ,
        onComplete: () => {
            playerVideo.innerHTML = ""
        }
        ,
    })
}
);
const followersCount = document.querySelector(".followers-count");
const originalText = followersCount.textContent;
const numArray = originalText.split("");
const firstDigit = numArray[0];
gsap.to(".followers-first-digit", {
    y: "-700%",
    duration: 1,
    ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
    onComplete: () => {
        gsap.to(".bg-count-sheet", {
            width: "100%"
        })
    }
    ,
    scrollTrigger: {
        trigger: ".followers-count",
        start: "top 70%",
        end: "top 50%",
    },
});
const faqData = [{
    question: "I want to learn guitar online. What is included?",
    answer: "You will learn chords, leads, plucking, music theory, and improvisation. Our program will be tailored to your skill level.",
}, {
    question: "What is the schedule of your guitar courses online?",
    answer: "Our teachers are available every day from 8 AM to 10 PM. You can choose a schedule depending on your preference.",
}, {
    question: "Will I learn to play my first song in 7 days?",
    answer: "Yes, with consistent practice and our expert guidance, you can confidently play your first song within a week.",
}, {
    question: "I’ve enrolled in your online guitar classes. What’s next?",
    answer: "Wait for our message on WhatsApp. We will schedule your first lesson with your teacher.",
}, {
    question: "I am Skeptical about online guitar classes.",
    answer: "Nothing can overshadow the Results that we are able to deliver in the Past Years, Hence we Request you to visit and Check our student video and in addition take a free trial session.",
},];
const faqContainer = document.querySelector(".faq-container");
faqData.forEach((faq, index) => {
    faqContainer.innerHTML += `
  <div class="faq-box mb-[4vw] md:mb-[2vw] cursor-pointer">
                    <h3 class="faq-question select-none text-[4.5vw] md:text-[1.8vw] font-[500] mb-[2vw] md:mb-[1vw] flex justify-between items-start">
                      <span class="w-[90%]">Q: ${faq.question}</span>
                      <i class="down-arrow ri-arrow-down-s-line text-[6vw] md:text-[1.5vw] transform transition-transform duration-300"></i>
                    </h3>
                    <div class="faq-answer pl-[5.2vw] pr-[5vw] md:pr-[3vw] md:pl-[2.4vw] h-0 overflow-hidden">
                      <p class="text-[3.5vw] md:text-[1.5vw] text-[#7c7f87] font-[600]">${faq.answer}</p>
                    </div>
                    </div>
  `
}
);
const faqBoxes = document.querySelectorAll(".faq-box");
faqBoxes.forEach((box) => {
    let isOpen = !1;
    const question = box.querySelector(".faq-question");
    const answer = box.querySelector(".faq-answer");
    question.addEventListener("click", () => {
        if (!isOpen) {
            gsap.to(box.querySelector(".down-arrow"), {
                rotate: "-180deg",
                duration: 0.1,
                ease: "none",
            });
            gsap.to(answer, {
                height: "auto",
                duration: 0.3,
                ease: "power2.inOut"
            });
            isOpen = !0
        } else {
            gsap.to(box.querySelector(".down-arrow"), {
                rotate: "0deg",
                duration: 0.1,
                ease: "none",
            });
            gsap.to(answer, {
                height: 0,
                duration: 0.3,
                ease: "power2.inOut"
            });
            isOpen = !1
        }
    }
    )
}
);
const navLinks = document.querySelectorAll(".magnet-effect");
navLinks.forEach((link) => {
    link.addEventListener("mousemove", (event) => {
        const linkWidth = link.offsetWidth;
        const linkHeight = link.offsetHeight;
        const mouseX = event.offsetX - linkWidth / 2;
        const mouseY = event.offsetY - linkHeight / 2;
        const displaceXValue = (mouseX / linkWidth) * 10;
        const displaceYValue = (mouseY / linkHeight) * 10;
        gsap.to(link, {
            x: displaceXValue,
            y: displaceYValue,
            duration: 0.3,
            ease: "power2.out",
        })
    }
    );
    link.addEventListener("mouseleave", () => {
        gsap.to(link, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        })
    }
    )
}
);
let lastScrollTop = 0;
const threshold = 5;
window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
        let scrollY = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollY < 0)
            return;
        if (Math.abs(scrollY - lastScrollTop) > threshold) {
            if (scrollY > lastScrollTop) {
                gsap.to("header", {
                    duration: 0.3,
                    y: "-100%",
                    ease: CustomEase.create("custom", "0.33, 1, 0.68, 1"),
                })
            } else {
                gsap.to("header", {
                    duration: 0.3,
                    y: "0%",
                    ease: CustomEase.create("custom", "0.33, 1, 0.68, 1"),
                })
            }
        }
        lastScrollTop = scrollY
    }
    )
}
    , {
        passive: !0
    })
