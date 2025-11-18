import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

describe('Footer', () => {
  it('renders the footer element', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('contains attribution text', () => {
    render(<Footer />)
    expect(screen.getByText(/Built by/i)).toBeInTheDocument()
    expect(screen.getByText(/pudim\.dev/i)).toBeInTheDocument()
  })

  it('contains GitHub link', () => {
    render(<Footer />)
    const githubLink = screen.getByRole('link', { name: /GitHub/i })
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/luismr/pudim-dev-calculator')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noreferrer')
  })

  it('has proper link attributes for security', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    
    links.forEach(link => {
      if (link.getAttribute('target') === '_blank') {
        expect(link).toHaveAttribute('rel', 'noreferrer')
      }
    })
  })
})

