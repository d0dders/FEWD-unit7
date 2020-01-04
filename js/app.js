/*----------------------------------------------*/
/*                NAVIGATION                    */
/*----------------------------------------------*/
const navImages = document.querySelectorAll('.navigation img');
const nav = document.querySelector('.navigation');

nav.addEventListener('click', (e) => {    
    const target = e.target;
    if(target.tagName == 'IMG'){   
    for (let i = 0; i < navImages.length; i++) {
        navImages[i].className = "";
    }
        target.className = "active-nav";
    };
});