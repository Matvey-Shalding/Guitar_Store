const menu = document.body
menu.addEventListener('click', function () {
  menu.classList.toggle('active')
})
const width = document.documentElement.clientWidth
document.addEventListener('DOMContentLoaded', (event) => {
  if (width < 443) {
    document.querySelector('.reviews-text').innerHTML = 'The Quality and Delivery is always <br> on time,being a professional<br> guitarist myself I love the customer<br> service the brandprovides, highly<br> recommend Rhythm anytime.'
  }
});

