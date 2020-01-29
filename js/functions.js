"use strict";

function renderTitles(data) {
  let HTML = "";
  //patikrinam ar data yra arejus
  if (!Array.isArray(data)) {
    console.error("ERROR: data has to be an array.");
    return;
  }

  //patikrinam data nera tuscia (jei tuscia pasalinam sekcija)
  if (data.length === 0) {
    console.error("ERROR: data is empty.");
    return;

    //generuojam duomenis
  }
  for (let i = 0; i < data.length; i++) {
    if (!document.querySelector(`#${data[i].id}-title`)) {
      console.error(`There is no element with id === #${data[i].id}-title.`);
      continue;
    }

    if (data[i].span === "my") {
      HTML = `<div class="head col unit-12-col">
            <h2 class=""><span>${data[i].span} </span>${data[i].main}</h2>
            <div class="line"></div>
            </div>`;
      document.querySelector(`#${data[i].id}-title`).innerHTML = HTML;
    }

    if (data[i].span === "me") {
      HTML = `<div class="head col unit-12-col">
            <h2 class="">${data[i].main} <span>${data[i].span}</span></h2>
            <div class="line"></div>
            </div>`;
      document.querySelector(`#${data[i].id}-title`).innerHTML = HTML;
    }
  }
}

// hero
function renderHero(hero) {
  console.log(hero);

  let HTML = "";
  for (let i = 0; i < hero.length; i++) {
    HTML += `<p>${hero[i].categ}</p>`;
  }
  document.querySelector(`#categ`).innerHTML = HTML;
}

//navigation bar
function renderNavBar(data) {
  let HTML = `<a href="#home">home</a>`;
  const sections = document.querySelectorAll("[data-nav]");

  for (let i = 0; i < sections.length; i++) {
    // console.log(sections[i].dataset.nav);
    const text = sections[i].dataset.nav;

    HTML += `<a href="#${data[i].id}">${text[0].toUpperCase() +
      text.slice(1)}</a>`; //this 'long thing starting charAt(0)' is needed to cappitalize (since Css does not work for that)??
  }
  document.querySelector(".nav-bar .nav-items").innerHTML = HTML;
  return;
}

// pakeiciame navBar stiliu nuskrolinus zemyn 300px;
window.addEventListener("scroll", onScroll);

function onScroll() {
  let navBar = document.querySelector("nav.row.nav-bar");

  let navBarList = document.querySelectorAll(".nav-items > a");

  let navBarLogo = document.querySelector(".nav-bar > .logo > a");

  //!!
  // window.scrollY >>> parodo kiek px pasiskrolines ekranas:
  if (window.scrollY >= 300) {
    navBar.classList.add("nav-bar-scroll");
    navBarList.forEach(item => item.classList.add("a-scroll"));
    navBarLogo.classList.add("logo-scroll");
  } else {
    navBar.classList.remove("nav-bar-scroll");
    navBarList.forEach(item => item.classList.remove("a-scroll"));
    navBarLogo.classList.remove("logo-scroll");
  }
}

