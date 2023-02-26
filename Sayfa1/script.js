let baglantilar = document.querySelectorAll("div#menu a")


baglantilar.forEach( (eleman,indeks)=>{
    eleman.addEventListener( 'click', olay=>{
        olay.preventDefault()//a veya form etiketi default davranışını durdurur#'dan dolayı bu kodu ekledik
        
       
        //mevcut aktif bağlantı classını kaldıralım
        let aktifBaglanti = document.querySelector("a.aktif")
        aktifBaglanti.classList.remove("aktif")

        //tıklanan a etiketine aktif classı ekle
        let tiklananEleman = olay.currentTarget
        tiklananEleman.classList.add("aktif")
       
        let divno = tiklananEleman.dataset.divno//alınan veriler string tipindedir.

       //mevcut aktif içerik classını kaldıralım
       let aktifDiv = document.querySelector("div.aktif")
       aktifDiv.classList.remove("aktif")
/*
       let aktiflestirilecekIcerik = document.querySelector("#icerik" + divno)
       aktiflestirilecekIcerik.classList.add("aktif")*/

       let icerikDivleri = document.querySelectorAll(".icerik")
        icerikDivleri.forEach( (eleman, elemanSirasi)=>{
            if ( elemanSirasi + 1 === parseInt(divno)) {
                eleman.classList.add('aktif')
            }
        } )

    } )
} )