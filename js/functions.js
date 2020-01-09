"use strict";

function renderResume(data) {
    let HTML="";
    let box =``;
    
    if(!Array.isArray(data)){
        console.error("ERROR: data has to be an array.");
    };
    
    if( data.length === 0){
        console.error("ERROR: data is empty.");
    document.querySelector('#my-resume').remove();  

    } else {        
        
        for(let i=0; i<data.length/2; i++){
            box += `
            <h4>${data[i].company}</h4>
            <i><p>${data[i].dates}</p></i>
            <p>${data[i].exp}</p> `;
        }
        HTML += `
        <div class="boxShadow left col unit-6-col">
        <h3>Work</h3>
        ${box}
        </div>`;
        box="";
        for(let i=Math.ceil(data.length/2); i<data.length; i++){       
            box += `
            <h4>${data[i].company}</h4>       
            <i><p>${data[i].dates}</p></i>
            <p>${data[i].exp}</p> `;
        }
        HTML += `
        <div class="boxShadow left col unit-6-col">
        <h3>Work</h3>
        ${box}
        </div>`;
        
        document.querySelector('#my-resume-content').innerHTML=HTML;
        
        return HTML;
    }
}