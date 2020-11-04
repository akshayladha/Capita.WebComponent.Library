import '../main';

const progress_bar = document.createElement('cc-progress-bar');
progress_bar.setAttribute('complete', "73");
document.body.appendChild(progress_bar);


const ccLogin = document.createElement('cc-login');
ccLogin.setAttribute('forgot', "https://www.capita.com/");
ccLogin.setAttribute('signup', "https://www.capita.com/");
ccLogin.setAttribute('login', "");
document.body.appendChild(ccLogin);


// const modalWindow = document.createElement('cc-modal');
// modalWindow.setAttribute('header', 'Title');
// const spanContent = document.createElement('span');
// spanContent.innerHTML = "This is modal content.";
// modalWindow.appendChild(spanContent);
// document.body.appendChild(modalWindow);

// const button = document.createElement('button');
// button.innerText = 'Open modal';

// button.addEventListener('click', () => {
//     modalWindow.open();
// });
// document.body.appendChild(button);