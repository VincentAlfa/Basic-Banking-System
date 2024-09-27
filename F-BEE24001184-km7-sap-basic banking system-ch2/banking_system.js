class BankAccount {
  constructor(initialSaldo) {
    this.saldo = initialSaldo;
  }

  async deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isNaN(amount) && amount > 0) {
          this.saldo += amount;
          resolve(`Saldo berhasil ditambahkan. Saldo saat ini: Rp${this.saldo.toFixed(2)}`);
        } else {
          reject('Input tidak valid. Masukkan angka yang benar.');
        }
      }, 2000);
    });
  }

  async withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isNaN(amount) && amount > 0) {
          if (amount <= this.saldo) {
            this.saldo -= amount;
            resolve(`Saldo berhasil dikurangi. Saldo saat ini: Rp${this.saldo.toFixed(2)}`);
          } else {
            reject('Saldo tidak mencukupi untuk melakukan pengurangan ini.');
          }
        } else {
          reject('Input tidak valid. Masukkan angka yang benar.');
        }
      }, 2000);
    });
  }
}

async function pilihOperasi() {
  const bankAccount = new BankAccount(1_000_000);
  const pilihan = prompt('Pilih operasi:\n1. Deposit\n2. Withdraw');

  try {
    if (pilihan === '1') {
      const tambah = parseFloat(prompt('Masukkan jumlah saldo yang ingin ditambahkan:'));
      const message = await bankAccount.deposit(tambah);
      alert(message);
    } else if (pilihan === '2') {
      const kurangi = parseFloat(prompt('Masukkan jumlah saldo yang ingin dikurangi:'));
      const message = await bankAccount.withdraw(kurangi);
      alert(message);
    } else {
      alert('Pilihan tidak valid. Silakan pilih 1 atau 2.');
    }
  } catch (error) {
    alert(error);
  }
}

pilihOperasi();
