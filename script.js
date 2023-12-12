// Variable Declarations
const passwordInput = document.querySelector('#passwordInput');
const confirmPasswordInput = document.querySelector('#confirmPasswordInput');
const submitButton = document.querySelector('#submitBtn');
const errorText = document.querySelector('#errorText');
const foxCursor = document.querySelector('.cursor');

// Event Listeners
document.addEventListener('mousemove', (e) => {
  UpdateCursorPosition(e.pageY, e.pageX);
});

document.addEventListener('mousedown', () => {
  foxCursor.classList.add('expand');
});

document.addEventListener('mouseup', () => {
  foxCursor.classList.remove('expand');
});

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  HandleFormSubmit();
  event.target.submit();
});

// Helper Functions
function HandleFormSubmit() {
  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    errorText.classList.remove('hidden');
    return;
  } else {
    errorText.classList.add('hidden');
  }
}

function UpdateCursorPosition(pageY, pageX) {
  foxCursor.setAttribute(
    'style',
    'top: ' + (pageY - 10) + 'px; left: ' + (pageX - 10) + 'px;'
  );

  pageX < 10 || pageY < 10
    ? foxCursor.classList.add('hidden')
    : foxCursor.classList.remove('hidden');
}

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
