import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import CounterApp from '../../src/Components/CounterApp'


describe('test component <CounterApp>', () => {

    const initialValue = 100;

    test('should create a snapshot', () => {

        const { container } = render(<CounterApp value={initialValue} />);

        expect(container).toMatchSnapshot()

    })

    test('should show 100 like initial counter', () => {

        render(<CounterApp value={initialValue} />);

        expect(screen.getByText(initialValue)).toBeTruthy();
        expect(screen.getByText(initialValue).innerHTML).toBe(initialValue.toString());
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(initialValue.toString());
    })


    test('should increment +1 click button +1', () => {

        render(<CounterApp value={initialValue} />);

        fireEvent.click(screen.getByText('+1')) // Simula el evento click del button '+1'

        expect(screen.getByText(initialValue + 1)).toBeTruthy();

    })


    test('should decrement -1 click button -1', () => {

        render(<CounterApp value={initialValue} />);

        fireEvent.click(screen.getByText('-1')) // Simula el evento click del button '-1'
        // screen.debug()

        expect(screen.getByText(initialValue - 1)).toBeTruthy();

    })

    test('should do the event from reset button', () => {

        render(<CounterApp value={initialValue} />);

        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}))
        

        expect(screen.getByText(initialValue)).toBeTruthy();

    })
})