const blogBtn = document.getElementById('blog_button');
const cardBalance = document.getElementById('card_balance');
document.getElementById('blog_button').addEventListener ('click',function(){
    blogBtn.classList.add('bg-red-400');
    cardBalance.classList.remove('bg-red-400');
});
document.getElementById('card_balance').addEventListener ('click',function(){
    cardBalance.classList.add('bg-red-400');
     blogBtn.classList.remove('bg-red-400');
});


const donationBtn = document.getElementById('donation_button');
const historyBtn = document.getElementById('historay_button');
const allCard = document.getElementById('all_card');
donationBtn.addEventListener('click',function(){
    allCard.style.display = 'block';
    allCard.classList.add('bg-blue-500');

    donationBtn.classList.add('bg-blue-500');
    historyBtn.classList.remove('bg-blue-500');
});

historyBtn.addEventListener('click',function(){
    window.location.href ='history_pages.html';
})
