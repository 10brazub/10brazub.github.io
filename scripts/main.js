let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUsername();
}

let myHeading = document.querySelector('h1');

function setUsername() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUsername();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Welcome to my website, ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my website, ' + storedName;
}