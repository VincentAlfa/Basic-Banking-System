let saldo = 1_000_000;

function tambahSaldo() {
  const tambah = parseFloat(prompt('Masukkan jumlah saldo yang ingin ditambahkan:'));

  if (!isNaN(tambah) && tambah > 0) {
    saldo += tambah;
    alert(`Saldo berhasil ditambahkan. Saldo saat ini: Rp${saldo.toFixed(2)}`);
  } else {
    alert('Input tidak valid. Masukkan angka yang benar.');
  }
}

function kurangiSaldo() {
  const kurangi = parseFloat(prompt('Masukkan jumlah saldo yang ingin dikurangi:'));

  if (!isNaN(kurangi) && kurangi > 0) {
    if (kurangi <= saldo) {
      saldo -= kurangi;
      alert(`Saldo berhasil dikurangi. Saldo saat ini: Rp${saldo.toFixed(2)}`);
    } else {
      alert('Saldo tidak mencukupi untuk melakukan pengurangan ini.');
    }
  } else {
    alert('Input tidak valid. Masukkan angka yang benar.');
  }
}

function pilihOperasi() {
  const pilihan = prompt('Pilih operasi:\n1. Tambah Saldo\n2. Kurangi Saldo');

  if (pilihan === '1') {
    tambahSaldo();
  } else if (pilihan === '2') {
    kurangiSaldo();
  } else {
    alert('Pilihan tidak valid. Silakan pilih 1 atau 2.');
  }
}

pilihOperasi();
