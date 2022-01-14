const hambuerguerButton = document.querySelector("#hamburger");
const navList = document.querySelector("#nav-list");

const toggleButton = ()=>{
    navList.classList.toggle('show');
}


hambuerguerButton.addEventListener('click',toggleButton);