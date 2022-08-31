import React from "react"
import { getAllByText, render, screen } from '@testing-library/react'
import FirstApp from '../../src/Components/FirstApp'


describe('Testing <FirstApp />', () => {

    const title = 'Epa! Yisus'
    const subtitle = 'Vite es Rapidisimo'

    test('should create a sanpshot', () => {

        const { container } = render(
            <FirstApp
                titulo={title}
                subtitulo={subtitle}
            />
        ); // 'container' es un objeto DOM https://testing-library.com/docs/react-testing-library/api/#render


        /**
         * Se realiza una fotografia de la vista que tiene nuestro componente
         * si en un futuro se cambia esta vista accidentalmente, este test serviria
         * para saber que codigo es el que se modifico y el que se diferencia del
         * archivo .snap generado
         */
        expect(container).toMatchSnapshot();

    })

    test('should confirm that subtitle has <p></p>', () => {

        // const { container, getByText } = render(<FirstApp titulo={title} subtitulo={subtitle} />); 

        // const numSubtitulos = container.querySelectorAll('p') 
        // const firstSub = container.querySelector('p');
        // const inner = firstSub?.innerHTML

        // expect(numSubtitulos.length).toBe(2);
        // expect(getByText('CounterApp')).notw.toBeTruthy();
        // expect(inner).toContain('Vite')
        // expect(inner).toBe(`${subtitle}`)

        render(<FirstApp titulo={title} subtitulo={subtitle} />);

        const arraySubtitulos = screen.getAllByText(subtitle)

        expect(arraySubtitulos.length).toBe(2);
        expect(arraySubtitulos[0].innerHTML).toContain('Vite')
        expect(arraySubtitulos[0].innerHTML).toBe(subtitle)

    })


    test('should show the message "Epa! Yisus"', () => {
        render(<FirstApp titulo={title} />);

        expect(screen.getByText(title)).toBeTruthy();

    })


    test('should verify if exist 2 subtitle', () => {

        render(<FirstApp titulo={title} subtitulo={subtitle} />);

        expect(screen.getAllByText(subtitle).length).toBe(2);
    })

    test('should verify id exist', () => {

        render(<FirstApp titulo={title} subtitulo={subtitle} />); 

        expect(screen.getByTestId('subtitle0')).toBeTruthy();
        expect(screen.getByTestId('subtitle1').innerHTML).toBe(subtitle);

        // expect(getByTestId('test-title')).toBeTruthy();
        // expect(getByTestId('test-title').innerHTML).toBe('CounterApp');

    })
})