function renderResume(data) {
  let HTML = "";
  let box = ``;

  if (!Array.isArray(data)) {
    console.error("ERROR: data has to be an array.");
    return;
  }

  if (data.length === 0) {
    console.error("ERROR: data is empty.");
    document.querySelector("#my-resume").remove();
    return;
  } else {
    for (let i = 0; i < data.length / 2; i++) {
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
    box = "";
    for (let i = Math.ceil(data.length / 2); i < data.length; i++) {
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

    document.querySelector("#my-resume-content").innerHTML = HTML;

    return HTML;
  }
}

function renderServices(data) {
  let HTML = "";
  //patikrinam ar data yra arrejus
  if (!Array.isArray(data)) {
    console.error("ERROR: data has to be an array.");
    return;
  }

  //patikrinam data nera tuscia (jei tuscia pasalinam sekcija)
  if (data.length === 0) {
    console.error("ERROR: data is empty.");
    document.querySelector("#my-services").remove();
    return;

    //generuojam duomenis
  } else {
    for (let i = 0; i < data.length; i++) {
      HTML += `<div class="block block-hover center col unit-4-col unit-6-col-sm unit-12-col-xxs">
            <i class=" ico fa fa-${data[i].icon}" aria-hidden="true"></i>
            <h3>${data[i].title}</h3>   
            <p>${data[i].description}</p>
            </div>`;
    }
  }

  //istatom i reikiama vieta html'e
  document.querySelector("#my-services-content").innerHTML = HTML;
}

//my portfolio renderGallery:
function renderGallery(data) {
  let menuHTML = ``;
  let galleryHTML = ``;
  let menu = [];
  let categories = "";

  if (!Array.isArray(data)) {
    console.error("ERROR: data has to be an array.");
    return;
  }

  //patikrinam data nera tuscia (jei tuscia pasalinam sekcija)

  if (data.length === 0) {
    console.error("ERROR: data is empty.");
    document.querySelector("#my-portfolio").remove();
    return;
  }

  //einam per data (gallery in data.js):
  data.forEach(item => {
    //1. generuojam meniu (su duplikatais):
    //1.a. paskleidziam category kiekvienos item(nuotraukos) arrejuje:
    categories = [...item.category];

    //1.b. sujungiam arejus i bendra arreju (nesalinant atsikartojanciu elementu)
    menu = menu.concat(categories);

    //2. su generuojam galleryHTML: istatom atitinkama nuotrauka i <div><img></div>:
    galleryHTML += `<div class="gallery-item block block-img col  unit-4-col unit-6-col-sm unit-12-col-xxs"><img  src="./img/gallery/${item.img}" alt="${item.img}"><div class="cover"><div>Our Photography</div></div></div>`;
  });

  //1.c. baigiam construoti menu: naudojam .filter() kad paliktu tik unikalias categorijas ir sulipdom kiekviena kategorija  i menuHTML (<div>'uose);
  /*
    .filter() nekeicia pacio arejaus; .filter() sintax'e:
    let newArray = arr.filter(callback(element[, index[, array]])[, thisArg]); a.indexOf(b) ==> randa pirmaji b elementa, arrejuje a;
    */
  const menuUq = menu.filter((item, index) => menu.indexOf(item) === index);

  menuUq.forEach(cat => {
    menuHTML += `<div class="menu-item col">${cat}<div class="line hide"></div></div>`;
  });

  //istatom menu div'us i 12-os unit'u stulpeli:
  menuHTML = `<div class="col unit-12-col center menu">${menuHTML}</div>`;

  //sujungiam menuHTML su galleryHTML ir istatom i reikiama vieta html'e:
  document.querySelector("#my-portfolio-content").innerHTML =
    menuHTML + galleryHTML;

  //pirmai menu kategorijai "all" (t.y. jos pabraukimui) pridedame klase .show), kad paleidus psl. kai rodo visas nuotraukas "all" butu pabrauktas:
  document.querySelector(".menu-item div.line").classList.add("show");

  //filtravimas:
  //sudarom objektu areju kur kiekvienai kategorijai isvardinam visas nuotraukas: catList = [{catName: category, imgList: [..., ..., ]}]
  let catList = [];
  for (let i = 0; i < menuUq.length; i++) {
    catList[i] = { catName: menuUq[i], imgList: [] };
    data.forEach(item => {
      if (item.category.includes(menuUq[i])) {
        catList[i].imgList.push(item.img);
      }
    });
  }
  //selektinam ir pridedam reagavima i paspaudima visoms menu-item:
  document.querySelectorAll("#my-portfolio-content .menu-item").forEach(click =>
    click.addEventListener("click", event => {
      // //ant paspaudimo: a) paslepiam visas linijas po meniu-item'ais  (nuimam klase .show):
      document
        .querySelectorAll(".menu-item div.line")
        .forEach(a => a.classList.remove("show"));

      // b) parodom tik ta linija kuri yra po paspaustu meniu-item'u:
      click.querySelector(".menu-item div.line").classList.add("show");

      //einam per catList'a (turinti unikalias categorijas):
      for (let i = 0; i < catList.length; i++) {
        //jei catList'as turi paspausta kategorija visoms gallery items pridedam klase hide ir tada nuimam toms kurios yra catList.imgList'e paspausto elemento:
        if (catList[i].catName === click.innerText.toLowerCase()) {
          document
            .querySelectorAll("#my-portfolio .gallery-item")
            .forEach(item => {
              item.classList.add("hide");
            });

          catList[i].imgList.forEach(img => {
            document
              .querySelector(`[alt="${img}"]`)
              .closest("div")
              .classList.remove("hide");
          });
        }
      }
    })
  );

  return;
}

//my testimonial

function renderTestimonial(data) {
  let DOM = document.querySelector(`#testimonials-block`);
  let testimonialHTML = "";
  let testimonialList = "";

  // for (let i = 0; i < data.length; i++) {
  // testimonialHTML += generateTestimonials(data[i]);
  // }
  const initialindex = Math.floor(Math.random() * data.length);

  testimonialHTML = generateTestimonial(data[initialindex]);
  console.log(initialindex);
  const HTML = `<div class="col unit-12-col">${testimonialHTML}</div>`;

  DOM.innerHTML = HTML;
  const arrows = DOM.querySelectorAll(".testimonials-controls> .i0");
  console.log(arrows);
  arrows.forEach(arrow => arrow.addEventListener("click", updateTestimonials));
  return;
}
function generateTestimonial(data) {
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  if (data.img == "team-1.jpg") {
    (a = 1), (b = 0), (c = 0), (d = 0);
  }
  if (data.img == "team-2.jpg") {
    (a = 0), (b = 1), (c = 0), (d = 0);
  }
  if (data.img == "team-3.jpg") {
    (a = 0), (b = 0), (c = 1), (d = 0);
  }
  if (data.img == "team-4.jpg") {
    (a = 0), (b = 0), (c = 0), (d = 1);
  }

  return `<div class=" testimonials-content unit-7-col unit-12-col-sm">
            <div class=" testimonial-list">
              <div class="testimonial-foto"><img src="./img/girls/${data.img}"></div>
              <div class="testimonial-text">${data.text}</div>
              <div class="testimonial-autor">${data.autor}</div>
              <div class="testimonial-pozition">${data.pozition}</div>
            </div>
          </div>
          <div class="testimonials-controls unit-7-col">
            <div class="i${a} is-0"></div>
            <div class="i${b} is-1"></div>
            <div class="i${c} is-2"></div>
            <div class="i${d} is-3"></div>            
          </div>`;
}
function updateTestimonials() {
  console.log("tectim...");
}

//my blogs
function renderMyBlogs(data) {
  let HTML = "";
  for (let i = 0; i < data.length; i++) {
    HTML += `<div class="my_blogs col unit-4-col unit-12-col-sm">
          <div class="blogs_img">
            <img src="./img/gallery/blog-${data[i].img}" alt="Blog-${i + 1}">
          </div>
            <div class="blogs-make">
                <span>${data[i].date}</span>
                <span>${data[i].category}</span>
            </div>
            <a href="#" class="blogs-make">${data[i].purpose}</a>
            <p class="title">${data[i].comment}</p>
            <a href="#" class="blogs-read">Read more</a>
        </div>`;
    document.querySelector(`#my-blogs-body`).innerHTML = HTML;
  }
  return;
}
//my blogs end
