const preloader = document.querySelector('#preloader');

window.addEventListener('load', () => {
    setTimeout(function (){
        preloader.style.display = "none";
    }, 1500)
})