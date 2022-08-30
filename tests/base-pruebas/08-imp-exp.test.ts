import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp'
import heroes from '../../src/data/heroes'


describe('Test 08-imp-exp', () => {

    // getHeroesById
    test('retorna el primer elemnto de heroes', () => {

        const id = 1
        const heroe = getHeroeById(id)

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    })

    test('retorna undefined', () => {

        const id = 100
        const heroe = getHeroeById(id)

        expect(heroe).toBeFalsy()
        expect(heroe).toBeUndefined()
        // expect(heroe).toBeNull()

    })

    // getHeroesByOwner
    test('retorna un arreglo con los 3 heroes de DC', () => {

        const owner = 'DC'
        const getHeroes = getHeroesByOwner(owner)

        const testResponse = [            
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]

        expect(getHeroes.length).toBe(3)
        expect(getHeroes).toContainEqual(testResponse[0])
        expect(getHeroes).toEqual(testResponse)
        expect(getHeroes).toStrictEqual(testResponse)

        //correcto

        expect(getHeroes).toEqual(heroes.filter(x => x.owner === owner))

    })

    test('retorna un arreglo con los 2 heroes de Marvel', () => {

        const owner = 'Marvel'
        const getHeroes = getHeroesByOwner(owner)

        const testResponse = [       
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ]

        expect(getHeroes.length).toBe(2)
        expect(getHeroes).toContainEqual(testResponse[0])
        expect(getHeroes).toEqual(testResponse)
        expect(getHeroes).toStrictEqual(testResponse)

        //correcto

        expect(getHeroes).toEqual(heroes.filter(x => x.owner === owner))
    })

})