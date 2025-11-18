import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    expect(screen.getByText(/Calculate Your/i)).toBeInTheDocument()
    expect(screen.getByText(/Dev Pudim Score/i)).toBeInTheDocument()
  })

  it('displays the hero section description', () => {
    render(<Home />)
    expect(screen.getByText(/Discover your flavor profile in the developer world/i)).toBeInTheDocument()
  })

  it('contains navigation buttons', () => {
    render(<Home />)
    expect(screen.getByRole('link', { name: /Check My Score/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /How it Works/i })).toBeInTheDocument()
  })

  it('displays the PudimScore calculator component', () => {
    render(<Home />)
    expect(screen.getByPlaceholderText('GitHub Username')).toBeInTheDocument()
  })

  it('shows feature cards', () => {
    render(<Home />)
    expect(screen.getByText(/Ingredients \(Stats\)/i)).toBeInTheDocument()
    expect(screen.getByText(/The Secret Sauce/i)).toBeInTheDocument()
    expect(screen.getByText(/Open Source Spirit/i)).toBeInTheDocument()
  })

  it('mentions github-readme-stats inspiration', () => {
    render(<Home />)
    // Use getAllByText since it appears multiple times
    const links = screen.getAllByText(/github-readme-stats/i)
    expect(links.length).toBeGreaterThan(0)
  })

  it('has proper section IDs for navigation', () => {
    const { container } = render(<Home />)
    expect(container.querySelector('#calculator')).toBeInTheDocument()
    expect(container.querySelector('#features')).toBeInTheDocument()
  })

  it('contains pudim emoji', () => {
    const { container } = render(<Home />)
    // The emoji is in the h1, check using text content
    expect(container.textContent).toContain('🍮')
  })
})

