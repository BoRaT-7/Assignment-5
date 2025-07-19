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
