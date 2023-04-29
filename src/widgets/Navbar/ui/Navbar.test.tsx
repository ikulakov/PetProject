import { screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
    test('test render', () => {
        componentRender(<Navbar />)
        expect(screen.getByTestId('navbar')).toBeInTheDocument()
    })
})
