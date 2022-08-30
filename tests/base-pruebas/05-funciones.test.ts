import { describe, expect, test } from '@jest/globals'
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones'


describe('Test 05-funciones.js', () => {
    test('getUser test', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser()

        // expect(testUser).toBe(user) // compare objects need toEqual
        expect(testUser).toStrictEqual(user)

    })
    
    
    test('getUser test', () => {

        const name = 'Jesus';
        const testUser = {
            uid: 'ABC567',
            username: name
        };

        const activeUser = getUsuarioActivo(name)


        expect(testUser).toStrictEqual(activeUser)

    })
})