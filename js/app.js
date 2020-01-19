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
/*               NOTIFICATIONS                  */
/*----------------------------------------------*/
const notificationIcon = document.querySelector('.notification-icon');
const notificationArea = document.querySelector('.dropdown-content');

notificationArea.style.display = 'none';

notificationIcon.addEventListener('click', (e) => {
    if(notificationArea.style.display === 'none') {
        notificationArea.style.display = 'block';
    } else {
        notificationArea.style.display = 'none';
    }
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
/*                 SETTINGS                      */
/*-----------------------------------------------*/
const save = document.querySelector('#save');
const cancel = document.querySelector('#cancel');
const emailCheck = document.querySelector('#emailCheck');
const publicCheck = document.querySelector('#publicCheck');
const timezone = document.querySelector('#timezone');

function supportsLocalStorage() {
  try{
    return 'localStorage' in window && window.localStorage !== null;
  } catch(e) {
    return false;
  }
}

function loadSavedSettings() {
  if(supportsLocalStorage){
    if(localStorage.getItem('email') === 'true') {
      emailCheck.checked = true;
    } else {
      emailCheck.checked = false;
    }
    if(localStorage.getItem('public') === 'true') {
      publicCheck.checked = true;
    } else {
      publicCheck.checked = false;
    }
    if(localStorage.timezone) {
      timezone.value = localStorage.getItem('timezone');
    }
  }
}

window.onload = () => {
  loadSavedSettings();
};

save.addEventListener('click',() => {
  if (supportsLocalStorage()){
    if (emailCheck.checked){
      localStorage.setItem('email', 'true');
    } else {
      localStorage.setItem('email', 'false');
    }

    if (publicCheck.checked){
      localStorage.setItem('public', 'true');
    } else {
      localStorage.setItem('public', 'false');
    }

    localStorage.setItem('timezone', timezone.value);
  }
});

cancel.addEventListener('click', () => {
  loadSavedSettings();
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

var members = ["Victoria Chambers","Dale Byrd","Dawn Wood","Dan Oliver","Brian Jenson","John Skeen","Dustin Usey","Doris Keller","Athena Ozanich","Jamie Reardon","Paul Dodkins"];


/* https://www.w3schools.com/howto/howto_js_autocomplete.asp*/
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

autocomplete(user, members);
