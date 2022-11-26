
// $(document).ready(function(){       
//     var screen = 0;
//     $(document).scroll(function() { 
//         screen = $(this).scrollTop();
//         if(screen > 70) {
//             $("nav").css('background-color', '#FF8B5B');
//         } else {
//             $("nav").css('background-color', 'transparent');
//         }
//     });
// });

let nav = document.querySelector("nav")
console.log(nav)

let topArrow = document.querySelector(".to-top")
console.log(topArrow)

window.addEventListener('scroll', function(){

    let trans = this.document.querySelector(".hidden-arrow")

    if(window.pageYOffset > 100){
        nav.classList.add("nav-bg");
    }else{
        nav.classList.remove("nav-bg")
    }

    // For Top Arrow code

    if(window.pageYOffset > 500){
        
        topArrow.classList.add("hidden-arrow");
        
     }else{
        topArrow.classList.remove("hidden-arrow")
    }

    console.log("click")

},500);

//  Hamburger Code Starts

let hamb = document.querySelector(".hamburger")
let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")
let line3 = document.querySelector(".line3")

hamb.addEventListener('click', function(){
    line1.classList.toggle("active-line1")
    line2.classList.toggle("active-line2")
    line3.classList.toggle("active-line3")
    
})


//  Hamburger Code Starts