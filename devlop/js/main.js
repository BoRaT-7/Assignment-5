const blogButton = document.getElementById('blog_button');
const mainBalance = document.getElementById('main_balance');

blogButton.addEventListener('click',function(){
    blogButton.classList.add('bg-red-400');
    mainBalance.classList.remove('bg-red-400');
})
mainBalance.addEventListener('click',function(){
    mainBalance.classList.add('bg-red-400');
    blogButton.classList.remove('bg-red-400');
})