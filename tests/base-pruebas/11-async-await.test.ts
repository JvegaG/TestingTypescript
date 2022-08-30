import { getImagen } from '../../src/base-pruebas/11-async-await'

describe('test 11-async-await', () => {
    test('getImage debe retornar la URL de la imagen', async () => {

        const img = await getImagen()

        expect(typeof img).toBe('string')

    })
})