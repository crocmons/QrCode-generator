const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const qrGenerateSubmit =(e)=>{
     e.preventDefault()

     clearUI()
    
     const url = document.getElementById('url').value;
     const size = document.getElementById('size').value;
     
     if(url === ''){
        alert('Please Enter a URL')
     }else{
        showSpinner();
       
        setTimeout(()=>{
            hideSpinner();
            
            generateQRCode(url,size);

            setTimeout(()=>{
               const saveurl = qr.querySelector('img').src;
               createSaveBtn(saveurl)
            },50)


        },1000)
     }
    

}




const clearUI =()=>{
 qr.innerHTML = '';
 const saveBtn = document.getElementById('save-link')
 if(saveBtn){
    saveBtn.remove()
 }
}

const showSpinner=()=>{
 const show = document.getElementById('spinner');
 show.style.display = 'block';
}

const hideSpinner=()=>{
    const hide = document.getElementById('spinner');
    hide.style.display = 'none';
}

const generateQRCode = (url,size)=>{
      const generateQR = new QRCode('qrcode',{
            text:url,
            width:size,
            height:size
      })
}


const createSaveBtn =(saveurl)=>{
      const link = document.createElement('a');
      link.id = 'save-link';
      link.classList = 'bg-red-500 hover:bg-green-600 text-white font-bold py-2 rounded w-1/2 md:w-1/3 m-auto my-5';
      link.href = saveurl;
      link.download = 'QR Code'
      link.innerText = 'Save QR Code Image'
      document.getElementById('generated').appendChild(link);
}

hideSpinner();

form.addEventListener('submit', qrGenerateSubmit);