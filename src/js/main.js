/*Section1-------------------- */

const btn = document.getElementById("btnd");
const input = document.getElementById("inputd");

btn.addEventListener("click", () => {
    input.classList.toggle("active");
    btn.classList.toggle("active");
})


/*Section1-------------------- */

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/* Scroll Animate-------------------------*/


const target = document.querySelectorAll(".target");

const callBack = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active")
        }
        else {
            entry.target.classList.remove("active")
        }
    })
}

const options = {
    threshold: 0
}



const observer = new IntersectionObserver(callBack, options);

target.forEach((target => {
    observer.observe(target);
}));





/*shop_se4 ----sidebar------------------------------*/

const genderBtn = document.getElementById("gender");
const genderContent = document.getElementById("gender_content");
const saleBtn = document.getElementById("sale");
const saleContent = document.getElementById("sale_content");
const all = document.getElementById("all");
const ulContent = document.getElementById("ulcontent");
const sidebar = document.getElementById("sideBar");
const titleBtn = document.getElementById("titleSidebar");
const titleContent = document.getElementById("titleContent");
const sidebarContentMain = document.getElementById("sidebarContentMain");
const bestTitle = document.getElementById("best_title");


genderBtn.addEventListener("click", () => {
    genderContent.classList.toggle("active_shop")
});

saleBtn.addEventListener("click", () => {
    saleContent.classList.toggle("active_shop")
});

all.addEventListener("click", () => {
    ulContent.classList.toggle("active_allproducts");
    sidebar.classList.toggle("active_sidebar")
});


titleBtn.addEventListener("click", () => {
    if (sidebarContentMain.style.display = "block") {
        titleContent.classList.toggle("active_title_sidebar");
        sidebarContentMain.classList.toggle("active_main");
        sidebar.classList.toggle("sidebar_width");
        bestTitle.classList.toggle("span_active");
    }
});




/*shop_se4 ----content like------------------------------*/



const liked = document.getElementById("liked");
const likedBtn = document.getElementById("likedbtn");

likedBtn.addEventListener("click", () => {
    liked.classList.toggle("active_liked")
});

const liked1 = document.getElementById("liked1");
const likedBtn1 = document.getElementById("likedbtn1");

likedBtn1.addEventListener("click", () => {
    liked1.classList.toggle("active_liked")
});

const liked2 = document.getElementById("liked2");
const likedBtn2 = document.getElementById("likedbtn2");

likedBtn2.addEventListener("click", () => {
    liked2.classList.toggle("active_liked")
});

const liked3 = document.getElementById("liked3");
const likedBtn3 = document.getElementById("likedbtn3");

likedBtn3.addEventListener("click", () => {
    liked3.classList.toggle("active_liked")
});

const liked4 = document.getElementById("liked4");
const likedBtn4 = document.getElementById("likedbtn4");

likedBtn4.addEventListener("click", () => {
    liked4.classList.toggle("active_liked")
});

const liked5 = document.getElementById("liked5");
const likedBtn5 = document.getElementById("likedbtn5");

likedBtn5.addEventListener("click", () => {
    liked5.classList.toggle("active_liked")
});




/*navbar ----menu--sidebar------------------------------*/




