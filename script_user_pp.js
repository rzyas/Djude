const fotoProfil = document.getElementById('usr_pp');
const tombolGanti = document.getElementById('ganti_usr_pp');
const fileInput = document.getElementById('file_input');

// Tambahkan event listener untuk tombol "GANTI"
tombolGanti.addEventListener('click', function() {
    fileInput.click(); // Klik input file ketika tombol "GANTI" ditekan
});

// Tambahkan event listener untuk perubahan pada input file
fileInput.addEventListener('change', function() {
    const file = fileInput.files[0]; // Ambil file yang dipilih oleh pengguna
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            fotoProfil.src = e.target.result; // Setel src gambar ke data URL dari file yang dipilih
        }
        reader.readAsDataURL(file); // Baca file sebagai URL data
    }
});