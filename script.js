const messageButton = document.querySelector('.message-button');
const messagePopup = document.getElementById('messagePopup');

messageButton.addEventListener('click', () => {
    messagePopup.classList.add('show');
});

const replyButton = document.querySelector('.reply-button');
replyButton.addEventListener('click', () => {
    window.open('https://m.me/jaylonia03', '_blank'); 
});
