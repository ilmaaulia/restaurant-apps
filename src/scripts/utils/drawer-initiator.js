const DrawerInitiator = {
  toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this.toggleDrawer(event, drawer);
      button.classList.toggle('active');
    });

    content.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
      button.classList.remove('active');
    });

    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.toggleDrawer(event, drawer);
        button.classList.toggle('active');
      }
    });
  },
};

export default DrawerInitiator;
