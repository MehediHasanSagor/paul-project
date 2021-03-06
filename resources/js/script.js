// Main Menu
function openMenu() {
    document.getElementById('navbar').style.width="100%"
}
function closeMenu() {
    document.getElementById('navbar').style.width="0%"
}
// Smooth Scroll
$('.main-menu a, .next-section a').on('click',function(){
    $('html, body').animate({
        scrollTop:$($.attr(this,'href')).offset().top
    }, 1000);
    return false
})
//Wow Animation
new WOW({
    mobile: false
}).init();
//Mixitup
var mixer = mixitup('.work-grid');