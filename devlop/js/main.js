// Blog & Balance Toggle Button
const blogBtn = document.getElementById('blog_button');
const cardBalance = document.getElementById('card_balance');

blogBtn.addEventListener('click', function() {
  blogBtn.classList.add('bg-green-500');
  cardBalance.classList.remove('bg-green-500');
});

cardBalance.addEventListener('click', function() {
  cardBalance.classList.add('bg-green-500');
  blogBtn.classList.remove('bg-green-500');
});

// Donation & History Nav Buttons
const donationBtn = document.getElementById('donation_button');
const historyBtn = document.getElementById('historay_button');
const allCard = document.getElementById('all_card');

donationBtn.addEventListener('click', function() {
  allCard.style.display = 'block';
  donationBtn.classList.add('bg-green-400');
  historyBtn.classList.remove('bg-green-400');
});

historyBtn.addEventListener('click', function() {
  historyBtn.classList.add('bg-green-400');
  donationBtn.classList.remove('bg-green-400');
  window.location.href = 'history_pages.html'; // ✅ তোমার history page এর সঠিক নাম!
});

// Donate Now buttons
const successModal = document.getElementById('success_modal');
const donateButtons = document.querySelectorAll('.donate_now');

donateButtons.forEach(button => {
  button.addEventListener('click', function() {
    const card = this.closest('.flex');
    const inputDonate = card.querySelector('.input_donate');
    const donateBalance = card.querySelector('.donate_balance');
    const causeTitle = card.querySelector('h2').innerText;

    const amount = parseInt(inputDonate.value);
    if (!amount || amount <= 0) {
      alert('Please input a positive number!');
      return;
    }

    let cardAmount = parseInt(cardBalance.textContent);
    let donateAmount = parseInt(donateBalance.textContent);

    if (amount > cardAmount) {
      alert('Not enough balance');
      return;
    }

    // Update card balance & card donate balance
    cardBalance.innerHTML = `<img src="images/coin.png" class="h-8 w-8"> ${cardAmount - amount}`;
    donateBalance.innerHTML = `<img src="images/coin.png" class="h-6 w-6 md:h-8 md:w-8"> ${donateAmount + amount} BDT`;

    inputDonate.value = '';

    // ✅ Save to LocalStorage (MERGE SAME CAUSE)
    let history = JSON.parse(localStorage.getItem('donationHistory')) || [];

    const existing = history.find(item => item.cause === causeTitle);
    if (existing) {
      existing.amount += amount;
      existing.date = new Date().toString();
    } else {
      history.push({
        amount: amount,
        cause: causeTitle,
        date: new Date().toString()
      });
    }
    localStorage.setItem('donationHistory', JSON.stringify(history));

    successModal.showModal();
  });
});
