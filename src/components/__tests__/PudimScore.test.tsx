import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PudimScore } from '../PudimScore'
import { getGithubStats } from '@/app/actions'

// Mock the server action
vi.mock('@/app/actions', () => ({
  getGithubStats: vi.fn(),
}))

describe('PudimScore', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the input field and calculate button', () => {
    render(<PudimScore />)
    
    expect(screen.getByPlaceholderText('GitHub Username')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Calculate/i })).toBeInTheDocument()
  })

  it('does not show results initially', () => {
    render(<PudimScore />)
    
    expect(screen.queryByText(/Master Pudim/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/STARS/i)).not.toBeInTheDocument()
  })

  it('disables button and input while loading', async () => {
    const user = userEvent.setup()
    vi.mocked(getGithubStats).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({ error: 'Not found' }), 100))
    )

    render(<PudimScore />)
    
    const input = screen.getByPlaceholderText('GitHub Username')
    const button = screen.getByRole('button', { name: /Calculate/i })

    await user.type(input, 'testuser')
    await user.click(button)

    expect(input).toBeDisabled()
    expect(button).toBeDisabled()
  })

  it('displays error message when user is not found', async () => {
    const user = userEvent.setup()
    vi.mocked(getGithubStats).mockResolvedValue({
      error: 'User not found',
    })

    render(<PudimScore />)
    
    const input = screen.getByPlaceholderText('GitHub Username')
    const button = screen.getByRole('button', { name: /Calculate/i })

    await user.type(input, 'nonexistentuser')
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText('User not found')).toBeInTheDocument()
    })
  })

  it('displays user stats when successful', async () => {
    const user = userEvent.setup()
    const mockStats = {
      username: 'testuser',
      avatar_url: 'https://example.com/avatar.jpg',
      created_at: '2012-01-01T00:00:00Z',
      total_stars: 222,
      followers: 87,
      public_repos: 96,
      languages: [
        { name: 'Java', percentage: 39 },
        { name: 'Python', percentage: 18 },
      ],
    }

    vi.mocked(getGithubStats).mockResolvedValue(mockStats)

    render(<PudimScore />)
    
    const input = screen.getByPlaceholderText('GitHub Username')
    const button = screen.getByRole('button', { name: /Calculate/i })

    await user.type(input, 'testuser')
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText('testuser')).toBeInTheDocument()
      expect(screen.getByText('222')).toBeInTheDocument()
      expect(screen.getByText('87')).toBeInTheDocument()
      expect(screen.getByText('96')).toBeInTheDocument()
      expect(screen.getByText(/STARS/i)).toBeInTheDocument()
      expect(screen.getByText(/FOLLOWERS/i)).toBeInTheDocument()
      expect(screen.getByText(/REPOS/i)).toBeInTheDocument()
    })
  })

  it('displays correct rank for high score (Master Pudim)', async () => {
    const user = userEvent.setup()
    const mockStats = {
      username: 'highscorer',
      avatar_url: 'https://example.com/avatar.jpg',
      created_at: '2012-01-01T00:00:00Z',
      total_stars: 222, // 222 * 2 = 444
      followers: 87,    // 87 * 0.5 = 43.5
      public_repos: 96, // 96 * 1 = 96
      // Total score: 444 + 43.5 + 96 = 583.5 (S rank - Master Pudim)
      languages: [],
    }

    vi.mocked(getGithubStats).mockResolvedValue(mockStats)

    render(<PudimScore />)
    
    const input = screen.getByPlaceholderText('GitHub Username')
    const button = screen.getByRole('button', { name: /Calculate/i })

    await user.type(input, 'highscorer')
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText('Master Pudim')).toBeInTheDocument()
      expect(screen.getByText('S')).toBeInTheDocument()
    })
  })

  it('loads initial username when provided', async () => {
    const mockStats = {
      username: 'initialuser',
      avatar_url: 'https://example.com/avatar.jpg',
      created_at: '2012-01-01T00:00:00Z',
      total_stars: 100,
      followers: 50,
      public_repos: 25,
      languages: [],
    }

    vi.mocked(getGithubStats).mockResolvedValue(mockStats)

    render(<PudimScore initialUsername="initialuser" />)

    await waitFor(() => {
      expect(screen.getByText('initialuser')).toBeInTheDocument()
    })
  })

  it('displays languages when available', async () => {
    const user = userEvent.setup()
    const mockStats = {
      username: 'languageuser',
      avatar_url: 'https://example.com/avatar.jpg',
      created_at: '2012-01-01T00:00:00Z',
      total_stars: 100,
      followers: 50,
      public_repos: 25,
      languages: [
        { name: 'TypeScript', percentage: 50 },
        { name: 'JavaScript', percentage: 30 },
        { name: 'Python', percentage: 20 },
      ],
    }

    vi.mocked(getGithubStats).mockResolvedValue(mockStats)

    render(<PudimScore />)
    
    const input = screen.getByPlaceholderText('GitHub Username')
    const button = screen.getByRole('button', { name: /Calculate/i })

    await user.type(input, 'languageuser')
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText(/Pudim Flavors/i)).toBeInTheDocument()
      expect(screen.getByText(/TypeScript/i)).toBeInTheDocument()
      expect(screen.getByText(/JavaScript/i)).toBeInTheDocument()
      expect(screen.getByText(/Python/i)).toBeInTheDocument()
    })
  })

  it('shows rank info button when results are displayed', async () => {
    const user = userEvent.setup()
    const mockStats = {
      username: 'testuser',
      avatar_url: 'https://example.com/avatar.jpg',
      created_at: '2012-01-01T00:00:00Z',
      total_stars: 100,
      followers: 50,
      public_repos: 25,
      languages: [],
    }

    vi.mocked(getGithubStats).mockResolvedValue(mockStats)

    render(<PudimScore />)
    
    const input = screen.getByPlaceholderText('GitHub Username')
    const button = screen.getByRole('button', { name: /Calculate/i })

    await user.type(input, 'testuser')
    await user.click(button)

    await waitFor(() => {
      const infoButton = screen.getByTitle('View ranking thresholds')
      expect(infoButton).toBeInTheDocument()
    })
  })
})

