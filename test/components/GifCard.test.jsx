import { render, screen } from "@testing-library/react"
import GifCard from "../../src/components/GifCard"
/* eslint-disable no-undef */

describe('Pruebas en <GifItem />', () => {

    const title = 'Onil'
    const url = 'https://prueba/onil/search.jpg'


    test('Debe de hacer match con el snapshot', () => {

       const {container} = render(<GifCard title={title} url={url} />)

       expect(container).toMatchSnapshot()
       
    })


    test('debe de mostrar la imagen con el URL  y el ALT indicado', () => {
        // const {container} = render(<GifCard title={title} url={url} />)
        // screen.debug()

        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const {src,alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })

    test('Debe de mostrar el titulo en en componente', () => {

        render( <GifCard title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
        
    })
    
    
  
  
})




/* eslint-enable no-undef */