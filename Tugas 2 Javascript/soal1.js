const prompt = require('prompt-sync')({ sigint: true });

console.log('Menghitung Nilai Akar Pangkat 2');
const inputUser = prompt('Masukkan Bilangan Genap : ')

console.log(hitungAkar(parseInt(inputUser)));

function hitungAkar(x){
    // Pengecekan jika bilangan kurang dari 0
    if (x < 0) {
        return "Error : Tidak bisa input bilangan negatif";
    }
    
    // Pengecekan jika bilangan ganjil
    if (x % 2 !== 0) {
        return "Error : Tidak bisa input bilangan ganjil";
    }
    
    // Jika bilangan genap dan tidak negatif, hitung akar pangkat 2
    return 'Akar pangkat 2 dari '+x+' adalah = '+Math.sqrt(x);;
 }