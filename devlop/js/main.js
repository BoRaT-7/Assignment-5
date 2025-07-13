const blogButton = document.getElementById('blog_button');
const mainBalance = document.getElementById('main_balance');
blogButton.addEventListener('click',function(){
    blogButton.classList.add('bg-red-400');
    mainBalance.classList.remove('bg-red-400');
});
mainBalance.addEventListener('click',function(){
    mainBalance.classList.add('bg-red-400');
    blogButton.classList.remove('bg-red-400');
});

const donationButton = document.getElementById('donation_button');
const historyButton = document.getElementById('historay_button');
const allCard = document.getElementById('all_card');
donationButton.addEventListener('click',function(){
    allCard.classList.remove('hidden');
    donationButton.classList.add('bg-green-400');
    historyButton.classList.remove('bg-green-400');
});
historyButton.addEventListener('click', function(){
  historyButton.classList.add('bg-green-400');
  historyButton.classList.remove('bg-green-400');
  window.location.href = 'history_pages.html';

});


