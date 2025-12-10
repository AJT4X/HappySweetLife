import { Create } from './class_create.js';
// import { Persona } from './persons.js';


if (document.addEventListener('DOMContentLoaded',()=>{
     try{
        const main_div = document.createElement('div');
        const new_create = new Create(main_div);
        const create = new_create.createinfo();
        main_div.classList.add('main_div');

        // const pers = new Persona();
        // const star_pers = pers.start_create_pers();
    }catch (err) {
        console.log(err);
    };
    }
)
);

