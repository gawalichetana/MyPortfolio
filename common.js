/*====================== show menu ===================*/

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*  ===============  menu show ================ */
//  validate if constant exixts 

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*  ===============  hide show ================ */
//  validate if constant exixts 

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*  =============== Remove menu mobile  ================ */
 const navLink = document.querySelectorAll('.nav_link');

 function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    //when we click on each link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
 }
 navlink.forEach((n) => n.addEventListener('click', linkAction));


/*====================== Background header ===================*/
function scrollHeader(){
    const header = document.getElementById('header');

// when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
if(this.scrollY >= 50)header.classList.add('scroll-header');
else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/*============= contact form ============ */
const contactForm = document.getElementById('contact_form'),
contactName = document.getElementById('contact_name'),
contactEmail = document.getElementById('contact_email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has a value
    if (contactName.value === '' || 
    contactEmail.value === '' || 
    Message.value === ''){

        //add or remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // show message
        contactMessage.textContent ='Write all the input fields';
    }
     else {
        // serviceID - templetID - #form - publickey
        emailjs.sendForm('service_9ajvv14','template_drlh1jl','#contact_form','RiJtXrrm5MQj1IUm2'
        )
        .then(() => {
            // show message and add color, window 
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent';

            // remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 3000);
        }, (error) => {
            alert('OOPs! Something Went Wrong...', error);
        });

        // clear input fields
        contactName.value = '';
        contactEmail.value = '';
        Message.value = '';

    }

};

contactForm.addEventListener('submit', sendEmail);


/**============ style switcher ==============/*/

const styleSwitcherToggle = document.querySelector('.style_switcher-toggler'),
styleSwitcher = document.querySelector('.style_switcher');

styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});


// hide switcher on scroll

window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains ('open')) {
        styleSwitcher.classList.remove('open');
    }
});

// for changing color

const alternateStyle = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled')
        }
        else{
            style.setAttribute('disabled', 'true');
        }
    });
}
