
interface Heros {
    nomen: string;
    aetas: number;
    codeNomen: string;
    facultatem?: string
}


export const persona: Heros = {
    nomen: 'Tony',
    aetas: 45,
    codeNomen: 'Ironman',
    facultatem 'money'

}

const { nomen, aetas, facultatem = 'No tiene poder' } = persona;