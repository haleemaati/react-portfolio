import {FaReact, FaNode, FaCss3Alt} from 'react-icons/fa';
import {SiJavascript, siJavascript} from 'react-icons/si';
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';

export const Skills = [
    {
        id: 0,
        tech:'React Js',
        icon: <FaReact />

    },
    {
        id: 1,
        tech:'Node Js',
        icon: <FaNode />

    },
    {
        id: 2,
        tech:'CSS',
        icon: <FaCss3Alt />

    },
    {
        id: 3,
        tech:'Javascript',
        icon: <SiJavascript />

    },
];

export const projectDetails = [
    {
        id: "0",
        project_name: "Restaurant App",
        project_desc: "It typically includes features such as a menu with prices,the ability to place an Order, and the option to pay for the order directly through the app. some resturant applications also allow the customers to make reservations, view ans the restaurant's location and hours, and access special deals and promotions.",
        tech_stack: ['React JS', 'Tailwind', 'Firebase'],
        project_img: Project1,
        project_url: 'https://www.youtube.com',
        reverse: false,
    },
    {
        id: "1",
        project_name: "Animax",
        project_desc: "An Anime streaming platform built with React JS. Use can sign up and login in to their and watch their favourite anime.",
        tech_stack: ['React JS', 'Firebase'],
        project_img: Project2,
        project_url: 'https://www.youtube.com',
        reverse: false,
    },
]

export const navLinks = [
    {
        id:0,
        name:'Home',
        href:'Home'
    },
    {
        id:1,
        name:'My skills',
        href:'Skills'
    },
    {
        id:3,
        name:' My Projects',
        href:' Projects'
    },
    {
        id:4,
        name:'My Contact',
        href:'Contact'
    },
]