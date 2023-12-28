import getir from "../assets/getir.svg"
import getirbuyuk from "../assets/getirbuyuk.svg"
import getircarsi from "../assets/getircarsi.svg"
import getirsu from "../assets/getirsu.svg"
import getiryemek from "../assets/getiryemek.svg"

import { Home1, Home2, Home3, Home4 } from "../assets/HomeHero"

export const pageMenu = [
    {
        path: "/",
        title: "Getir",
        src: getir
    },
    {
        path: "/yemek",
        title: "GetirYemek",
        src: getiryemek
    },
    {
        path: "/buyuk",
        title: "GetirBüyük",
        src: getirbuyuk
    },
    {
        path: "/su",
        title: "GetirSu",
        src: getirsu
    },
    {
        path: "/carsi",
        title: "GetirÇarşı",
        src: getircarsi
    },

]

export const homeHero = [
    {
        img: Home1
    },
    {
        img: Home2
    },
    {
        img: Home3
    },
    {
        img: Home4
    }
]