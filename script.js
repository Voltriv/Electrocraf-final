const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});
// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

function auth(){
    var email = document.getElementById("email-1").value;
    var password = document.getElementById("pass-1").value;
    if(email=="admin@gmail.com" && password=="admin123"){
        window.location.assign("start-build.html");
        alert("Login Succesfully!! You Fully Entered to Our Website!");
    }
    else{
        alert("Invalid Information");
        return;
    }
}


window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const price = params.get('price');

    document.getElementById('button').innerHTML = name;

})

function addCard(){
    const cardbox = document.querySelector('.cardbox');
    // created elements
    const newcard = document.createElement('DIV');
    newcard.className = 'card';
    const newcardbody = document.createElement('DIV');
    newcardbody.ClassName = 'card-body';
    const newstrong = document.createElement('STRONG');
    newstrong.ClassName = 'card-title';
    const newp= document.createElement('P');
    newp.ClassName = 'card-title';
    const newh4= document.createElement('H4');
    newh4.ClassName = 'card-link';


    
    cardbox.appendChild(newcard);
    newcard.appendChild(newcardboy);
    newcardboy.appendChild(newh3);
    newcardbody.appendChild(newp);
    newcardbody.appendChild(newp);
    newh4.appendChild(newh4)
}

