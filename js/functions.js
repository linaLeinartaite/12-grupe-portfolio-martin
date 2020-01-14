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
            HTML += `<div class="block  block-hover center cap col unit-4-col unit-6-col-sm unit-12-col-xxs">
            <i class=" ico fa fa-${data[i].icon}" aria-hidden="true"></i>
            <h3>${data[i].title}</h3>   
            <p>${data[i].description}</p>
            </div>`;
        }    
    }
    
    //istatom i reikiama vieta html'e
    document.querySelector('#my-services-content').innerHTML=HTML;
    
    
}
//my portfolio
function renderGallery(data){
    let HTML ="";

    
    return HTML;
}


//my testimonial



//my blogs



