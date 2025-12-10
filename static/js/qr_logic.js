export class qr{
    constructor(el,info){
        this.el = el;
        this.info = info;
    }

    start(){
        try{
            const dinate_div = document.querySelector('.qr_div');
            if(dinate_div){
                dinate_div.innerHTML = '';
            };
            const qrCanvas = document.createElement('canvas');
            const text = document.createElement('span');
            text.innerText =  this.info['donnate'][this.el.id].qr_code;
            text.classList.add('text-qr');
            const coppy_button = document.createElement('button');
            coppy_button.classList.add('coppy_button');
            coppy_button.innerText = 'Copy';
            new QRious({
                element: qrCanvas,
                value: this.info['donnate'][this.el.id].qr_code,
                size:180
            });

            coppy_button.addEventListener('click',()=>{
                navigator.clipboard.writeText(this.info['donnate'][this.el.id].qr_code)
                .then(()=>{
                    console.log('text coppy...');
                })
                .catch(err=>{
                    console.log(err);
                });
            });
            dinate_div.append(qrCanvas,text,coppy_button);

        }catch(err){    
            console.log(err);
        }
    }
}