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

/*----------------------------------------------*/
/*                  ALERT                       */
/*----------------------------------------------*/
const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
    `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">X</p>
    </div>
    `;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
});

/*-----------------------------------------------*/
/*                MESSAGING                      */
/*-----------------------------------------------*/
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', (event) => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to ${user.value}`);
    }
    event.preventDefault();
});