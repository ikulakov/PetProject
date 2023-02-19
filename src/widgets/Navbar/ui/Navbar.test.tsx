import { render, screen } from '@testing-library/react'
import { Navbar } from 'widgets/Navbar'
import { BrowserRouter } from 'react-router-dom'

describe('Sidebar', () => {
    test('test render', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>)
        expect(screen.getByTestId('navbar')).toBeInTheDocument()
    })
})
