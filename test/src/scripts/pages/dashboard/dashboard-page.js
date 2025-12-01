export default class DashboardPage {
  async render() {
    return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center hover:shadow-md transition">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4"><i class="ph ph-files text-2xl"></i></div>
              <div><p class="text-slate-500 text-sm">Total Dokumen</p><h3 class="text-2xl font-bold text-slate-800">142</h3></div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center hover:shadow-md transition">
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mr-4"><i class="ph ph-clock text-2xl"></i></div>
              <div><p class="text-slate-500 text-sm">Perlu Approval</p><h3 class="text-2xl font-bold text-slate-800">5 <span class="text-xs font-normal text-slate-400">(Urgent)</span></h3></div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center hover:shadow-md transition">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4"><i class="ph ph-check-circle text-2xl"></i></div>
              <div><p class="text-slate-500 text-sm">Selesai Bulan Ini</p><h3 class="text-2xl font-bold text-slate-800">38</h3></div>
          </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 class="font-bold text-slate-700">Action Needed</h3>
          </div>
          <table class="w-full text-left">
              <thead class="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <tr>
                      <th class="px-6 py-4 font-semibold">No. PO</th>
                      <th class="px-6 py-4 font-semibold">Vendor</th>
                      <th class="px-6 py-4 font-semibold">Status</th>
                      <th class="px-6 py-4 text-right">Aksi</th>
                  </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-sm">
                  <tr class="hover:bg-slate-50 transition">
                      <td class="px-6 py-4 font-medium">PO-2025-001</td>
                      <td class="px-6 py-4">PT. Teknologi Maju</td>
                      <td class="px-6 py-4"><span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">Draft</span></td>
                      <td class="px-6 py-4 text-right"><a href="#/bapb" class="text-blue-600 hover:underline">Edit</a></td>
                  </tr>
              </tbody>
          </table>
      </div>
    `;
  }

  async afterRender() {
    document.getElementById('page-title').innerText = "Dashboard Overview";
  }
}