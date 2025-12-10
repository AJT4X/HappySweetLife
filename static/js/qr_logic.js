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
            coppy_button.innerText = '📑';
            new QRious({
                element: qrCanvas,
                value: this.info['donnate'][this.el.id].qr_code,
                size:180
            });

            const coppyText = (e) => {
            const textToCopy = this.info['donnate'][this.el.id].qr_code;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                
                navigator.clipboard.writeText(textToCopy)
                    .then(() => console.log('text copied (clipboard API)'))
                    .catch(err => console.log(err));
            } else {
                
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    const successful = document.execCommand('copy');
                    if (successful) console.log('text copied (fallback)');
                } catch (err) {
                    console.log('fallback copy failed', err);
                }
                document.body.removeChild(textArea);
            }
        };
            coppy_button.addEventListener('click', coppyText);
            coppy_button.addEventListener('touchend', coppyText);

            dinate_div.append(qrCanvas,text,coppy_button);

        }catch(err){    
            console.log(err);
        }
    }
}