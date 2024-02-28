class MenuToggle {
  constructor() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => this.toggleMenu(menuToggle, menuList));
    menuToggle.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') this.toggleMenu(menuToggle, menuList);
    });
  }

  toggleMenu(menuToggle, menuList) {
    menuToggle.classList.toggle('active');
    menuList.classList.toggle('show-menu');
  }
}

new MenuToggle();
