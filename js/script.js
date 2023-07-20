// Menambahkan fungsi submit
function submit() {
    const berat = document.getElementById("weight");
    const tinggi = document.getElementById("height");
    const hasil = document.getElementById("hasil");
    const deskripsi = document.getElementById("deskripsi")
    const kategori = document.getElementById("kategori")
    const bmi = Number(berat.value) / (Number(tinggi.value) / 100) ** 2;
    hasil.value = bmi.toFixed(1);

// Menambahkan if else if untuk memberikan deskripsi BMI
        if (bmi < 18.5) {
            deskripsi.innerHTML = "Kekurangan Berat Badan";
          } else if (bmi >= 18.5 && bmi < 24.9) {
            deskripsi.innerHTML = "Normal(ideal)";
          } else if (bmi >= 25.0 && bmi < 29.9) {
            deskripsi.innerHTML = "Kelebihan Berat Badan";
          } else if(bmi > 30) {
            deskripsi.innerHTML = "Kegemukan(Obesitas)";
          } 
// Menambahkan if else if untuk memberikan kategori BMI
        if (bmi < 18.5) {
            kategori.innerHTML = "Anda memiliki berat badan kurang";
          } else if (bmi >= 18.5 && bmi < 24.9) {
            kategori.innerHTML = "Anda memiliki berat badan normal";
          } else if (bmi >= 25.0 && bmi < 29.9) {
            kategori.innerHTML = "Anda memiliki berat badan lebih";
          } else if(bmi > 30) {
            kategori.innerHTML = "Anda memiliki berat badan berlebih";
          } 
}
