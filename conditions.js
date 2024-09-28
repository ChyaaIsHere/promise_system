const myPromise = new Promise(function (resolve, reject) {
  let nama = "rivaldo";

  if (nama == "Rivaldo") {
    resolve();
  } else {
    reject();
  }
});

myPromise
  .then(function (result) {
    console.log("Nama Saya Benar!");
  })
  .catch(function (error) {
    console.log("Nama Saya Tidak Benar.");
  })
  .finally(function () {
    console.log("Sistem promise telah selesai berjalan.");
  });
