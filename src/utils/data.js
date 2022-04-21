import P1 from '../assets/images/JPEG/photo_01.jpeg';
import D1 from '../assets/images/JPEG/photo_02.jpg'
import F1 from '../assets/images/JPEG/photo_03.jpeg'
import A1 from '../assets/images/JPEG/photo_04.jpg'

export const heroData = [
    {
        id: 1,
        name: 'Macetas 3D',
        decp: 'Unicornio',
        price: '800.00',
        imageSrc: P1
    },
    {
        id: 2,
        name: 'Decoraciones',
        decp: 'Arbol de la vida',
        price: '450.00',
        imageSrc: D1
    },
    {
        id: 3,
        name: 'Figuras',
        decp: 'Pikachu Kakashi',
        price: '500.00',
        imageSrc: F1
    },
    {
        id: 4,
        name: 'Accesorios',
        decp: 'Llavero F.R.I.E.N.D.S',
        price: '200.00',
        imageSrc: A1
    }
]


export const categories = [
    {
        id: 1,
        name: 'Macetas',
        urlParamName: 'macetas',
    },
    {
        id: 2,
        name: 'Decoraciones',
        urlParamName: 'decoraciones',
    },
    {
        id: 3,
        name: 'Figuras',
        urlParamName: 'figuras',
    },
    {
        id: 4,
        name: 'Accesorios',
        urlParamName: 'accesorios',
    },
    {
        id: 5,
        name: 'Otros',
        urlParamName: 'otros',
    }

]
