import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';

class App {
  #content = null;

  constructor({ content }) {
    this.#content = content;
    this._initUserMenu();
    this._initLogoutListener();
  }

  _initLogoutListener() {
    document.addEventListener('click', (event) => {
      const target = event.target.closest('a[href="#/login"]');
      if (target) {
        event.preventDefault();
        
        // GANTI DI SINI: Hapus dari sessionStorage
        sessionStorage.removeItem('userToken'); 
        
        window.location.hash = '#/login';
        window.location.reload(); 
      }
    });
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
    
    // GANTI DI SINI: Cek sessionStorage
    const isAuthenticated = sessionStorage.getItem('userToken');

    // --- AUTH GUARD ---
    // 1. Jika belum login DAN bukan di halaman login -> Tendang ke Login
    if (!isAuthenticated && url !== '/login') {
        window.location.hash = '#/login';
        return;
    }

    // 2. Jika sudah login TAPI coba buka login -> Balikin ke Dashboard
    if (isAuthenticated && url === '/login') {
        window.location.hash = '#/';
        return;
    }

    const page = routes[url];
    if (!page) {
        this.#content.innerHTML = '<h2 class="text-center mt-10">Halaman tidak ditemukan (404)</h2>';
        return;
    }

    // Logika Tampilan Shell
    const sidebar = document.querySelector('aside');
    const header = document.querySelector('header');

    if (sidebar && header) {
        if (url === '/login') {
            sidebar.classList.add('hidden');
            header.classList.add('hidden');
            document.body.classList.remove('bg-gray-50');
        } else {
            sidebar.classList.remove('hidden');
            header.classList.remove('hidden');
            document.body.classList.add('bg-gray-50');
        }
    }

    this.#content.innerHTML = await page.render();
    await page.afterRender();
    
    this._updateActiveNav(url);
  }

  _updateActiveNav(url) {
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
        link.classList.add('text-slate-400');
        
        if (link.getAttribute('href') === `#${url}`) {
            link.classList.remove('text-slate-400');
            link.classList.add('bg-blue-600', 'text-white', 'shadow-md');
        }
    });
  }
}

export default App;