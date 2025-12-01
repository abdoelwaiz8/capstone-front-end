export default class BapbPage {
  async render() {
    return `
      <div class="bg-white rounded-xl shadow-sm border border-slate-200">
          <div class="p-6 border-b border-slate-100 flex justify-between items-center">
              <div class="flex gap-4">
                  <input type="text" placeholder="Cari No. PO / Vendor..." class="pl-4 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64">
              </div>
              <button class="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-800 transition shadow">
                  + Buat BAPB Baru
              </button>
          </div>
          <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-500 border-b border-slate-200">
                  <tr>
                      <th class="px-6 py-3 font-semibold">No. Dokumen</th>
                      <th class="px-6 py-3 font-semibold">Vendor</th>
                      <th class="px-6 py-3 font-semibold">Tgl. Terima</th>
                      <th class="px-6 py-3 font-semibold">Status</th>
                  </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                  <tr class="hover:bg-slate-50 group transition cursor-pointer">
                      <td class="px-6 py-4 font-medium text-slate-800">BAPB-XI/2025/001</td>
                      <td class="px-6 py-4">PT. Sinar Jaya</td>
                      <td class="px-6 py-4 text-slate-500">24 Nov 2025</td>
                      <td class="px-6 py-4"><span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">Disetujui</span></td>
                  </tr>
              </tbody>
          </table>
      </div>
    `;
  }

  async afterRender() {
    document.getElementById('page-title').innerText = "Daftar Berita Acara (BAPB)";
  }
}