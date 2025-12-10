import { info,config } from './info.js';
import { qr} from './qr_logic.js';


export class Create{
    constructor(main_div){
        this.main_div = main_div;
    };

    createinfo(){
        
        try{
            const span = document.createElement('span');
            span.style.color = 'grey';
            span.innerText = `HappySweetLife cv:${config.version}`;

            this.main_div.append(span);
            for(const block in info){
                console.log(info[block]);
                const div_info = document.createElement('div');
                let img = document.createElement('img');
                
                
                if (info[block].title && info[block].status == 'on'){
                    const info_tet = document.createElement('span');
                    img.src = `static/picsman/` + info[block].img;
                    info_tet.classList.add('info_tet');
                    info_tet.innerHTML = `${info[block].title}&nbsp${info[block].dop_info}`;
                    div_info.append(img,info_tet);
                    div_info.id = info[block].short_name;
                    img.classList.add('img_res');
                    div_info.addEventListener('click',()=>{
                        console.log('click');
                        window.open(info[block].link, "_blank");
                    });

                    div_info.addEventListener('click',()=>{
                                console.log('click');
                                window.open(info[block].link, "_blank");
                            });
                    
                }else if(block === 'donnate'){
                    const div_text = document.createElement('div');
                    div_text.classList.add('Donate_Text_div');
                    const donate_text = document.createElement('spam');
                    donate_text.classList.add('donate_text');
                    donate_text.innerText = 'Donate';

                    div_text.append(donate_text);
                    this.main_div.append(div_text);
                    for (const mini_blocs in info[block]){
                        const donate_div = document.createElement('div');
                        donate_div.placeHolder = 'donate';
                        console.log(mini_blocs);
                        if(info[block][mini_blocs].status == 'on'){
                            const info_tet = document.createElement('span');
                            div_info.id = 'donate_div';
                            donate_div.classList.add('donate_div','donate_check');
                            
                            info_tet.innerHTML = `
                            <img class='img_res' src='static/picsman/${info[block][mini_blocs].img}'<br>
                            ${info[block][mini_blocs].title}&nbsp;
                            `
                            info_tet.classList.add('info_tet');
                            img.classList.add('img_res');
                            donate_div.append(info_tet);
                            donate_div.id = info[block][mini_blocs].short_name;
                            div_info.append(donate_div);
                        };
                        
                    };
                }; 
                div_info.classList.add('div_info');
                
                this.main_div.append(div_info);

                
            };
            const qr_div = document.createElement('div');
            qr_div.classList.add('qr_div');
            this.main_div.append(qr_div);
            
            document.body.append(this.main_div);
            const tgs = document.getElementById('tgs');
            if (tgs){
                    tgs.addEventListener('click',()=>{
                        window.open(info.donnate.stars.link,'_blank');
                });
            };
            const new_qr_listener = document.querySelectorAll('.donate_div');
                console.log(new_qr_listener);
                new_qr_listener.forEach(el=>{
                    el.addEventListener('click',()=>{
                            if(el.id != 'tgs'){
                                const new_qr = new qr(el,info);
                                const new_qr_start = new_qr.start();
                            };
                        });
                });
        
    }catch(err){
        console.log(err);
    }
}
};
