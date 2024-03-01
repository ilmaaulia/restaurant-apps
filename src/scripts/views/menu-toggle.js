class MenuToggle {
  static toggleMenu(menuToggle, menuList) {
    menuToggle.classList.toggle('active');
    menuList.classList.toggle('show-menu');
  }

  static init() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => MenuToggle.toggleMenu(menuToggle, menuList));
    menuToggle.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') MenuToggle.toggleMenu(menuToggle, menuList);
    });
  }
}

MenuToggle.init();
