import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import CalculatorPage from '../page'

// Mock the PudimScore component
vi.mock('@/components/PudimScore', () => ({
  PudimScore: ({ initialUsername }: { initialUsername?: string }) => (
    <div data-testid="pudim-score">
      PudimScore Component {initialUsername && `- ${initialUsername}`}
    </div>
  ),
}))

describe('Calculator Page', () => {
  const mockParams = Promise.resolve({ username: 'testuser' })

  it('renders the page title', async () => {
    const Component = await CalculatorPage({ params: mockParams })
    render(Component)
    
    expect(screen.getByText(/Dev Pudim Score/i)).toBeInTheDocument()
  })

  it('displays the username in the description', async () => {
    const Component = await CalculatorPage({ params: mockParams })
    render(Component)
    
    expect(screen.getByText(/Calculating score for/i)).toBeInTheDocument()
    expect(screen.getByText('testuser')).toBeInTheDocument()
  })

  it('renders the PudimScore component with initialUsername', async () => {
    const Component = await CalculatorPage({ params: mockParams })
    render(Component)
    
    const pudimScore = screen.getByTestId('pudim-score')
    expect(pudimScore).toBeInTheDocument()
    expect(pudimScore).toHaveTextContent('testuser')
  })

  it('includes back to home link', async () => {
    const Component = await CalculatorPage({ params: mockParams })
    render(Component)
    
    const backLink = screen.getByRole('link', { name: /Back to Home/i })
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', '/')
  })

  it('includes learn more button', async () => {
    const Component = await CalculatorPage({ params: mockParams })
    render(Component)
    
    const learnMoreLink = screen.getByRole('link', { name: /Learn More/i })
    expect(learnMoreLink).toBeInTheDocument()
    expect(learnMoreLink).toHaveAttribute('href', '/')
  })

  it('decodes URL-encoded usernames', async () => {
    const encodedParams = Promise.resolve({ username: 'test%20user' })
    const Component = await CalculatorPage({ params: encodedParams })
    render(Component)
    
    expect(screen.getByText('test user')).toBeInTheDocument()
  })

  it('shows call to action for checking another profile', async () => {
    const Component = await CalculatorPage({ params: mockParams })
    render(Component)
    
    expect(screen.getByText(/Want to check another profile?/i)).toBeInTheDocument()
  })
})

