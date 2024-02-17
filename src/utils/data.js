import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Usor de folosit",
    icon: CiMobile1,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: CiMobile1,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Transformă fiecare călătorie cu mașina într-o oportunitate de a descoperi și de a interacționa cu comunitatea din jurul tău.",
  "Această aplicație facilitează comunicarea între șoferi, deschizând calea către un schimb de informații utile, sfaturi despre trafic, recomandări locale și chiar asistență reciprocă în situații neașteptate.",
];

export const workExp = [
  {
    place: "",
    tenure: "",
    role: "Caută",
    detail: "Dacă blochezi pe cineva, vei fi anunțat să îți muți mașina.",
  },
  {
    place: "",
    tenure: "",
    role: "Găsește",
    detail: "Dacă uiți farurile aprinse, geamurile deschise sau observi un șofer care parchează inadecvat sau căruia urmează să i se ridice mașina, îl poți anunța.",
  },
  {
    place: "",
    tenure: "",
    role: "Interacționează",
    detail: "Dacă vezi pe cineva în trafic și dorești să iei legătura cu acea persoană.",
  },
];


export const comments = [
  {
    name: "Ana",
    post: "Numărul tău de înmatriculare va putea fi văzut doar de persoanele care observă numărul tău în trafic și decid să te caute în aplicație sau în situația în care alegi să apreciezi un alt șofer, caz în care profilul tău îi va fi afișat.",
    comment:
      "Daca ma inscriu pe aplicatie cu numarul de inmatriculare il poate vedea oricine? ",
    img: "./people1.png",
  },
  {
    name: "Maior",
    post: "Aveti o sectiune pentru a ne contacta, iar in maxim 24 de ore va vom contacta inapoi.",
    comment:
      "Daca numarul meu de inmatriculare la inscriere nu este disponibil cum ma inscriu?",
    img: "./people2.png",
  },
  {
    name: "Andreea",
    post: "Intrati pe profilul utilizatorului apasati pe cele 3 puncte de sus din dreapta si blocare utilizator.",
    comment:
      "Cum pot bloca un utilizator?",
    img: "./person.png",
  },


];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
