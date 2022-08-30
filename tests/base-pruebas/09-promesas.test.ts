import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'
import heroes from '../../src/data/heroes';

describe('test 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toEqual(heroes.find(x => x.id === id))

                done();

            })
    })
    
    test('getHeroeByIdAsync debe retornar la excepcion', (done) => {

        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error => {

                expect(error).toBe('No se pudo encontrar el héroe')

                done();
            })
    })

})