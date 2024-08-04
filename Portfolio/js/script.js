// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
        sec.classList.add('show-animate');
    }

    else{
        sec.classList.remove('show-animate'); 
    }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);


    // remove toggle icon and navbar when click navbar links (scroll)
   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');

    // animation footer on scroll

}

const form = document.querySelector('form');

function sendEmail(){
Email.send({
        Host : "smtp.elasticemail.com",
        Username : "officialujjwalk@gmail.com",
        Password : "730C70831B91D8F3DEBF6D67411A4F490F53",
        To : 'officialujjwalk@gmail.com',
        From : "officialujjwalk@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    sendEmail();
});