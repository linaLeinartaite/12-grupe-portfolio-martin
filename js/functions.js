"use strict";


function renderTitles(data){
    let HTML="";
    //patikrinam ar data yra arejus
    if(!Array.isArray(data)){
        console.error("ERROR: data has to be an array.");
        return;
    };
    
    //patikrinam data nera tuscia (jei tuscia pasalinam sekcija)
    if( data.length === 0){
        console.error("ERROR: data is empty.");
        return;
        
        //generuojam duomenis 
    } 
    for(let i=0; i<data.length; i++){
        
        if(!document.querySelector(`#${data[i].id}-title`)){
            console.error(`There is no element with id === #${data[i].id}-title.`)
            continue;
        }
        
        if(data[i].span === "my") {            
            HTML = `<div class="head col unit-12-col">
            <h2 class=""><span>${data[i].span} </span>${data[i].main}</h2>
            <div class="line"></div>
            </div>`;
            document.querySelector(`#${data[i].id}-title`).innerHTML =HTML;
        } 
        
        if(data[i].span === "me") { 
            HTML = `<div class="head col unit-12-col">
            <h2 class="">${data[i].main} <span>${data[i].span}</span></h2>
            <div class="line"></div>
            </div>`;
            document.querySelector(`#${data[i].id}-title`).innerHTML =HTML;
        }   
    }
}

//navigation bar



function renderResume(data) {
    let HTML="";
    let box =``;
    
    if(!Array.isArray(data)){
        console.error("ERROR: data has to be an array.");
        return;
    };
    
    if( data.length === 0){
        console.error("ERROR: data is empty.");
        document.querySelector('#my-resume').remove(); 
        return; 
        
    } else {        
        
        for(let i=0; i<data.length/2; i++){
            box += `
            <h5>${data[i].company}</h5>
            <i><p>${data[i].dates}</p></i>
            <p>${data[i].exp}</p> `;
        }
        HTML += `
        <div class="block left col unit-6-col unit-12-col-sm">
        <h4>Work</h4>
        ${box}
        </div>`;
        //.clientHeight()  
        box="";
        for(let i=Math.ceil(data.length/2); i<data.length; i++){       
            box += `
            <h5>${data[i].company}</h5>       
            <i><p>${data[i].dates}</p></i>
            <p>${data[i].exp}</p> `;
        }
        HTML += `
        <div class="block left col unit-6-col unit-12-col-sm">
        <h4>Work</h4>
        ${box}
        </div>`;
        
        document.querySelector('#my-resume-content').innerHTML=HTML;
        
        return HTML;
    }
}

function renderServices(data) {
    let HTML="";
    //patikrinam ar data yra arrejus
    if(!Array.isArray(data)){
        console.error("ERROR: data has to be an array.");
        return;
    };
    
    //patikrinam data nera tuscia (jei tuscia pasalinam sekcija)
    if( data.length === 0){
        console.error("ERROR: data is empty.");
        document.querySelector('#my-services').remove(); 
        return;        
        
        //generuojam duomenis 
    } else {
        for(let i=0; i<data.length; i++){
            HTML += `<div class="block  block-hover center col unit-4-col unit-6-col-sm unit-12-col-xxs">
            <i class=" ico fa fa-${data[i].icon}" aria-hidden="true"></i>
            <h3>${data[i].title}</h3>   
            <p>${data[i].description}</p>
            </div>`;
        }    
    }
    
    //istatom i reikiama vieta html'e
    document.querySelector('#my-services-content').innerHTML=HTML;
    
    
}
//my portfolio renderGallery
function renderGallery(data){    
    let menuHTML =``;
    let galleryHTML = ``;
    let menu = [];
    let categories = '';
    
        
    //einam per data (gallery in data.js): 
    data.forEach(item => {
        //1. generuojam meniu (su duplikatais):
        //1.a. paskleidziam category kiekvienos item(nuotraukos) arrejuje:
        categories =[...item.category];       
        
        //1.b. sujungiam arejus i bendra arreju (nesalinant atsikartojanciu elementu)
        menu = menu.concat(categories);        
        
        //2. su generuojam galleryHTML: istatom atitinkama nuotrauka i <div><img></div>:
        galleryHTML +=`<div class="gallery-item block block-img col  unit-4-col "><img  src="./img/gallery/${item.img}" alt="${item.img}"><div class="cover"><div>Our Photography</div></div></div>`;   
        
    });
    
    //1.c. baigiam construoti menu: naudojam .filter() kad paliktu tik unikalias categorijas ir sulipdom kiekviena kategorija  i menuHTML (<div>'uose);
    /*
    .filter() nekeicia pacio arejaus; .filter() sintax'e:
    let newArray = arr.filter(callback(element[, index[, array]])[, thisArg]); a.indexOf(b) ==> randa pirmaji b elementa, arrejuje a;
    */
    
    menu.filter((item,index) => {if(menu.indexOf(item)===index){
        menuHTML += `<div class="menu-item col">${item}<div class="line hide"></div></div>`;         
    }});     
    
    //istatom menu div'us i 12-os unit'u stulpeli:
    menuHTML = `<div class="col unit-12-col center menu">${menuHTML}</div>`;
    
    //sujungiam menuHTML su GaleryHTML ir istatom i reikiama vieta html'e:    
    document.querySelector('#my-portfolio-content').innerHTML=(menuHTML + galleryHTML);
    
    document.querySelector(".menu-item div.line").classList.add("show"); 
    return;
}

//my portfolio filterImg() function for categories
function categoryList(data){        
    let catList =[];    
    let menu =["all", "branding", "product", "photoshop",
    "fashion"];
    
    for(let i=0; i<menu.length; i++){
        catList[i] = {catName: menu[i], imgList:[]};
        data.forEach(item =>{           
            if(item.category.includes(menu[i])){
                catList[i].imgList.push(item.img);
            };              
        })             
    }
    document.querySelectorAll("#my-portfolio-content .menu-item").forEach(click => click.addEventListener('click', (event) =>
    { 
        // //paslepiam visas linijas po meniu-item'ais (nuimam klase .show) 
            
        document.querySelectorAll(".menu-item div.line").forEach(a => a.classList.remove("show"));
        

        // //parodom tik ta linija kuri yra po paspaustu meniu-item'u
        click.querySelector(".menu-item div.line").classList.add("show");
      

        //einam per catList'a (turinti unikalias categorijas)
        for(let i=0; i<catList.length; i++) {

            //jei catList'as turi paspausta kategorija visoms gallery items pridedam klase hide ir tada nuimam toms kurios yra catList.imgList'e paspausto elemento;
            if(catList[i].catName === click.innerText.toLowerCase()) {
                document.querySelectorAll("#my-portfolio .gallery-item").forEach(item => {item.classList.add("hide")});
                
                catList[i].imgList.forEach(img => {
                    document.querySelector(`[alt="${img}"]`).closest("div").classList.remove("hide");
                }); 
            }                 
        }             
    }));
}

//my testimonial



//my blogs



