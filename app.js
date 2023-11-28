let ans = document.querySelectorAll(".q-ans");
let ques = document.querySelectorAll(".ques-container");
let arrow = document.querySelectorAll(".arr");
let flag = true;

Array.from(arrow).forEach(function (e, index) {
    e.addEventListener("click", function () {
        if (flag === true ) {
            ans[index].style.display = "block";
            flag = false;
            console.log("hello");
        } else {
            ans[index].style.display = "none";
            flag = true;
        }
    })
})