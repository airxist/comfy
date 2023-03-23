// ******* SELECTED ELEMENTS
const prod_image = [... document.querySelectorAll(".prod_image")];
const ops = [...document.querySelectorAll(".operations")];
const range_value = document.querySelector(".price_num");
const range = document.getElementById("range");
const current_price = document.querySelector(".current_price");

// **************** CONDITIONS AND OPTIONS;
let dragging = false, prev_pageY;
const prod_class = [
    "scaleone",
    "scaletwo", 
    "scalethree",
    "scalefour"
]
let num = 0;
let num2 = 0;

// ************ Event listener and functions
range.addEventListener("input", (e) => {
    range_value.textContent = range.value;
    // let get = getComputedStyle(current_price);
    current_price.classList.add("show");
    current_price.style.left = range.value/11 + "%";
    // asynchronuous function
    setTimeout(() => {
        current_price.classList.remove("show");
    }, 3000);
})
ops.forEach(button => {
    button.addEventListener("click", (e) => {

        let elemclass = e.currentTarget.classList;

        elemclass.contains("next") ? shufflePic() : unshufflePic();
        // if(elemclass.contains("next")) {
        //    shufflePic();

        // }else {
        //     unshufflePic();
        // }
    })
})
prod_image.forEach(prod => {
    prod.addEventListener("touchstart", (e) => {
       dragging = true;
       prev_pageY = e.touches[0].pageY;
    })

    prod.addEventListener("touchmove", (e) => {
        e.preventDefault();
        if(!dragging) {
            return;
        }else {
            if (e.touches[0].pageY > prev_pageY) {
                shufflePic();
            }else{
                unshufflePic();
            }
        }
    })

    prod.addEventListener("touchend", (e) => {
        dragging = false;
    })
})


//* function to shuffle pic
function shufflePic() {
    prod_image.forEach(prod => {
        prod.classList.remove(prod_class[num]);
        num++;
    })
    num = 0;
    let pop = prod_class.pop();
    prod_class.unshift(pop);

    prod_image.forEach(prod => {
        prod.classList.add(prod_class[num]);
        num++;
    })
    num = 0;
}
//*** function to unshuffle 
function unshufflePic() {
    prod_image.forEach(prod => {
        prod.classList.remove(prod_class[num]);
        num++;
    })

    num = 0;
    let shift = prod_class.shift();
    prod_class.push(shift);

    prod_image.forEach(prod => {
        prod.classList.add(prod_class[num]);
        num++;
    })
    num = 0;
}