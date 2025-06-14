const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const modalButtons = document.getElementById('modal-buttons');
let modalContinue = document.getElementById('modal-continue');
let modalBack = document.getElementById('modal-back');

function showModal(message, continueText = 'Continue', backText = 'Back') {
  return new Promise((resolve) => {
    modalMessage.textContent = message;
    modalContinue.textContent = continueText;
    modalBack.textContent = backText;
    modalButtons.style.display = 'flex';
    modal.classList.remove('hidden');

    const handleContinue = () => {
      modal.classList.add('hidden');
      modalContinue.removeEventListener('click', handleContinue);
      modalBack.removeEventListener('click', handleBack);
      resolve(true);
    };

    const handleBack = () => {
      modal.classList.add('hidden');
      modalContinue.removeEventListener('click', handleContinue);
      modalBack.removeEventListener('click', handleBack);
      resolve(false);
    };

    modalContinue.addEventListener('click', handleContinue);
    modalBack.addEventListener('click', handleBack);
  });
}

function showCountdownModal() {
  modalButtons.style.display = 'none';
  modal.classList.remove('hidden');
  let seconds = 3;
  modalMessage.textContent = `You are being kicked in ${seconds} sec...`;

  const countdown = setInterval(() => {
    seconds--;
    if (seconds > 0) {
      modalMessage.textContent = `You are being kicked in ${seconds} sec...`;
    } else {
      clearInterval(countdown);
      modal.classList.add('hidden');
      window.location.href = 'glitch.html';
    }
  }, 1000);
}

async function run() {
  const first = await showModal('⚠️ This will hack your mind. Click Continue to proceed or Back to exit.', 'Continue', 'Back');
  if (!first) {
    showCountdownModal();
    return;
  }

  const second = await showModal('💖 I LOVE YOU. Click Yes or No.', 'Yes', 'No');
  if (!second) {
    showCountdownModal();
    return;
  }

  document.getElementById('main-content').style.display = 'block';
}

run();