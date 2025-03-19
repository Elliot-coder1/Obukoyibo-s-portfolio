

//header styles

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnicon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')



toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')


    toggleBtnicon.classList = isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

