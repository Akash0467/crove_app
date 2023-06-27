$(document).ready(function(){
    $('.click-down').click(function(){
        $('.menu').toggleClass("other");
    });

    // Click Event
    const toggleBtn = document.querySelector(".show");
    const toggleBtnIcon = document.querySelector(".show i");
    const dropDownMenu = document.querySelector(".menu");
    toggleBtn.onclick = function(){
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }

});