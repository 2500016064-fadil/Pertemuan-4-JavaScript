// Menunggu seluruh elemen dimuat, lalu pasang event listener ke semua tombol operasi
const tombolOperasi = document.querySelectorAll(".tombol-operasi button");
tombolOperasi.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    hitung(this.dataset.op);
  });
});

// Fungsi untuk melakukan operasi perhitungan
function hitung(operasi) {
  // Mengambil nilai dari kedua input field
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let hasilEl = document.getElementById("hasil");

  // Validasi: pastikan kedua input berisi angka yang valid
  if (isNaN(angka1) || isNaN(angka2)) {
    tampilkanPesan(hasilEl, "Harap masukkan kedua angka dengan benar!", true);
    return;
  }

  let hasil;

  // Melakukan operasi yang sesuai
  switch (operasi) {
    case "+":
      hasil = angka1 + angka2;
      break;
    case "-":
      hasil = angka1 - angka2;
      break;
    case "*":
      hasil = angka1 * angka2;
      break;
    case "/":
      // Menangani pembagian dengan nol
      if (angka2 === 0) {
        tampilkanPesan(hasilEl, "Tidak bisa membagi dengan nol!", true);
        return;
      }
      hasil = angka1 / angka2;
      break;
  }

  // Menampilkan hasil pada halaman
  tampilkanPesan(hasilEl, angka1 + " " + operasi + " " + angka2 + " = " + hasil, false);
}

// Untuk menampilkan pesan (normal atau error)
function tampilkanPesan(el, pesan, isError) {
  el.textContent = pesan;
  el.classList.toggle("error", isError);
}