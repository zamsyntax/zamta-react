const logotext = "ZAMZAM";
const meta = {
    title: "Zamzam Trizuama Aricsma",
    description: "Saya Zamzam Trizuama Aricsma ini adalah informasi portofolio saya",
};
import zoroImage from './assets/images/zoro1.png';
const introdata = {
    title: "Zamzam Trizuama Aricsma",
    animated: {
        first: "I love livestreaming",
        second: "I make cool designs",
        third: "I cybr scurity",
    },
    description: "Halo! Saya Zamzam Trizuama Aricsma, seorang pelajar yang penuh semangat dari SMK Telkom Lampung. Saya tinggal di Negeri Katon, Kabupaten Pesawaran, Lampung. Saya memiliki ketertarikan besar dalam dunia teknologi dan pengembangan perangkat lunak. Di portofolio ini, saya ingin berbagi dengan Anda perjalanan belajar saya, proyek-proyek yang telah saya kerjakan, serta keterampilan yang telah saya kembangkan selama ini.",
    your_img_url: zoroImage,
};

const dataabout = {
    title: " about my self",
    aboutme: "Halo! Nama saya Zamzam Trizuama Aricsma. Saya adalah lulusan dari SMK Telkom Lampung dengan jurusan Rekayasa Perangkat Lunak. Di sinilah perjalanan saya dalam dunia teknologi dan kreatif dimulai. Keahlian utama saya adalah menggunakan OBS Studio untuk keperluan live streaming.Saya sering dipercaya menjadi operator di berbagai acara sekolah, dan juga kadang aktif melakukan live streaming  di Instagram.Pengalaman ini telah mengasah kemampuan saya dalam mengatur siaran langsung yang profesional dan menarik. Selain keahlian dalam live streaming, saya juga memiliki bakat dalam bidang desain grafis dan keamanan siber(cyber security).Saya menikmati tantangan dalam menciptakan desain yang estetis dan fungsional, serta menjaga keamanan informasi di dunia maya. Saya sangat antusias untuk terus belajar dan berkembang dalam bidang teknologi dan kreatif.Saya percaya bahwa kombinasi antara kreativitas dan keterampilan teknis dapat menghasilkan karya yang luar biasa. Terima kasih telah meluangkan waktu untuk mengenal saya.Saya berharap dapat berkolaborasi dengan Anda di masa depan!",
};
const worktimeline = [{
    jobtitle: "Livestraming(OBS Studio)",
    where: "Home and Schools",
    date: "2023",
},
{
    jobtitle: "Designer of week",
    where: "home",
    date: "2024",
},
{
    jobtitle: "Cybr Scurity",
    where: "Schools",
    date: "2023",
},
];

const skills = [{
    name: "OBS Studio",
    value: 90,
},
{
    name: "Design",
    value: 85,
},
{
    name: "CYBR Scurity",
    value: 80,
},
{
    name: "Python",
    value: 60,
},
{
    name: "Javascript",
    value: 85,
},
];

const services = [{
    title: "Livestream(OBS Studio)",
    description: "Mahir dalam menggunakan software livestreaming obs studio.",
},
{
    title: "design",
    description: "menggunakan adobe adobe illustrator dan coreldraw.",
},
{
    title: "cybr scurity",
    description: "mampu memahami keamanan di dunia digital .",
},
];

import fotoo1 from './assets/images/fotoo1.png';
import foto2 from './assets/images/foto2.png';
import foto3 from './assets/images/foto3.png';
import foto4 from './assets/images/foto4.png';
import foto5 from './assets/images/foto5.png';
import foto6 from './assets/images/Foto6.jpg';
import foto7 from './assets/images/foto7.png';
import foto8 from './assets/images/foto8.png';
import foto9 from './assets/images/foto9.png';
import comming from './assets/images/comming.png';





const dataportfolio = [{
    img: foto6,
    description: "Mampu membuat desain logo dan menganimasikanya ke dalam after effects.",
    link: "#",
},
{
    img: fotoo1,
    description: "Pernah menjadi pelopor sekaligus ketua kegiatan ekstrakurikuler taekwondo di SMK Telkomm Lampung, menjuarai kejuaraan tingkat porvinsi dan kabupaten.",
    link: "#",
},
{
    img: foto5,
    description: "Menguasai OBS Studio.",
    link: "#",
},
{
    img: foto2,
    description: "Menjadi pemateri kegiatan pandu digital yang di adakan oleh kominfo.",
    link: "#",
},
{
    img: foto7,
    description: "Mahir dalam menulis artikel dan berita yang informatif dan menarik.",
    link: "#",
},
{
    img: foto3,
    description: "Pernah menjadi operator di setiap kegiatan sekolah.",
    link: "#",
},

{
    img: foto4,
    description: "Pernah menjadi sebagai sutradara, penulis naskah, dan penata suara dalam kompetisi film pendek, dan berhasil meraih juara 2.",
    link: "#",
},
{
    img: foto8,
    description: "Saya mampu menguasai keamanan siber (cyber security) dan mahir menggunakan berbagai tools pentesting untuk menjaga dan memindai kerentanan pada sebuah website. Selain itu, saya juga ahli dalam menjaga keamanan data dengan efektif,saya sering melakukan bug bounty di sebuah website lalu melaporkanya kepada pemilik website tersebut.",
    link: "#",
},
{
    img: foto9,
    description: "Menguasai bahasa pemerograman css,javascript dan python",
    link: "#",
},
{
    img: comming,
    description: "Stay tuned.",
    link: "#",
},
{
    img: comming,
    description: "Stay tuned.",
    link: "#",
},
{
    img: comming,
    description: "Stay tuned.",
    link: "#",
},
];

const contactConfig = {
    YOUR_EMAIL: "zamzamzmtza@gmail.com",
    YOUR_FONE: "+62 857-5815-4177",
    description: "Terima kasih telah meluangkan waktu untuk menghubungi saya!. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://www.instagram.com/zmtza/",
    linkedin: "https://www.instagram.com/zmtza/",
    twitter: "https://www.instagram.com/zmtza/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
