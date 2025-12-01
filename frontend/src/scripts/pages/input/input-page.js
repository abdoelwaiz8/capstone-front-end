import { parseActivePathname } from '../../routes/url-parser';

export default class InputPage {
  async render() {
    const url = parseActivePathname();
    const type = url.id; // 'bapb' atau 'bapp'
    const isBarang = type === 'bapb';
    
    const title = isBarang ? 'Input BAPB (Barang)' : 'Input BAPP (Jasa)';
    const itemLabel = isBarang ? 'Nama Barang' : 'Nama Jasa/Pekerjaan';
    const item1 = isBarang ? 'MacBook Pro M3 14"' : 'Pembuatan Website Profile';
    const item2 = isBarang ? 'Monitor Dell 27"' : 'Maintenance Server Bulanan';
    const unit = isBarang ? 'Unit' : 'Paket';

    return `
      <div class="flex justify-between items-center mb-6">
          <div>
              <h2 class="text-2xl font-bold text-slate-800">${title}</h2>
              <p class="text-slate-500">PO-2025-001 • PT. Teknologi Maju</p>
          </div>
          <button onclick="history.back()" class="text-slate-500 hover:text-slate-800 flex items-center gap-2">
              <i class="ph ph-arrow-left"></i> Kembali
          </button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-1 space-y-6">
              <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                  <div class="flex items-center gap-3 mb-3">
                      <div class="bg-indigo-600 text-white p-2 rounded-lg"><i class="ph ph-magic-wand text-xl"></i></div>
                      <h3 class="font-bold text-indigo-900">AI Auto-Scan</h3>
                  </div>
                  <p class="text-indigo-700 text-sm mb-4">Upload foto dokumen pendukung (Surat Jalan/Berita Acara Lapangan), AI akan mengisi data otomatis.</p>
                  <input type="file" id="suratJalanInput" class="hidden" accept="image/*">
                  <button id="btn-ai-scan" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition flex justify-center items-center gap-2 shadow-md">
                      <i class="ph ph-camera"></i> <span>Scan Dokumen</span>
                  </button>
                  <p id="ai-status" class="text-center text-xs text-indigo-500 mt-2 hidden">Sedang menganalisis gambar...</p>
              </div>
          </div>

          <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <form id="form-input">
                  <div class="border rounded-lg p-4 bg-slate-50/50 mb-4">
                      <div class="flex justify-between mb-2">
                          <h4 class="font-bold text-slate-800">${item1}</h4>
                          <span class="text-sm text-slate-500">Order: 10 ${unit}</span>
                      </div>
                      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div><label class="text-xs text-slate-500 block mb-1">Diterima/Progress</label><input type="number" id="qty_1" class="w-full border p-2 rounded" placeholder="0"></div>
                          <div><label class="text-xs text-slate-500 block mb-1">Kondisi/Hasil</label><select id="cond_1" class="w-full border p-2 rounded bg-white"><option value="good">Baik / Sesuai</option><option value="bad">Rusak / Revisi</option></select></div>
                          <div class="col-span-2"><label class="text-xs text-slate-500 block mb-1">Catatan</label><input type="text" id="note_1" class="w-full border p-2 rounded" placeholder="..."></div>
                      </div>
                  </div>
                  <div class="border rounded-lg p-4 bg-slate-50/50 mb-4">
                      <div class="flex justify-between mb-2">
                          <h4 class="font-bold text-slate-800">${item2}</h4>
                          <span class="text-sm text-slate-500">Order: 5 ${unit}</span>
                      </div>
                      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div><label class="text-xs text-slate-500 block mb-1">Diterima/Progress</label><input type="number" id="qty_2" class="w-full border p-2 rounded" placeholder="0"></div>
                          <div><label class="text-xs text-slate-500 block mb-1">Kondisi/Hasil</label><select id="cond_2" class="w-full border p-2 rounded bg-white"><option value="good">Baik / Sesuai</option><option value="bad">Rusak / Revisi</option></select></div>
                          <div class="col-span-2"><label class="text-xs text-slate-500 block mb-1">Catatan</label><input type="text" id="note_2" class="w-full border p-2 rounded" placeholder="..."></div>
                      </div>
                  </div>
                  <div class="flex justify-end gap-3 pt-6 border-t">
                      <button type="button" onclick="history.back()" class="px-6 py-2 border rounded-lg text-slate-600 hover:bg-gray-50">Batal</button>
                      <button type="submit" class="px-6 py-2 bg-slate-900 text-white rounded-lg shadow-lg">Submit Data</button>
                  </div>
              </form>
          </div>
      </div>
    `;
  }

  async afterRender() {
    const btnScan = document.getElementById('btn-ai-scan');
    const inputScan = document.getElementById('suratJalanInput');
    const status = document.getElementById('ai-status');

    // Logic AI Scan
    btnScan.addEventListener('click', () => inputScan.click());
    inputScan.addEventListener('change', () => {
        if (inputScan.files && inputScan.files[0]) {
            btnScan.innerHTML = `<i class="ph ph-spinner animate-spin"></i> Scanning...`;
            btnScan.disabled = true;
            status.classList.remove('hidden');

            setTimeout(() => {
                document.getElementById('qty_1').value = 10;
                document.getElementById('note_1').value = "Verified by AI Scan (99% Confidence)";
                document.getElementById('qty_2').value = 5;
                document.getElementById('note_2').value = "Verified by AI Scan (98% Confidence)";

                btnScan.innerHTML = `<i class="ph ph-check"></i> Selesai!`;
                btnScan.classList.replace('bg-indigo-600', 'bg-green-600');
                status.innerHTML = "Data berhasil diekstrak!";
                status.classList.add('text-green-600');
            }, 1500);
        }
    });

    // Form Submit
    document.getElementById('form-input').addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Data berhasil disimpan ke sistem!");
        window.location.hash = '#/bapb'; 
    });
  }
}