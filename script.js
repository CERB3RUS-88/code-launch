const revealItems = document.querySelectorAll('.reveal');
const toast = document.querySelector('.toast');
const copyButton = document.querySelector('#copy-email');
const email = 'shaurya.dwivedi.dev@example.com';

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    toast.classList.add('visible');
    window.setTimeout(() => toast.classList.remove('visible'), 2200);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
