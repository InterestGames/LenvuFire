function showSection(id) {
  const sections = document.querySelectorAll('main > section');
  sections.forEach(section => {
    section.style.display = section.id === id ? 'block' : 'none';
  });
}

const navButtons = {
  'nav-home': 'home',
  'nav-settings': 'settings',
  'nav-profile': 'profile',
  'nav-earn': 'watchEarn'
};

Object.keys(navButtons).forEach(buttonId => {
  document.getElementById(buttonId).addEventListener('click', () => {
    showSection(navButtons[buttonId]);
  });
});

