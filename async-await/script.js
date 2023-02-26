let anaEtiket = document.querySelector("#ana-etiket")

/*

...
...
...

*/

/*
let zamanAlanIsler = new Promise( function(basarili, basarisiz) {
        //....
        //...
        //..

        basarili("Tüm işlemler tamamlandı")
 } )
*/

async function zamanAlanIsler() {
    //...
    //..
    //..

    throw new Error("İşlemler sırasında hata oluştu..")

    return "Tüm işlemler tamamlandı"
}

zamanAlanIsler().
then( bilgi=>{
    console.log("zaman alan işler bitmiş..")
    anaEtiket.textContent = bilgi
} )
.catch( (mesaj)=>{
    alert("Bir hata oluştu: " + mesaj)
} )