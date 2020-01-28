"use strict";

const titles = [
  //Apie sia sekcija dar teks pagalvoti (ar galima ja generuoti)
  {
    id: "about-me",
    span: "me",
    main: "about"
  },
  {
    id: "my-services",
    span: "my",
    main: "services"
  },
  {
    id: "my-resume",
    span: "my",
    main: "resume"
  },
  {
    id: "my-portfolio",
    span: "my",
    main: "portfolio"
  },
  {
    id: "my-blogs",
    span: "my",
    main: "blogs"
  },
  {
    id: "contact-me",
    span: "me",
    main: "contact"
  }
];

//navigation bar data

const resume = [
  {
    //KAIP DARYT JEI exp ILGESNIS???
    //KAIP DARYTI jei yra daugiau darbu?? (DAbar skeliu per puse i du stulpelius)
    //ar imanoma palyginti stulpeliu aukscius?? el.clientHeight() >> duoda auksti
    company: "aplle",
    dates: "OCT 2018 - present",
    exp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque."
  },
  {
    company: "google",
    dates: "JUNE 2015 - OCT 2018",
    exp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque."
  },
  {
    company: "spotify",
    dates: "DEC 2014 - JUNE 2015",
    exp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque. "
  },
  {
    company: "ibm",
    dates: "NOW 2010 - DEC 2014",
    exp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque."
  },
  {
    company: "ibm",
    dates: "NOW 2010 - DEC 2014",
    exp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque."
  },
  {
    company: "ibm",
    dates: "NOW 2010 - DEC 2014",
    exp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque."
  }
];

const services = [
  //kaip padaryti, kad esant daugiau services isscentruotu paskutine eiluteje esantis ?? arba ka daryti kad paskutineje eiluteje nebutu tik vienas service??
  {
    icon: "television",
    title: "Search Optimization",
    description:
      "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
  },
  {
    icon: "address-card",
    title: "Logo & Identity",
    description:
      "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
  },
  {
    icon: "balance-scale",
    title: "Graphics Design",
    description:
      "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
  },
  {
    icon: "mobile",
    title: "Fully Responsive",
    description:
      "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
  },
  {
    icon: "wrench",
    title: "Advanced Options",
    description:
      "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
  },
  {
    icon: "scissors",
    title: "Reasonable Pricing",
    description:
      "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
  }
  // {
  //     icon: "scissors",
  //     title:"Reasonable Pricing",
  //     description: "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
  // }
];
const contact = [
  {
    titles: "Addres",
    addres: "123 6th St. Melmourne,",
    addres1: "FL 32904, USA"
  },
  {
    titles: "Email",
    addres: "info@yourdomain.com",
    addres1: "sale@yourdomain.com"
  },
  {
    titles: "Phone",
    addres: "Mob: +01 000 000 000",
    addres1: "Fax: +01 000 000 000"
  }
];

//galery data
const gallery = [
  {
    img: "portfolio-1.jpg",
    category: ["all", "branding", "product"]
  },
  {
    img: "portfolio-2.jpg",
    category: ["all", "photoshop"]
  },
  {
    img: "portfolio-3.jpg",
    category: ["all", "fashion", "product"]
  },

  {
    img: "portfolio-4.jpg",
    category: ["all", "photoshop"]
  },

  {
    img: "portfolio-5.jpg",
    category: ["all", "fashion", "product"]
  },

  {
    img: "portfolio-6.jpg",
    category: ["all", "branding"]
  },

  {
    img: "portfolio-7.jpg",
    category: ["all", "branding"]
  },
  {
    img: "portfolio-8.jpg",
    category: ["all", "branding"]
  },

  {
    img: "portfolio-9.jpg",
    category: ["all", "branding", "product"]
  }
];

//testimonial data
const testimonialdata = [
  {
    autor: "Nancy Bayers",
    img: "team-1.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    pozition: "Co-founder"
  },
  {
    autor: "Marta Bayers",
    img: "team-2.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    pozition: "Co-founder"
  },
  {
    autor: "Ewa Bayers",
    img: "team-3.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    pozition: "Co-founder"
  },
  {
    autor: "Barbara Bayers",
    img: "team-4.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    pozition: "Co-founder"
  }
];
//end testimonials data

//blogs data
const blogs = [
  {
    img: "1.jpg",
    date: "2019 - 11 - 11",
    category: "Design",
    purpose: "Make your Marketing website",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    img: "2.jpg",
    date: "2019 - 12 - 12",
    category: "Design",
    purpose: "Make your Marketing website",
    comment: "Ipsum dolor lorem sit amet, consectetur adipisicing elit."
  },
  {
    img: "3.jpg",
    date: "2020 - 01 - 20",
    category: "Design",
    purpose: "Make your Marketing website",
    comment: "Dolor ipsum lorem sit amet, consectetur adipisicing elit."
  }
];
// const blogs = [
//     {
//         img: "./img/gallery/blog-1.jpg",
//         date: "2019 - 11 - 11",
//         category: "Design",
//         purpose: "Make your Marketing website",
//         comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//     },
//     {
//         img: "./img/gallery/blog-2.jpg",
//         date: "2019 - 12 - 12",
//         category: "Design",
//         purpose: "Make your Marketing website",
//         comment: "Ipsum dolor lorem sit amet, consectetur adipisicing elit.",
//     },
//     {
//         img: "./img/gallery/blog-3.jpg",
//         date: "2020 - 01 - 20",
//         category: "Design",
//         purpose: "Make your Marketing website",
//         comment: "Dolor ipsum lorem sit amet, consectetur adipisicing elit.",
//     },
// ]
