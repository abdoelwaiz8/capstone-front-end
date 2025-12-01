export default class DownloadPage {
  async render() {
    return `
      <div class="bg-white rounded-xl shadow-sm border border-slate-200">
          <div class="p-6 border-b border-slate-100">
              <h2 class="text-lg font-bold text-slate-800">Pusat Unduhan Dokumen</h2>
              <p class="text-sm text-slate-500">Unduh arsip BAPB dan Berita Acara yang telah selesai.</p>
          </div>
          
          <div class="p-6">
            <div class="flex gap-4 mb-6">
                <select class="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                    <option>Semua Kategori</option>
                    <option>BAPB (Barang)</option>
                    <option>BAPP (Jasa)</option>
                </select>
                <input type="date" class="border border-slate-300 rounded-lg px-3 py-2 text-sm">
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border border-slate-200 rounded-lg p-4 flex items-center justify-between hover:bg-slate-50 transition">
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                            <i class="ph ph-file-pdf text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-800 text-sm">BAPB-XI/2025/001</h4>
                            <p class="text-xs text-slate-500">PT. Sinar Jaya • 24 Nov 2025</p>
                        </div>
                    </div>
                    <button class="text-slate-400 hover:text-blue-600"><i class="ph ph-download-simple text-xl"></i></button>
                </div>

                <div class="border border-slate-200 rounded-lg p-4 flex items-center justify-between hover:bg-slate-50 transition">
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                            <i class="ph ph-file-doc text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-800 text-sm">SPK-Logistik-004</h4>
                            <p class="text-xs text-slate-500">Internal Memo • 20 Nov 2025</p>
                        </div>
                    </div>
                    <button class="text-slate-400 hover:text-blue-600"><i class="ph ph-download-simple text-xl"></i></button>
                </div>
            </div>
          </div>
      </div>
    `;
  }

  async afterRender() {
    document.getElementById('page-title').innerText = "Download Dokumen";
  }
}