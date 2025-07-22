
  const loginBtn = document.querySelector('.login-toggle');
  const registerBtn = document.querySelector('.register-toggle');
  const loginModal = document.getElementById('login-modal');
  const registerModal = document.getElementById('register-modal');
  const closeBtns = document.querySelectorAll('.close');

  function closeModals() {
    loginModal.classList.add('hidden');
    registerModal.classList.add('hidden');
  }

  loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
    registerModal.classList.add('hidden');
  });

   registerBtn.addEventListener('click', () => {
    registerModal.classList.remove('hidden');
    loginModal.classList.add('hidden');
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeModals();
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target === loginModal || e.target === registerModal) {
      closeModals();
    }
  });


