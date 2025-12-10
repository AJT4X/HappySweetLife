
export class Persona{
    
    constructor(){
        this.man_pic = [
            'static/picsman/2.png',
            'static/picsman/3.png',
            'static/picsman/4.png',
            'static/picsman/5.png',
            'static/picsman/6.png'
        ]
    };
    sleep(ms){
        return new Promise(resolve=>setTimeout(resolve,ms));
        
    }

    async start_create_pers(){
        const main_div = document.querySelector('.main_div');
        const div_for_man = document.createElement('div');
        div_for_man.classList.add('div_for_man');
        const man = document.createElement('img');
        setInterval(async ()=>{
            for(const img_src in this.man_pic){
                console.log(this.man_pic[img_src]);
                man.src = this.man_pic[img_src];
                man.classList.add('img_man');
                div_for_man.append(man);
                main_div.append(div_for_man);
                document.body.append(main_div);
                await this.sleep(1000);
            };
        },5000);
        
    };


}