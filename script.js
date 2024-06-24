
    var qr_text=document.querySelector(".qr_texte");
    let submit=document.getElementById('submit');

    function generateur(){
       var qrCode=document.querySelector(".qr_code");
       qrCode.style.display="flex";
       qrCode.innerHTML=""; 
       new QRCode(qrCode , qr_text.value);
      //  qr_text.value="";
    }