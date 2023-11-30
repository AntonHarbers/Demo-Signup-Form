const passwordInput = document.querySelector('#passwordInput');
const confirmPasswordInput = document.querySelector('#confirmPasswordInput');
const submitButton = document.querySelector('#submitBtn');
const errorText = document.querySelector('#errorText');

const foxCursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  foxCursor.setAttribute(
    'style',
    'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
  );

  // if mouse moves out of screen then hide the cursor otherwise show it
  if (e.pageX < 10 || e.pageY < 10) {
    foxCursor.classList.add('hidden');
  } else {
    foxCursor.classList.remove('hidden');
  }
});

// function that creates random shooting stars on the screen every random seconds
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.innerText = '🌟';
  document.body.appendChild(star);

  star.style.left = Math.random() * 100 + 'vw';

  setTimeout(() => {
    star.remove();
  }, 1000);
}

setInterval(createStar, Math.random() * 5000);

// mouse up

document.addEventListener('mousedown', () => {
  foxCursor.classList.add('expand');
});

document.addEventListener('mouseup', () => {
  foxCursor.classList.remove('expand');
});

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;

  console.log(password);
  console.log(confirmPassword);

  if (password !== confirmPassword) {
    errorText.classList.remove('hidden');
    return;
  } else {
    errorText.classList.add('hidden');
  }
  event.target.submit();
});
