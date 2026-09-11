const toggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
const menuLinks = navLinks ? navLinks.querySelectorAll('a') : [];

if (toggle && navLinks) {
  toggle.addEventListener('change', () => {
    navLinks.setAttribute('data-open', String(toggle.checked));
  });
}

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (toggle) toggle.checked = false;
    if (navLinks) navLinks.setAttribute('data-open', 'false');
  });
});

const slider = document.querySelector('.projects-slider');
if (slider) {
  const track = slider.querySelector('.projects-track');
  const cards = Array.from(track.children);
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  const dots = Array.from(document.querySelectorAll('.dots span'));
  let index = 0;

  function getVisibleCards() {
    if (window.innerWidth <= 760) return 1;
    if (window.innerWidth <= 1000) return 2;
    return 3;
  }

  function updateSlider() {
    const visible = getVisibleCards();
    const maxIndex = Math.max(0, cards.length - visible);
    index = Math.min(index, maxIndex);

    const cardGap = Number.parseFloat(getComputedStyle(track).gap || '24');
    const cardWidth = cards[0].getBoundingClientRect().width;
    const offset = index * (cardWidth + cardGap);

    track.style.transform = `translateX(-${offset}px)`;

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index >= maxIndex;

    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === index;
      dot.classList.toggle('active', active);
    });
  }

  prevBtn?.addEventListener('click', () => {
    index = Math.max(0, index - 1);
    updateSlider();
  });

  nextBtn?.addEventListener('click', () => {
    index = Math.min(cards.length - getVisibleCards(), index + 1);
    updateSlider();
  });

  window.addEventListener('resize', updateSlider);
  updateSlider();
}

const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.querySelector('.modal-close');

if (modal && modalImage) {
  document.querySelectorAll('.project-image').forEach((img) => {
    img.addEventListener('click', () => {
      modalImage.src = img.dataset.full || img.src;
      modalImage.alt = img.alt;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  const closeModal = () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  };

  modalClose?.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
}
