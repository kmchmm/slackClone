

window.addEventListener('scroll', (event) => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const menuBtn = document.getElementById('menuIcon');
const navList = document.getElementById('navList');
const closeBtn = document.getElementById('close');

menuBtn.addEventListener('click', addbutton);
function addbutton(){
	navList.style.display = "block";
}

closeBtn.addEventListener('click', closebutton);
function closebutton(){
	navList.style.display = "none";
}