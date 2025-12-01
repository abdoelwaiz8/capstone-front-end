import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';

class App {
  #content = null;

  constructor({ content }) {
    this.#content = content;
    this._initUserMenu();
  }

  _initUserMenu() {
    const menuBtn = document.querySelector('#user-menu-btn');
    const menuPopup = document.querySelector('#user-menu-popup');

    if (menuBtn && menuPopup) {
      menuBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        menuPopup.classList.toggle('hidden');
      });

      document.addEventListener('click', (event) => {
        if (!menuPopup.classList.contains('hidden') && !menuPopup.contains(event.target) && !menuBtn.contains(event.target)) {
          menuPopup.classList.add('hidden');
        }
      });
    }
  }

  async renderPage() {
    const url = getActiveRoute();
    const page = routes[url];
    this.#content.innerHTML = await page.render();
    await page.afterRender();
    
    // Update active state di sidebar
    this._updateActiveNav(url);
  }

  _updateActiveNav(url) {
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
        link.classList.add('text-slate-400');
        
        // Simple logic untuk mencocokkan href dengan url aktif
        if (link.getAttribute('href') === `#${url}`) {
            link.classList.remove('text-slate-400');
            link.classList.add('bg-blue-600', 'text-white', 'shadow-md');
        }
    });
  }
}

export default App;