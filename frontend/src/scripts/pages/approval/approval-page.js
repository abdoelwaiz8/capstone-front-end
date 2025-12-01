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
                  <p class="text-justify mb-2">Pada hari ini, telah dilakukan serah terima pekerjaan/barang dengan hasil baik dan sesuai spesifikasi yang ditentukan.</p>
                  <p class="text-justify">Dokumen ini sah dan ditandatangani secara digital.</p>
                  <div class="mt-auto flex justify-between pt-10">
                      <div class="text-center w-24 border-t border-black">Pihak 1</div>
                      <div class="text-center w-24 border-t border-black relative">
                        Pihak 2 
                        <img id="signature-preview" class="absolute bottom-2 left-0 w-full hidden z-10 bg-transparent mix-blend-multiply">
                      </div>
                  </div>
              </div>
          </div>

          <div class="w-full lg:w-96 bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col">
              <div class="p-6 border-b flex justify-between items-center">
                <h3 class="font-bold">Panel Tanda Tangan</h3>
              </div>
              
              <div class="p-6 flex-1 flex flex-col">
                  <div class="flex-1 bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg relative overflow-hidden" id="signature-pad-container" style="min-height: 200px;">
                      <canvas id="signature-pad" class="block w-full h-full cursor-crosshair touch-none"></canvas>
                  </div>
                  <button id="clear-sig" class="text-red-500 text-xs mt-2 text-right hover:text-red-700 font-medium cursor-pointer">Hapus & Ulangi</button>
              </div>

              <div class="p-6 border-t flex flex-col gap-3">
                  <button id="approve-btn" class="w-full py-2 bg-green-600 text-white rounded-lg font-bold shadow-md hover:bg-green-700 transition">Approve & Sign</button>
                  
                  <a href="#/" id="back-dashboard-btn" class="hidden w-full py-2 border border-slate-300 text-slate-600 rounded-lg font-bold text-center hover:bg-slate-50 transition">
                    Kembali ke Dashboard
                  </a>
              </div>
          </div>
      </div>
    `;
  }

  async afterRender() {
    setTimeout(() => {
        this._initSignaturePad();
    }, 500);
  }

  _initSignaturePad() {
    const canvas = document.getElementById('signature-pad');
    const container = document.getElementById('signature-pad-container');
    
    if(!canvas || !container) return;
    
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    // --- SETUP UKURAN CANVAS ---
    const resizeCanvas = () => {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#000000";
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // --- LOGIKA GAMBAR ---
    const getPos = (e) => {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;
        return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const startDrawing = (e) => {
        isDrawing = true;
        const pos = getPos(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        if(e.type === 'touchstart') e.preventDefault();
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const pos = getPos(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        if(e.type === 'touchmove') e.preventDefault();
    };

    const stopDrawing = () => {
        isDrawing = false;
        ctx.beginPath();
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);

    // --- BUTTON ACTIONS ---
    document.getElementById('clear-sig').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('signature-preview').classList.add('hidden');
        document.getElementById('back-dashboard-btn').classList.add('hidden');
        document.getElementById('approve-btn').classList.remove('hidden');
    });

    document.getElementById('approve-btn').addEventListener('click', () => {
        const signatureImage = canvas.toDataURL("image/png");
        const preview = document.getElementById('signature-preview');
        
        // Tampilkan hasil di dokumen
        preview.src = signatureImage;
        preview.classList.remove('hidden');
        
        // Ubah tampilan tombol
        const approveBtn = document.getElementById('approve-btn');
        const backBtn = document.getElementById('back-dashboard-btn');
        
        approveBtn.textContent = "✓ Signed";
        approveBtn.classList.replace('bg-green-600', 'bg-slate-400');
        approveBtn.disabled = true;
        
        // Munculkan tombol kembali
        backBtn.classList.remove('hidden');
        
        alert("Dokumen berhasil ditandatangani!");
        // Kita HAPUS redirect otomatis agar user tidak bingung
    });
  }
}