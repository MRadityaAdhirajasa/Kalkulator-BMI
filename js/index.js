// deklarasi variabel
var heightInput = document.getElementById("height-input-field");
var weightInput = document.getElementById("weight-input-field");
var ageInput = document.getElementById("age-input-field");
var calculateButton = document.querySelector(".calculate");
let result = document.querySelector(".result");
var male = document.getElementById("p");
var female = document.getElementById("w");
var statement = document.querySelector(".result-statement");
var statement2 = document.querySelector(".result-statement2");
var statement3 = document.querySelector(".result-statement3");
var statement4 = document.querySelector(".result-statement4");
var statement5 = document.querySelector(".result-statement5");
var statement6 = document.querySelector(".result-statement6");
var BMI, height, weight, BMIfix;

// calculatebutton digunakan agar ketika tombol calculate/hitung ditekan perintah di dalamnya akan dijalankan
calculateButton.addEventListener("click", ()=>{
    
        // jika kolom input kosong akan menampilkan pesan peringatan jika tidak hitung dijalankan
        if(!heightInput.value || !weightInput.value || !ageInput.value || (male.checked==false && female.checked==false)){
            alert("Mohon isi semua data");
            
        } else {
        // push data dari radio 
            var a = [heightInput.value, weightInput.value, ageInput.value];
            if (male.checked){
                a.push("male");
            }else if (female.checked){
                a.push("female");
            }

        // menghitung hasil BMI
        height = heightInput.value * 0.01;
        weight = weightInput.value;
        BMI = weight/(height*height); 
        BMIfix = BMI.toFixed(1);
        result.innerText = BMIfix;
             
            // hasil akan berbeda tergantung dari hasil BMI
            if(BMI < 18.5){
                statement.innerText = "Berat Badan Kurang";    
                statement2.innerText = "Anda memiliki berat badan kurang";
                statement3.innerText = "Hasil BMI kurang dari 18.5";
                statement4.innerText = "Anda berada dalam kategori underweight atau kekurangan.\n Cara terbaik untuk menaikkan berat badan adalah dengan menambah kalori makanan yang masuk dan berolahraga.\n Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
                statement5.innerText = "Beberapa penyakit yang berasal dari kekurangan berat badan";
                statement6.innerText = "Diabetes\n Hipertensi\n Patah Tulang\n Sakit Paru-paru";
            }else if((BMI > 18.5) && (BMI <= 24.9)){
                statement.innerText = "Ideal";
                statement2.innerText = "Anda memiliki berat badan normal";
                statement3.innerText = "Hasil BMI diantara 18.5 dan 24.9";
                statement4.innerText = "Anda berada dalam kategori normal.\n Tetap jaga tubuh anda dengan mengatur kalori makanan yang masuk dan berolahraga.";
                statement5.innerText = "Beberapa penyakit yang berasal dari kegemukan";
                statement6.innerText = "Diabetes\n Hipertensi\n Sakit Jantung\n Osteoarthritis";
            }else if((BMI >= 25) && (BMI <= 29.9 )){
                statement.innerText = "Berat Badan Lebih";
                statement2.innerText = "Anda memiliki berat badan lebih";
                statement3.innerText = "Hasil BMI diantara 25.0 dan 29.9";
                statement4.innerText = "Anda berada dalam kategori overweight atau berlebih.\n Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang masuk dan berolahraga.\n Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
                statement5.innerText = "Beberapa penyakit yang berasal dari kegemukan";
                statement6.innerText = "Diabetes\n Hipertensi\n Sakit Jantung\n Osteoarthritis";
            }else{
                statement.innerText = "Obesitas";
                statement2.innerText = "Anda memiliki berat badan kegemukan";
                statement3.innerText = "Hasil BMI lebih dari 30.0";
                statement4.innerText = "Anda berada dalam kategori overweight atau berlebih.\n Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang masuk dan berolahraga.\n Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
                statement5.innerText = "Beberapa penyakit yang berasal dari kegemukan";
                statement6.innerText = "Diabetes\n Hipertensi\n Sakit Jantung\n Osteoarthritis";
            }
    }
});

// digunakan agar hanya bisa mengisi angka pasa kolom input
function checkNumber(event) {

    var aCode = event.which ? event.which : event.keyCode;
    
    if (aCode > 31 && (aCode < 48 || aCode > 57)) return false;
    
    return true;
    
    }