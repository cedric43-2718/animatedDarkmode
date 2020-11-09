const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(mode){
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;

}

function screenMode(mode){

    if (mode === 'light'){
        nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
        textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    } else {
        nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    }

    toggleIcon.children[0].textContent = `${mode} Mode`;
    imageMode(mode);

}

function toggleMode(isDark){
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? darkMode() : lightMode();
}

// function darkMode(){
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     // console.log(toggleIcon.children);
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     imageMode('dark');
// }

// function lightMode(){
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     // console.log(toggleIcon.children);
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     imageMode('light');

// }

function switchTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleMode(true);
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleMode(false);
    }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');

if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        toggleMode(true);
    }
}