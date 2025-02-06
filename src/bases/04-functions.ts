
function salutate2(nomen: string) {
    return `Hola ${nomen}`;
}

const salutate = (nomen:string): string =>  `Hola ${nomen}`;


const obtineUsoris = (uid: string): {uid: string, nomen:string} => {
    return {
        uid: uid,
        nomen: 'Tony001'
    }
}



const heroum = [{
    id: 1,
    nomen: 'Batman'
},
{
    id: 2,
    nomen: 'Superman',
    facultatem: 'Super fuerza'
} 
];

const heros = heroum.find( item => item.id === 3)