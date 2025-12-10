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
            const dop_info = document.createElement('span');
            const qrCanvas = document.createElement('canvas');
            const text = document.createElement('span');
            dop_info.innerText = this.info['donnate'][this.el.id].dop_info;
            text.innerText =  this.info['donnate'][this.el.id].qr_code;
            dop_info.classList.add('text-qr');
            text.classList.add('text-qr');
            const coppy_button = document.createElement('button');
            coppy_button.classList.add('coppy_button');
            coppy_button.innerText = '📑';
            new QRious({
                element: qrCanvas,
                value: this.info['donnate'][this.el.id].qr_code,
                size:180
            });

            const coppyText = (e) => {
                navigator.clipboard.writeText(this.info['donnate'][this.el.id].qr_code)
                    .then(()=> console.log('text copied...'))
                    .catch(err => console.log(err));
            };
            coppy_button.addEventListener('click', coppyText);
            coppy_button.addEventListener('touchend', coppyText);

            dinate_div.append(qrCanvas,text,coppy_button);

        }catch(err){    
            console.log(err);
        }
    }
}