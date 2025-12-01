export default class DashboardPage {
  async render() {
    return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center hover:shadow-md transition cursor-pointer">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 shadow-sm">
                  <i class="ph ph-files text-2xl"></i>
              </div>
              <div>
                  <p class="text-slate-500 text-sm font-medium">Total Dokumen</p>
                  <h3 class="text-2xl font-bold text-slate-800">142</h3>
              </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center hover:shadow-md transition cursor-pointer relative overflow-hidden">
              <div class="absolute right-0 top-0 w-16 h-16 bg-yellow-50 rounded-bl-full -mr-2 -mt-2"></div>
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mr-4 shadow-sm z-10">
                  <i class="ph ph-clock text-2xl"></i>
              </div>
              <div class="z-10">
                  <p class="text-slate-500 text-sm font-medium">Perlu Approval</p>
                  <h3 class="text-2xl font-bold text-slate-800 flex items-center">
                      5 <span class="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">Urgent</span>
                  </h3>
              </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center hover:shadow-md transition cursor-pointer">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4 shadow-sm">
                  <i class="ph ph-check-circle text-2xl"></i>
              </div>
              <div>
                  <p class="text-slate-500 text-sm font-medium">Selesai Bulan Ini</p>
                  <h3 class="text-2xl font-bold text-slate-800">38</h3>
              </div>
          </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div class="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                  <h3 class="font-bold text-slate-800 text-lg">Action Needed</h3>
                  <p class="text-slate-500 text-xs">Dokumen yang memerlukan tindak lanjut segera.</p>
              </div>
              <a href="#/input/bapb" class="flex items-center bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm transition shadow-md">
                  <i class="ph ph-plus-circle text-lg mr-2"></i> Input Cepat
              </a>
          </div>
          
          <div class="overflow-x-auto">
              <table class="w-full text-left">
                  <thead class="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
                      <tr>
                          <th class="px-6 py-4 font-semibold">No. PO</th>
                          <th class="px-6 py-4 font-semibold">Vendor / Mitra</th>
                          <th class="px-6 py-4 font-semibold">Kategori</th>
                          <th class="px-6 py-4 font-semibold">Status</th>
                          <th class="px-6 py-4 text-right font-semibold">Aksi</th>
                      </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 text-sm">
                      <tr class="hover:bg-blue-50/30 transition group">
                          <td class="px-6 py-4 font-medium text-slate-700">PO-2025-001</td>
                          <td class="px-6 py-4">
                              <div class="font-medium text-slate-800">PT. Teknologi Maju</div>
                              <div class="text-xs text-slate-500">Hardware IT</div>
                          </td>
                          <td class="px-6 py-4">
                              <span class="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100 text-xs">
                                  <i class="ph ph-package"></i> Barang
                              </span>
                          </td>
                          <td class="px-6 py-4">
                              <span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold flex w-fit items-center gap-1">
                                  <span class="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span> Draft
                              </span>
                          </td>
                          <td class="px-6 py-4 text-right">
                              <a href="#/input/bapb" class="text-blue-600 hover:text-blue-800 font-medium hover:underline flex items-center justify-end gap-1">
                                  Proses BAPB <i class="ph ph-arrow-right"></i>
                              </a>
                          </td>
                      </tr>

                      <tr class="hover:bg-blue-50/30 transition group">
                          <td class="px-6 py-4 font-medium text-slate-700">PO-2025-045</td>
                          <td class="px-6 py-4">
                              <div class="font-medium text-slate-800">CV. Berkah Abadi</div>
                              <div class="text-xs text-slate-500">Jasa Maintenance</div>
                          </td>
                          <td class="px-6 py-4">
                              <span class="inline-flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-1 rounded border border-purple-100 text-xs">
                                  <i class="ph ph-briefcase"></i> Jasa
                              </span>
                          </td>
                          <td class="px-6 py-4">
                              <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold border border-gray-200">
                                  Pending
                              </span>
                          </td>
                          <td class="px-6 py-4 text-right">
                              <a href="#/input/bapp" class="text-blue-600 hover:text-blue-800 font-medium hover:underline flex items-center justify-end gap-1">
                                  Proses BAPP <i class="ph ph-arrow-right"></i>
                              </a>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          
          <div class="p-4 border-t border-slate-100 bg-slate-50/50 text-center">
              <button class="text-sm text-slate-500 hover:text-blue-600 font-medium transition">Lihat Semua Dokumen</button>
          </div>
      </div>
    `;
  }

  async afterRender() {
    // Update judul header aplikasi secara dinamis saat halaman ini dimuat
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.innerText = "Dashboard Overview";
    }
  }
}