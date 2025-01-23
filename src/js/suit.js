

const suitSizeS = document.getElementById("sizes");
const suitSizeM = document.getElementById("sizem");
const suitSizeL = document.getElementById("sizel");
const suitSizeXL = document.getElementById("sizexl");


suitSizeS.addEventListener("click", () => {
    suitSizeS.style.backgroundColor = "rgb(185, 185, 185)";
    suitSizeM.style.backgroundColor = "#70d6ff";
    suitSizeL.style.backgroundColor = "#70d6ff";
    suitSizeXL.style.backgroundColor = "#70d6ff";
});

suitSizeM.addEventListener("click", () => {
    suitSizeS.style.backgroundColor = "#70d6ff";
    suitSizeM.style.backgroundColor = "rgb(185, 185, 185)";
    suitSizeL.style.backgroundColor = "#70d6ff";
    suitSizeXL.style.backgroundColor = "#70d6ff";
});

suitSizeL.addEventListener("click", () => {
    suitSizeS.style.backgroundColor = "#70d6ff";
    suitSizeM.style.backgroundColor = "#70d6ff";
    suitSizeL.style.backgroundColor = "rgb(185, 185, 185)";
    suitSizeXL.style.backgroundColor = "#70d6ff";
});


suitSizeXL.addEventListener("click", () => {
    suitSizeS.style.backgroundColor = "#70d6ff";
    suitSizeM.style.backgroundColor = "#70d6ff";
    suitSizeL.style.backgroundColor = "#70d6ff";
    suitSizeXL.style.backgroundColor = "rgb(185, 185, 185)";
});


/*---SCROLLLL-------------------------------------*/

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


/*Section1-------------------- */

const btn = document.getElementById("btnd");
const input = document.getElementById("inputd");

btn.addEventListener("click", () => {
    input.classList.toggle("active");
    btn.classList.toggle("active");
})




/* suit count number------------------------*/



const increase = document.getElementById("increase");
const reduce = document.getElementById("reduce");
const number = document.getElementById("number");

var count = 1;
increase.addEventListener("click", () => {
    count += 1;
    number.innerHTML = count;
});

var count = 1;
reduce.addEventListener("click", () => {
    if (count > 1) {
        count -= 1;
        number.innerHTML = count;
    }

})

