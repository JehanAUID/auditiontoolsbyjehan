// Tabel EXP Ayodance level 0–200 (dari kamu)
const expTable = [
0,220,1260,3480,7140,12500,19695,29000,40500,54500,71000,90000,112000,137000,65000,196000,
230500,268500,310000,354500,403500,456000,512000,572000,637000,705500,778000,855500,937000,
1023000,1113500,1208500,1308500,1413500,1523000,1638000,1757500,1882500,2012000,2147500,
2288000,2434000,2585000,2742000,2904500,3072500,3246500,3426000,3611000,3802500,4000000,
4300000,4650000,5000000,5400000,5850000,6350000,6900000,7500000,7850000,8400000,9000000,
9600000,10250000,10900000,11600000,12350000,13150000,14000000,14900000,15850000,16850000,
17850000,18850000,19850000,21850000,23850000,25850000,27850000,29850000,32850000,35850000,
38850000,41850000,44850000,48850000,52850000,56850000,60850000,64850000,69850000,74850000,
79850000,84850000,89850000,95850000,101850000,107850000,113850000,119850000,126850000,
133850000,140850000,147850000,154850000,162850000,170850000,178850000,186850000,194850000,
203850000,212850000,221850000,230850000,239850000,249850000,259850000,269850000,279850000,
289850000,300850000,311850000,322850000,333850000,344850000,357850000,370850000,383850000,
396850000,409850000,424850000,439850000,454850000,469850000,484850000,501850000,518850000,
535850000,552850000,569850000,588850000,607850000,626850000,645850000,664850000,685850000,
706850000,727850000,748850000,769850000,792850000,815850000,838850000,861850000,884850000,
909850000,934850000,959850000,984850000,1009850000,1037850000,1065850000,1093850000,
1121850000,1149850000,1180850000,1211850000,1242850000,1273850000,1304850000,1338850000,
1372850000,1406850000,1440850000,1474850000,1511850000,1548850000,1585850000,1622850000,
1659850000,1699850000,1739850000,1779850000,1819850000,1859850000,1902850000,1945850000,
1988850000,2031850000,2074850000,2120850000,2166850000,2212850000,2258850000,2304850000,
2354850000,2404850000,2454850000,2504850000,2554850000
];

// Update EXP box ketika level diubah
document.getElementById("startLevel").addEventListener("input", function () {
    const lvl = parseInt(this.value, 10);
    if (lvl >= 1 && lvl <= expTable.length) {
        document.getElementById("startExpDisplay").value =
            expTable[lvl - 1].toLocaleString("id-ID");
    }
});

document.getElementById("endLevel").addEventListener("input", function () {
    const lvl = parseInt(this.value, 10);
    if (lvl >= 1 && lvl <= expTable.length) {
        document.getElementById("endExpDisplay").value =
            expTable[lvl - 1].toLocaleString("id-ID");
    }
});


function calculateEXP() {
    const start = parseInt(document.getElementById("startLevel").value, 10);
    const end   = parseInt(document.getElementById("endLevel").value, 10);
    const roundAvg = parseInt(document.getElementById("RoundAverage").value, 10);

    if (isNaN(start) || isNaN(end) || start < 1 || end < 1 || start >= end || end > expTable.length) {
        document.getElementById("result").innerText =
            "Level tidak valid! (Start harus < End, dan max " + expTable.length + ")";
        return;
    }

    // ambil total exp diperlukan
    const expStart = expTable[start - 1];
    const expEnd   = expTable[end   - 1];
    const expNeeded = expEnd - expStart;

    // perhitungan hari
    const expPerPlay = 3300;
    const expPerDay = expPerPlay * roundAvg;
    const daysNeeded = Math.ceil(expNeeded / expPerDay);

    // text ala VB6
    const text = `*Perhitungan ini adalah perhitungan jika menggunakan juara 1 + item berikut : Event, DJ, Mascot, Mark H, Unicorn, iCafe, C9

Dari level ${start} ke level ${end} butuh EXP kurang lebih ${expNeeded.toLocaleString("id-ID")}.

Dengan menggunakan item diatas, exp yang didapatkan sekali play = ${expPerPlay.toLocaleString("id-ID")} EXP.
Jika perhari play ${roundAvg} kali, maka perkiraan selesai adalah ${daysNeeded} hari.

Hal ini hanya perkiraan. Jika kakaknya punya item pet / platform exp 120%, maka akan lebih cepat lagi dari itu.

Kalo mau GB di Jehan harganya J1 200K yaa. J2 100K. 1 room 250K (durasi 30 hari).
Sudah free team C9 exp + Dropbox informasi saat play + bisa on-off tanpa harus pm ke saya (untuk pemesan 1 room).`;

    document.getElementById("result").innerText = text;

}

