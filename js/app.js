/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Define Global Variables
 * 
*/
//=======> Variable for selection Add Navbar
let mynavbar = document.getElementById('navbar__list');

//=======> Variable for selection Add Section
let mainSection = document.getElementById('mainSection');

//=======> Variable for count of Section
let sectionNumber = 0;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//=======> function for Help me selection position section
function scroll_to(id){
    // selection position section and Navbar
    let x= (document.getElementById(id)).getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: x - document.getElementById('header').offsetHeight + 30 ,
        left: 0,
        behavior: 'smooth'
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
//=======> main function for Add section And item in navbar
function addnewsection() {
    sectionNumber ++;

    //=======> Create Anther section
    let addSection = document.createElement('section');
    addSection.innerHTML = `
            <section id="section${sectionNumber}"  class="your-active-class">
              <div class="landing__container">
                <h2 id="se_${sectionNumber}">Section ${sectionNumber}</h2>
                <p id="getActive_${sectionNumber}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
              </div>
            </section>`;
    mainSection.appendChild(addSection);

    //=======> Create Anther item in navbar
    let addli = document.createElement('li');
    addli.innerHTML = `<li ><a id="li_${sectionNumber}" onclick="scroll_to('section${sectionNumber}')">Section ${sectionNumber}</a></li>`;
    mynavbar.appendChild(addli);
}
//=======> active four section in page
addnewsection();
addnewsection();
addnewsection();
addnewsection();


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu


// Scroll to anchor ID using scrollTO event
window.onscroll = function () {
    // display and hidden button ( go to top )
    let button = document.getElementById('goToTop');
    if (window.scrollY >= 400) {
        button.style.display = 'block'
    } else {
        button.style.display = 'none'
    }
    // Set sections as active
    // Add class 'active' to section when near top of viewport
    let state = true;
    for (let i = sectionNumber ; i > 0; i = i - 1) {
        let sectionPosition = (document.getElementById('section' + i).getBoundingClientRect().y);
        let headerHeight = document.getElementById('header').offsetHeight + 350 ;
        if ((sectionPosition < headerHeight) && state) {
            state = false;
            document.getElementById('li_' + i).classList.add('navbar__top');
            document.getElementById('se_' + i).classList.add('section__highlighting');
            document.getElementById('getActive_' + i).classList.add('parg__in_section');
        } else {
            document.getElementById('li_' + i).classList.remove('navbar__top');
            document.getElementById('se_' + i).classList.remove('section__highlighting');
            document.getElementById('getActive_' + i).classList.remove('parg__in_section');
        }
    }
}

// function for scroll up page when click button ( go to top )
function go_to_top(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}