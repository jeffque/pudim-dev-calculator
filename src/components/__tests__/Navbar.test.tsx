import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from '../Navbar'

describe('Navbar', () => {
  it('renders the logo/brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('pudim.dev')).toBeInTheDocument()
  })

  it('renders the pudim emoji', () => {
    render(<Navbar />)
    expect(screen.getByText('🍮')).toBeInTheDocument()
  })

  it('contains a link to home page', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: /pudim\.dev/i })
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('has proper navigation structure', () => {
    const { container } = render(<Navbar />)
    expect(container.querySelector('nav')).toBeInTheDocument()
  })
})

