import React from 'react';
import { render } from '@testing-library/react'
import CounterApp from '../../src/CounterApp/CounterApp'


describe('test component <CounterApp>', () => {

    test('should run CounterApp component', () => {

        const contador = 0;

        render(<CounterApp value={contador} />)

    })
})