// history.js

// Blog button toggle (optional)
const blogBtn = document.getElementById('blog_button');
const mainBalance = document.getElementById('main_balance');

blogBtn.addEventListener('click', function() {
  blogBtn.classList.add('bg-green-500');
  mainBalance.classList.remove('bg-green-500');
});

mainBalance.addEventListener('click', function() {
  mainBalance.classList.add('bg-green-500');
  blogBtn.classList.remove('bg-green-500');
});

// Load history from localStorage
const container = document.getElementById('history_list');
const history = JSON.parse(localStorage.getItem('donationHistory')) || [];

if (history.length === 0) {
  container.innerHTML = '<p class="text-center text-gray-600 text-xl">No donations yet!</p>';
} else {
  history.forEach(item => {
    const card = document.createElement('div');
    card.className = 'bg-white p-6 rounded-xl shadow-md';
    card.innerHTML = `
      <h2 class="font-bold text-xl">${item.amount} Taka is Donated for ${item.cause}</h2>
      <p class="text-gray-600 mt-2">Date : ${item.date}</p>
    `;
    container.appendChild(card);
  });
}

// Back to donation page
const donationBtn = document.getElementById('donation_button');
donationBtn.addEventListener('click', function() {
  window.location.href = 'index.html';
});
