import { describe, expect, test } from '@jest/globals'
import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('pruebas en 02-template-string', () => {
    test('getSaludo debe retornar "Hola yisus"', () => {
        const name = 'yisus';
        const message = getSaludo(name)

        expect(message).toBe('Hola yisus');
    })
})