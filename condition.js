const myPromise = new Promise(function (resolve, reject) {
  let nama = "rivaldo"; // menambahkan nilai variable yang dimaksud (nama kita)

  if (nama == "Rivaldo") {
    resolve(); // logika untuk resolve
  } else {
    reject(); //logika untuk reject
  }
});

myPromise
  .then(function (result) { 
    // hasil jika nama masuk kedalam nilai resolve
    console.log("Nama Saya Benar!");
  })
  .catch(function (error) {
    // hasil jika nama masuk kedalam nilai reject
    console.log("Nama Saya Tidak Benar.");
  })
  .finally(function () {
    // teks yang akan selalu di print tanpa melihat atau terpanggil karena suatu kondisi
    console.log("Sistem promise itu telah selesai berjalan.");
  });
