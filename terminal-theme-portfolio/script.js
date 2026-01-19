const button_2 = document.querySelector('.b2');
button_2.addEventListener('click', () => {
    let isConfirmed = confirm("You are closing the terminal.");
    if(isConfirmed){
        window.location.replace("https://google.com");
    }
});