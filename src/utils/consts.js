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

export const phones = {
    TR: "+90",
    US: "+1",
    GB: "+44",
    NL: "+31",
    FR: "+33",
    DE: "+49",
    IT: "+39",


}

export const card = [
    {
        src: "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
        header: "Her siparişine bir kampanya",
        text: "Getir’de vereceğin her siparişe uygun bir kampanya bulabilirsin."
    },
    {
        src: "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
        header: "Dakikalar içinde kapında",
        text: "Getir’le siparişin dakikalar içinde kapına gelir."
    },
    {
        src: "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
        header: "Binlerce çeşit mutluluk",
        text: "Getir’de binlerce çeşit arasından seçimini yapabilirsin."
    }

]