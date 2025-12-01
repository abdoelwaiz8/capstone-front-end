export default class LoginPage {
  async render() {
    return `
      <div class="flex h-screen w-screen absolute inset-0 z-50 bg-white">
        <div class="hidden lg:flex w-1/2 bg-slate-900 justify-center items-center relative overflow-hidden">
            <div class="z-10 text-center px-10">
                <h2 class="text-4xl font-bold text-white mb-4">Digital Procurement</h2>
                <p class="text-slate-300 text-lg">Platform Digitalisasi Berita Acara Serah Terima Barang & Jasa.</p>
            </div>
            <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 border-slate-700 rounded-full opacity-50"></div>
            <div class="absolute -top-40 -right-0 w-80 h-80 border-4 border-slate-700 rounded-full opacity-50"></div>
        </div>

        <div class="w-full lg:w-1/2 flex justify-center items-center bg-white p-8">
            <div class="w-full max-w-md">
                <div class="lg:hidden text-center mb-8">
                    <h2 class="text-2xl font-bold text-slate-900">Digital Procurement</h2>
                </div>

                <h1 class="text-2xl font-semibold text-slate-800 mb-2">Selamat Datang Kembali</h1>
                <p class="text-slate-500 mb-8 text-sm">Silakan login untuk mengelola dokumen berita acara.</p>

                <form id="login-form">
                    <div class="mb-5">
                        <label for="email" class="block text-sm font-medium text-slate-700 mb-1">Email Perusahaan</label>
                        <input type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="admin@perusahaan.com" required>
                    </div>

                    <div class="mb-6">
                        <label for="password" class="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input type="password" id="password" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="••••••••" required>
                    </div>

                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center">
                            <input id="remember-me" type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded">
                            <label for="remember-me" class="ml-2 block text-sm text-slate-600">Ingat perangkat ini</label>
                        </div>
                        <a href="#" class="text-sm text-blue-600 hover:underline">Lupa password?</a>
                    </div>

                    <button type="submit" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg transition duration-300 shadow-lg">
                        Masuk ke Portal
                    </button>
                </form>

                <p class="mt-8 text-center text-sm text-slate-500">
                    Butuh bantuan akses? <a href="#" class="text-blue-600 font-medium hover:underline">Hubungi IT Support</a>
                </p>
            </div>
        </div>
      </div>
    `;
  }

  async afterRender() {
    // Sembunyikan Sidebar & Header saat di halaman Login
    const sidebar = document.querySelector('aside');
    const header = document.querySelector('header');
    if(sidebar) sidebar.classList.add('hidden');
    if(header) header.classList.add('hidden');

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // GANTI localStorage MENJADI sessionStorage
      // sessionStorage akan hilang otomatis saat tab/browser ditutup
      sessionStorage.setItem('userToken', 'logged-in');

      // Arahkan ke Dashboard
      window.location.hash = '#/';
    });
  }
}