export default class ApprovalPage {
  async render() {
    return `
      <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-slate-800">Approval Dokumen</h2>
          <a href="#/" class="text-slate-500 hover:text-slate-800 flex items-center gap-2"><i class="ph ph-arrow-left"></i> Kembali</a>
      </div>
      <div class="flex flex-col lg:flex-row gap-8 h-[600px]">
          <div class="flex-1 bg-slate-500 rounded-xl flex items-center justify-center relative p-8">
              <div class="bg-white w-[400px] h-[500px] shadow-2xl p-8 relative flex flex-col text-[10px]">
                  <h1 class="text-center font-bold text-lg mb-4 border-b pb-2">BERITA ACARA</h1>
                  <p>Telah diterima pekerjaan website...</p>
                  <div class="mt-auto flex justify-between pt-10">
                      <div class="text-center w-24 border-t border-black">Pihak 1</div>
                      <div class="text-center w-24 border-t border-black relative">Pihak 2 <img id="signature-preview" class="absolute bottom-2 left-0 w-full hidden"></div>
                  </div>
              </div>
          </div>
          <div class="w-full lg:w-96 bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col">
              <div class="p-6 border-b"><h3 class="font-bold">Panel Tanda Tangan</h3></div>
              <div class="p-6 flex-1 flex flex-col">
                  <div class="flex-1 bg-slate-50 border-2 border-dashed rounded-lg touch-none relative" id="signature-pad-container">
                      <canvas id="signature-pad" class="w-full h-full cursor-crosshair"></canvas>
                  </div>
                  <button id="clear-sig" class="text-red-500 text-xs mt-2 text-right">Hapus</button>
              </div>
              <div class="p-6 border-t flex gap-3">
                  <button id="approve-btn" class="flex-1 py-2 bg-green-600 text-white rounded-lg font-bold shadow-md">Approve & Sign</button>
              </div>
          </div>
      </div>
    `;
  }

  async afterRender() {
    document.getElementById('page-title').innerText = "Approval & E-Sign";
    this._initSignaturePad();
  }

  _initSignaturePad() {
    const canvas = document.getElementById('signature-pad');
    if(!canvas) return;
    
    // Resize canvas agar sesuai container
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    let isDrawing = false;

    const start = (e) => { isDrawing = true; draw(e); };
    const move = (e) => { e.preventDefault(); draw(e); };
    const end = () => { isDrawing = false; ctx.beginPath(); };

    const draw = (e) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || e.pageX) - rect.left;
        const y = (e.clientY || e.pageY) - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', move);
    canvas.addEventListener('mouseup', end);
    canvas.addEventListener('touchstart', (e) => start(e.touches[0]));
    canvas.addEventListener('touchmove', (e) => move(e.touches[0]));
    canvas.addEventListener('touchend', end);

    document.getElementById('clear-sig').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    document.getElementById('approve-btn').addEventListener('click', () => {
        const signatureImage = canvas.toDataURL();
        const preview = document.getElementById('signature-preview');
        preview.src = signatureImage;
        preview.classList.remove('hidden');
        alert("Dokumen berhasil ditandatangani!");
    });
  }
}